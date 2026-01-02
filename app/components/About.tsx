import Image from "next/image";

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-8 py-20 items-center">
      
      <div className="border border-blue-500/40 rounded-xl p-8 bg-white/5">
        <h3 className="text-sm text-blue-400 mb-2">About me</h3>
        <p className="text-gray-300 leading-relaxed">
          A Final year Computer Scientist at Pan-Atlantic University, where I've
          built a strong foundation in software development. Over time, I've
          sharpened my skills in JavaScript, React, and Java, applying them to
          real-world projects including a Cafeteria Management System and a
          biometric-based attendance system.
        </p>

        <button className="btn-primary mt-6">Explore Skills</button>
      </div>

      <Image
        src="/images/ui-illustration.png"
        alt="UI illustration"
        width={420}
        height={420}
      />
    </section>
  );
}
