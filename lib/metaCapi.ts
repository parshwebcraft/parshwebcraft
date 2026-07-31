// lib/metaCapi.ts
import crypto from "crypto";

// SHA-256 helper for hashing private user identifiers as required by Meta CAPI
function sha256(text?: string | null): string | null {
  if (!text) return null;
  return crypto
    .createHash("sha256")
    .update(text.trim().toLowerCase())
    .digest("hex");
}

interface MetaCapiParams {
  eventName: string;
  eventId: string;
  sourceUrl: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  userData?: {
    email?: string | null;
    phone?: string | null;
    name?: string | null;
  };
}

export async function sendMetaCapiEvent({
  eventName,
  eventId,
  sourceUrl,
  ipAddress,
  userAgent,
  userData = {},
}: MetaCapiParams) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.debug("[Meta CAPI] Missing Meta Pixel ID or Meta System User Access Token in environment variables.");
    return;
  }

  // Format phone to digits only (e.g. +91 95213-47419 -> 919521347419)
  let formattedPhone = userData.phone || "";
  if (formattedPhone) {
    formattedPhone = formattedPhone.replace(/\D/g, "");
    // If user input standard 10-digit mobile number, prepend India (+91) code as default
    if (formattedPhone.length === 10) {
      formattedPhone = `91${formattedPhone}`;
    }
  }

  try {
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: sourceUrl,
          action_source: "website",
          user_data: {
            client_ip_address: ipAddress || null,
            client_user_agent: userAgent || null,
            em: userData.email ? [sha256(userData.email)] : null,
            ph: formattedPhone ? [sha256(formattedPhone)] : null,
            fn: userData.name ? [sha256(userData.name.split(" ")[0])] : null,
            ln:
              userData.name && userData.name.split(" ").length > 1
                ? [sha256(userData.name.split(" ").slice(1).join(" "))]
                : null,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Meta CAPI] Event transmission failed:", errorText);
    } else {
      console.debug(`[Meta CAPI] Event '${eventName}' successfully sent server-side.`);
    }
  } catch (error: any) {
    console.error("[Meta CAPI] Error triggering server event:", error?.message || error);
  }
}
