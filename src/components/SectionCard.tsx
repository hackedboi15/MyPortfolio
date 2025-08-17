import { ReactNode } from "react";

export default function SectionCard({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      <div className="surface p-6">
        <div className="grid gap-6">{children}</div>
      </div>
    </section>
  );
}
