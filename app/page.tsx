import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";


// 1. Define the interface for the SkillCard props
interface SkillCardProps {
  title: string;
  items: string[];
}

// 2. Define the SkillCard ONCE (Modern Tabbed Design)
function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="relative pt-10 group">
      {/* The Tabbed Header */}
      <div className="absolute top-0 left-0">
        <div className="relative bg-zinc-800/80 border border-blue-500/30 border-b-0 px-8 py-2 rounded-t-2xl text-blue-400 font-semibold text-lg shadow-lg">
          {title}
          {/* Decorative tail to match Design */}
          <div className="absolute -right-[1px] bottom-0 w-4 h-4 bg-zinc-800 border-r border-blue-500/30 rounded-br-none" />
        </div>
      </div>

      {/* The Content Card */}
      <div className="bg-zinc-900/40 border border-zinc-700/50 p-8 rounded-2xl rounded-tl-none backdrop-blur-sm group-hover:border-blue-500/20 transition-all duration-300 shadow-2xl">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={`${title}-${index}`} className="flex items-start gap-4 text-zinc-300">
              {/* Custom Blue Bullet */}
              <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] shrink-0" />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-12 pt-16 md:pt-30 pb-20">
          
          {/* 1. PROFILE IMAGE CONTAINER */}
          <div className="relative w-full aspect-square max-w-[4300px] lg:max-w-[430px] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shrink-0 shadow-2xl">
           <div className="absolute -right-[1px] bottom-0 w-4 h-4 bg-zinc-800 border-r border-blue-500/30 rounded-br-none" />
            <Image 
              src="/images/profile.webp" 
              alt="Yasir Tella" 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          {/* 2. HI BUBBLE */}
          <div className="shrink-0 z-10 md:self-start md:mt-0">
            <div className="bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl text-white whitespace-nowrap">
              Hi, I'm Yasir Tella !
            </div>
          </div>

    {/* 3. HERO DESCRIPTION */}
<div className="flex flex-col w-full max-w-md lg:max-w-[480px]">
  {/* The Description Box */}
  <div className="bg-zinc-900/40 border border-blue-400/20 p-8 rounded-[2rem] relative group shadow-lg min-h-[285px] flex flex-col justify-center">
    <p className="text-zinc-300 leading-relaxed text-md md:text-lg">
      <strong className="text-white">A passionate Frontend Developer & UI/UX Designer</strong> dedicated to creating clean, user-focused digital experiences. I blend creativity with technical skills to design and build interfaces that are not only visually appealing but also intuitive and efficient.
    </p>
  </div>

  <div className="flex w-full gap-6 mt-auto pt-6">

  {/* PROJECTS */}
  <Link
    href="/projects"
    className="flex-1 px-10 py-4 bg-zinc-800/60 border border-blue-400/20 rounded-full font-bold hover:bg-zinc-700 hover:border-blue-400/50 transition-all flex items-center justify-center gap-3 text-lg group shadow-lg"
  >
    <span className="text-zinc-200">Projects</span>
    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">»»</span>
  </Link>

  {/* CONTACT */}
<Link
  href="/#contact"
  className="flex-1 px-10 py-4 bg-zinc-800/60 border border-blue-400/20 rounded-full font-bold hover:bg-zinc-700 hover:border-blue-400/50 transition-all flex items-center justify-center gap-3 text-lg group shadow-lg"
>
  <span className="text-zinc-200">Contact</span>
  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">»»</span>
</Link>

</div>
</div>
        </section>

        {/* ================= ABOUT & TECH STACK ================= */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 relative">
          
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-sm rotate-[-15deg]" />
              <div className="bg-zinc-900/40 border border-zinc-700/50 p-8 rounded-[2rem] shadow-xl backdrop-blur-sm">
                <div className="inline-block px-4 py-1 border border-zinc-600 rounded-full text-sm font-medium mb-6">
                  About me
                </div>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  A Final year Computer Scientist at Pan-Atlantic University, where I've built a strong foundation in software development. Over time, I've sharpened my skills in JavaScript, React, and Java, applying them to both web applications.
                </p>
              </div>
            </div>

            <a
  href="#skills"
  className="group flex items-center gap-3 px-8 py-3 bg-zinc-800/40 border border-blue-500/30 rounded-full hover:bg-zinc-800 transition-all"
>
  <span className="text-blue-100 font-medium">Explore Skills</span>
  <div className="flex flex-col -space-y-1 text-blue-500/50 group-hover:text-blue-400">
    <span>︾</span>
  </div>
</a>

          </div>

          <div className="space-y-12 relative">
            <div className="relative w-full aspect-square max-w-[1000px] mx-auto">
              <Image 
                src="/images/ui-illustration.png" 
                alt="UI Design Illustration" 
                fill 
                className="object-contain"
              />
            </div>

            <div className="relative max-w-[380px] ml-auto">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-sm rotate-[-15deg]" />
              <div className="bg-zinc-900/40 border border-zinc-700/50 p-8 rounded-[2rem] shadow-xl backdrop-blur-sm">
                <h3 className="text-zinc-100 font-medium mb-6">Tech stack chips</h3>
                <ul className="space-y-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'].map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS GRID ================= */}
<section
  id="skills"
  className="scroll-mt-32 grid md:grid-cols-2 gap-10 py-20">

          <SkillCard 
            title="Frontend Development" 
            items={[
              "HTML5, CSS3, JavaScript (ES6+)", 
              "React, Next.js", 
              "Responsiveness and performance optimization"
            ]} 
          />
          <SkillCard 
            title="UI/UX Design" 
            items={[
              "Wireframing & prototyping (Figma)", 
              "User flows & information architecture", 
              "Design systems",
              "Visual hierarchy & usability principles"
            ]} 
          />
          <SkillCard 
            title="Cybersecurity (SOC Analyst)" 
            items={[
              "Security monitoring & log analysis", 
              "Incident detection and response", 
              "Network and endpoint security basics",
              "Threat awareness & risk assessment"
            ]} 
          />
          <SkillCard 
            title="Supporting Skills" 
            items={[
              "Git & GitHub (version control)", 
              "Deployment (Vercel, Netlify)", 
              "Debugging & testing",
              "Documentation & collaboration"
            ]} 
          />
        </section>
     {/* ================= CTA ================= */}
<section className="text-center py-20 space-y-8">
  <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
    Have a project in mind <br />
    <span className="text-blue-500">or want to work together?</span>
  </h2>

  <a
    href="#contact"
    className="inline-flex px-12 py-4 bg-zinc-800/50 border border-zinc-700 rounded-full text-lg items-center gap-4 mx-auto hover:bg-zinc-800 transition shadow-xl group"
  >
    <span className="text-zinc-400">Get In</span>
    <span className="font-bold text-white">Touch</span>
    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">»»</span>
  </a>
</section>

      </div>
    </main>
  );
}