import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-8 py-20 items-center">
      
      {/* Left */}
      <div className="relative">
        <span className="inline-block mb-4 px-4 py-1 border border-blue-500 rounded-full text-sm">
          Hi, I'm Yasir Tella!
        </span>

        <Image
          src="/images/profile.png"
          alt="Yasir Tella"
          width={280}
          height={280}
          className="mt-6"
        />
      </div>

      {/* Right */}
      <div className="border border-blue-500/40 rounded-xl p-8 bg-white/5 backdrop-blur">
        <p className="text-gray-300 leading-relaxed">
          A passionate Frontend Developer & UI/UX Designer dedicated to creating
          clean, user-focused digital experiences. I blend creativity with
          technical skills to design and build interfaces that are not only
          visually appealing but also intuitive and efficient.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="btn-primary">Projects</button>
          <button className="btn-secondary">Contact</button>
        </div>
      </div>
    </section>
  );
}
