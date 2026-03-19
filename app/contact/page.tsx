import type { Metadata } from "next";

import ContactClient from "./ContactClient";
export const metadata: Metadata = {
  title: "Contact Website Developer in Udaipur | ParshWebCraft",
  description:
    "Contact ParshWebCraft for professional website design and web development services in Udaipur.",
};

export default function ContactPage() {
  return <ContactClient />;
}