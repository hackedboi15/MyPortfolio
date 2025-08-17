import { FormEvent, useState } from "react";
import SectionCard from "../components/SectionCard";
import { sendContact } from "../api";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error, setError] = useState<string | undefined>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(undefined);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries()) as { name: string; email: string; message: string };
    try {
      await sendContact(body);
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Failed to send");
      setStatus("error");
    }
  }

  return (
    <SectionCard id="contact" title="Contact">
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <input name="name" placeholder="Name" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" required />
          <input type="email" name="email" placeholder="Email" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" required />
          <textarea name="message" placeholder="Message" className="px-3 py-2 rounded bg-slate-900 border border-slate-700 h-32" required />
          <div className="flex gap-3">
            <button disabled={status === "sending"} className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold btn-glow">
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            <a href="mailto:itsankitgupta1510@gmail.com" className="px-4 py-2 rounded-md border border-slate-700">
              Email Direct
            </a>
          </div>
          {status === "sent" && <p className="text-emerald-400">Thanks! I will get back soon.</p>}
          {status === "error" && <p className="text-rose-400">{error}</p>}
        </form>
        <div className="mt-6 text-slate-400">
          <p>Email: itsankitgupta1510@gmail.com</p>
          <p>Phone: +91 6205746793</p>
        </div>
      </div>
    </SectionCard>
  );
}
