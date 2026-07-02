import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = containerRef.current?.querySelector(".cta-heading");
    const buttons = containerRef.current?.querySelector(".cta-buttons");

    if (heading && buttons) {
      gsap.fromTo(
        [heading, buttons],
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
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center p-3 md:p-5 bg-[#e2e8f0]">
      <section className="relative w-full max-w-[1536px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center py-24 md:py-36 px-6 text-center group">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/25 z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl select-none">
          <h2 className="cta-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-md">
            Transform your business with high-performance software.
          </h2>

          <div className="cta-buttons flex flex-row flex-wrap items-center justify-center gap-4">
            <button className="bg-white hover:bg-white/95 text-slate-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0">
              <span>Start Now</span>
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
