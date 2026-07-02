import { useEffect, useRef } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".feature-card");
    if (!cards || cards.length === 0) return;

    // Entrance Animation (Scroll-Triggered)
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Hover Animation (Option 2: Magnetic Content Pull & Icon Rotation)
    cards.forEach((card) => {
      const targets = card.querySelectorAll("h3, p, button, svg, .flex");

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

        // Gently shift the text and elements towards the mouse
        targets.forEach((target) => {
          gsap.to(target, {
            x: x * 10, // max 10px shift
            y: y * 10,
            ease: "power2.out",
            duration: 0.4,
          });
        });

        // Rotate arrow inside Card 4 or similar cards
        const arrow = card.querySelector(".lucide-arrow-up-right");
        if (arrow) {
          gsap.to(arrow, {
            rotate: 45,
            ease: "power2.out",
            duration: 0.4,
          });
        }
      };

      const onMouseLeave = () => {
        // Reset all targets
        targets.forEach((target) => {
          gsap.to(target, {
            x: 0,
            y: 0,
            ease: "power2.out",
            duration: 0.6,
          });
        });

        const arrow = card.querySelector(".lucide-arrow-up-right");
        if (arrow) {
          gsap.to(arrow, {
            rotate: 0,
            ease: "power2.out",
            duration: 0.6,
          });
        }
      };

      card.addEventListener("mousemove", onMouseMove as EventListener);
      card.addEventListener("mouseleave", onMouseLeave as EventListener);
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-12 md:py-20 select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-slate-200/55 pb-6">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-850 tracking-tight whitespace-nowrap">
            Architected for enterprise systems
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            Gtech Web Solutions follows an 8-step working streamline to ensure complete system quality.
          </p>
        </div>
        <div>
          <button className="px-5 py-2 rounded-full border border-slate-300 hover:border-slate-800 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors duration-300">
            View Solutions
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
        {/* Card 1: Tall Left */}
        <div className="feature-card md:row-span-2 min-h-[32rem] md:min-h-[38rem] bg-white/15 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-all duration-500 shadow-xl">
          <div className="relative z-10 w-full">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 tracking-wider">
              <span>01/</span>
              <span>WORK SYSTEM</span>
            </div>
            {/* Main Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight mt-16 leading-snug">
              From abstract concept <br /> to deployment blueprint
            </h3>
          </div>

          <div className="relative z-10">
            <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed max-w-xs">
              Analyze business requirements, create abstract models, and coordinate planning to synchronize perfectly with your enterprise goals.
            </p>
          </div>
        </div>

        {/* Card 2: Wide Top Right */}
        <div className="feature-card md:col-span-2 bg-white/15 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-all duration-500 min-h-[15rem] md:min-h-[18rem] shadow-xl">
          <div className="relative z-10 w-full">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] tracking-tight">
                Enterprise Banking & Cooperative Software
              </h3>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider">02/</span>
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
              Vast knowledge and experience building Nidhi Software, Cooperative Credit Society Software, Microfinance Software, NBFC and PACS Software.
            </p>
          </div>
        </div>

        {/* Card 3: Bottom Right 1 */}
        <div className="feature-card bg-white/15 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-all duration-500 min-h-[15rem] md:min-h-[18rem] shadow-xl">
          <div className="relative z-10 w-full">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 tracking-wider">
              <span>QUALITY-DRIVEN</span>
              <span>03/</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-6 leading-relaxed">
              System intention projected effectively. Developing clean software following rigorous engineering and coding attributes.
            </p>
          </div>

          <div className="relative z-10 flex items-end justify-between w-full mt-4">
            <button className="px-4 py-1.5 border border-slate-200 hover:border-slate-800 rounded-full text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-colors duration-300">
              View Services
            </button>
            <ShieldCheck className="w-5 h-5 text-slate-300 pointer-events-none" />
          </div>
        </div>

        {/* Card 4: Bottom Right 2 */}
        <div className="feature-card bg-white/15 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-all duration-500 min-h-[15rem] md:min-h-[18rem] shadow-xl">
          <div className="relative z-10 w-full">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 tracking-wider">
              <span>CROSS-CHAIN</span>
              <span>04/</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center py-2 relative z-10">
            <div className="w-11 h-11 rounded-full bg-slate-100/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-200/50">
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-[10px] md:text-[11px] font-medium text-slate-500 leading-relaxed text-center">
              Unit testing and acceptance procedures to validate functional compliance before deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
