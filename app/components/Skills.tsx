const Card = ({ title, items }: { title: string; items: string[] }) => (
  <div className="border border-blue-500/40 rounded-xl p-6 bg-white/5">
    <h4 className="text-blue-400 mb-4">{title}</h4>
    <ul className="text-gray-300 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  return (
    <section className="px-8 py-20 grid md:grid-cols-2 gap-8">
      <Card
        title="Frontend Development"
        items={[
          "HTML5, CSS3, JavaScript (ES6+)",
          "React & Next.js",
          "Responsive design",
          "Performance optimization",
        ]}
      />

      <Card
        title="UI/UX Design"
        items={[
          "Wireframing & prototyping (Figma)",
          "User flows & IA",
          "Design systems",
          "Usability principles",
        ]}
      />

      <Card
        title="Cybersecurity (SOC Analyst)"
        items={[
          "Security monitoring & log analysis",
          "Incident detection & response",
          "Network & endpoint basics",
          "Threat awareness",
        ]}
      />

      <Card
        title="Supporting Skills"
        items={[
          "Git & GitHub",
          "Deployment (Vercel, Netlify)",
          "Debugging & testing",
          "Documentation",
        ]}
      />
    </section>
  );
}
