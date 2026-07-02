import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = containerRef.current?.querySelector(".hero-badge");
    const heading = containerRef.current?.querySelector(".hero-heading");
    const paragraph = containerRef.current?.querySelector(".hero-paragraph");
    const card = containerRef.current?.querySelector(".hero-card");

    if (badge && heading && paragraph) {
      gsap.fromTo(
        [badge, heading, paragraph],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[115vh] flex items-center justify-center p-3 md:p-5 bg-[#e2e8f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

        {/* Navbar */}
        {/* Mobile Navbar */}
        <div className="flex md:hidden w-full items-center justify-between px-6 py-6 absolute top-0 left-0 right-0 z-20">
          <span className="text-xl font-bold tracking-wider text-slate-800">GTECH</span>
          <button className="bg-[#1e293b] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between px-12 py-4 absolute top-0 left-0 right-0 z-20">
          {/* Left spacer to center nav links */}
          <div className="w-[180px]"></div>

          {/* Centered Nav Links */}
          <div className="flex items-center gap-8 text-[#5E6470] font-semibold text-[13px] tracking-wide">
            <a href="#solutions" className="hover:text-slate-900 transition-colors flex items-center gap-0.5">
              Solutions <ChevronRight className="w-3 h-3 transform rotate-90 opacity-70" />
            </a>
            <a href="#services" className="hover:text-slate-900 transition-colors flex items-center gap-0.5">
              Services <ChevronRight className="w-3 h-3 transform rotate-90 opacity-70" />
            </a>
            <a href="#clients" className="hover:text-slate-900 transition-colors">Clients</a>
            <a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a>
          </div>

          {/* Right button */}
          <div className="w-[180px] flex justify-end">
            <button className="bg-[#1e293b] hover:bg-[#0f172a] text-white font-semibold text-xs pl-2.5 pr-5 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-300 shadow-md">
              <span className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl select-none pt-[11vh] md:pt-[14vh]">
          {/* Hero Badge */}
          <div className="hero-badge flex items-center gap-1.5 bg-white/60 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-slate-700" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">18 Years of Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#5E6470] mb-5">
            Fluid Systems by Gtech Web Solutions
          </h1>

          {/* Paragraph */}
          <p className="hero-paragraph text-xs md:text-sm text-[#5E6470]/85 font-semibold max-w-md md:max-w-xl leading-relaxed px-4">
            We design, develop, and deploy customized ERP, mobile app, <br className="hidden md:inline" /> and financial institution software.
          </p>
        </div>

        {/* Bottom Left Card */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
          <div className="hero-card bg-white/15 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-5 flex flex-col gap-4 shadow-xl w-[200px]">
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-800 tracking-tight leading-none">3,000+</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-none">Happy Clients</div>
            </div>
            <button className="bg-white hover:bg-slate-50 text-slate-800 font-bold py-2 px-4 rounded-full text-[10px] tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-sm border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Right Corner Cut-out */}
        <div className="absolute bottom-0 right-0 w-[270px] h-[96px] bg-[#e2e8f0] rounded-tl-[3.5rem] p-6 flex items-center gap-3.5 z-10">
          <a
            href="#portfolio"
            className="flex items-center gap-3.5 text-slate-700 hover:text-slate-900 group/corner transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200/80 flex items-center justify-center group-hover/corner:bg-slate-300 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-bold text-slate-800 leading-none mb-1">Solutions</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-0.5">
                Portfolio <ChevronRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </a>
        </div>

        {/* Crucial Inverted Corner SVG Trick */}
        {/* Top SVG (above the top-right corner of cut-out) */}
        <svg
          className="absolute bottom-[96px] right-0 w-14 h-14 z-10 pointer-events-none"
          viewBox="0 0 56 56"
        >
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#e2e8f0" />
        </svg>

        {/* Left SVG (to the left of bottom-left corner of cut-out) */}
        <svg
          className="absolute bottom-0 right-[270px] w-14 h-14 z-10 pointer-events-none"
          viewBox="0 0 56 56"
        >
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#e2e8f0" />
        </svg>
      </section>
    </div>
  );
}
