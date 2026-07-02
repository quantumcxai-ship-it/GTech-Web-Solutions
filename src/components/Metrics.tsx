import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "18+", label: "Years Experience" },
  { value: "3,000+", label: "Happy Clients" },
  { value: "70+", label: "Professionals" },
  { value: "10,000+", label: "Installations" },
];

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".metric-item");
    if (!items || items.length === 0) return;

    gsap.fromTo(
      items,
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
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12 select-none">
      <section className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(30,50,90,0.1)]">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`metric-item flex flex-col justify-center px-4 md:px-8 py-6 md:py-4 ${
                index % 2 === 0 ? "pr-4" : "pl-4 lg:pl-8"
              } ${index >= 2 ? "pt-6 lg:pt-4" : "pb-6 lg:pb-4"}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
