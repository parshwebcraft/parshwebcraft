"use client";

interface DeleteSessionButtonProps {
  sessionId: string;
}

export default function DeleteSessionButton({ sessionId }: DeleteSessionButtonProps) {
  async function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirm("Delete this chat session and all its messages? This cannot be undone.")) return;
    try {
      const res = await fetch("/api/admin/chat/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      if (res.ok) {
        window.location.reload();
      } else {
        alert("Failed to delete session. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleDelete}>
      <button
        type="submit"
        className="text-xs text-red-400 hover:text-red-300 border border-red-400/20 hover:border-red-400/40 px-2.5 py-1 rounded-lg transition whitespace-nowrap"
        title="Delete this conversation"
      >
        🗑 Delete
      </button>
    </form>
  );
}
