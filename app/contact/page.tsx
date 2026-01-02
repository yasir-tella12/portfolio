"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    /* Increased pt-40 to ensure clear separation from the fixed navbar */
    <main className="min-h-screen bg-[#121212] text-white pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header Section: Added mb-20 for more space before the content starts */}
        <header className="mb-20">
          <h1 className="text-5xl font-bold mb-6 tracking-tight italic">Contact</h1>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full"></div>
          <p className="text-zinc-400 mt-8 text-lg max-w-2xl leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm currently available for new opportunities and collaborations.
          </p>
        </header>

        {/* Main Grid: Increased gap to 24 for a more premium, airy feel */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT: Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 tracking-wide">Connect with me</h3>
              <div className="space-y-8">
                {/* Mail Link */}
                <a
                  href="mailto:yasirtella12@gmail.com"
                  className="flex items-center gap-6 text-zinc-400 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-500/10 transition-all border border-white/5 shadow-xl">
                    <Mail size={26} className="text-blue-500" />
                  </div>
                  <span className="text-lg font-medium tracking-tight">yasirtella12@gmail.com</span>
                </a>

                {/* Github Link */}
                <a
                  href="https://github.com/yasir-tella12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 text-zinc-400 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-500/10 transition-all border border-white/5 shadow-xl">
                    <Github size={26} className="text-blue-500" />
                  </div>
                  <span className="text-lg font-medium tracking-tight">github.com/yasir-tella12</span>
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/yasir-tella-1a4017272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 text-zinc-400 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-500/10 transition-all border border-white/5 shadow-xl">
                    <Linkedin size={26} className="text-blue-500" />
                  </div>
                  <span className="text-lg font-medium tracking-tight">linkedin.com/in/yasir-tella</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          {/* Added more internal padding (p-10) and subtle backdrop blur for depth */}
          <div className="bg-zinc-900/30 p-10 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-white placeholder:text-zinc-700 shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-white placeholder:text-zinc-700 shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about..."
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-white placeholder:text-zinc-700 shadow-inner"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-white resize-none placeholder:text-zinc-700 shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-blue-600/30 uppercase tracking-widest text-sm"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}