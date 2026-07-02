import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Liquid Wave Morphing Animation (Option 1) - Continuous Loop
    if (waveRef.current) {
      const path2 = "M 0,20 Q 360,35 720,10 T 1440,20 L 1440,60 L 0,60 Z";
      const path3 = "M 0,20 Q 360,5 720,25 T 1440,20 L 1440,60 L 0,60 Z";

      const waveTl = gsap.timeline({ repeat: -1, yoyo: true });
      waveTl.to(waveRef.current, {
        attr: { d: path2 },
        duration: 3,
        ease: "sine.inOut"
      })
      .to(waveRef.current, {
        attr: { d: path3 },
        duration: 3,
        ease: "sine.inOut"
      });

      return () => {
        waveTl.kill();
      };
    }
  }, []);

  useEffect(() => {
    // Blended Elastic Spring Stagger Reveal (Option 2) with Bidirectional Scroll Reset & Floating Loop
    const reveals = containerRef.current?.querySelectorAll(".footer-reveal");
    if (!reveals || reveals.length === 0) return;

    // Set initial layout values
    gsap.set(reveals, { opacity: 0, y: 25 });

    let floatTween: gsap.core.Tween | null = null;

    const entrance = gsap.fromTo(
      reveals,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            if (floatTween) floatTween.kill();
            gsap.to(reveals, { y: 0, duration: 0.1 });
          },
          onEnterBack: () => {
            if (floatTween) floatTween.kill();
            gsap.to(reveals, { y: 0, duration: 0.1 });
          },
          onLeave: () => {
            if (floatTween) floatTween.kill();
          },
          onLeaveBack: () => {
            if (floatTween) floatTween.kill();
          }
        },
        onComplete: () => {
          // Once the reveal animation completes, start the continuous floating wave loop
          floatTween = gsap.to(reveals, {
            y: -6,
            duration: 2.2,
            stagger: {
              each: 0.08,
              repeat: -1,
              yoyo: true
            },
            ease: "sine.inOut"
          });
        }
      }
    );

    return () => {
      entrance.scrollTrigger?.kill();
      entrance.kill();
      if (floatTween) floatTween.kill();
    };
  }, []);

  return (
    <footer ref={containerRef} className="relative w-full max-w-[1536px] mx-auto px-6 md:px-12 py-12 md:py-16 border-t border-slate-200 bg-[#e2e8f0]">
      {/* Liquid Wave Morphing Edge (Translucent Glowing Glass) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="relative block w-full h-[30px] md:h-[60px]" preserveAspectRatio="none">
          <path ref={waveRef} d="M 0,20 Q 360,10 720,20 T 1440,20 L 1440,60 L 0,60 Z" fill="url(#footer-wave-grad)" />
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 select-none">
        {/* Left Column - Logo & Info */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-6">
          <div>
            <span className="footer-reveal inline-block text-2xl font-bold tracking-wider text-slate-800">GTECH</span>
            <p className="footer-reveal mt-4 text-sm font-medium text-slate-500 max-w-sm leading-relaxed">
              Gtech Web Solutions Pvt Ltd envisions energetic, innovative, and creative individuals delivering best-in-class software, ERP, mobile app, and financial business solutions.
            </p>
          </div>
          <div className="footer-reveal text-xs text-slate-400 font-medium">
            &copy; {currentYear} Gtech Web Solutions Pvt Ltd. All rights reserved.
          </div>
        </div>

        {/* Right Grid Columns */}
        <div>
          <h4 className="footer-reveal text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Solutions</h4>
          <ul className="space-y-3">
            <li className="footer-reveal">
              <a href="#nidhi" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Nidhi Software
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#cooperative" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Cooperative Society
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#microfinance" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Microfinance Software
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#nbfc" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                NBFC Software
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-reveal text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Services</h4>
          <ul className="space-y-3">
            <li className="footer-reveal">
              <a href="#design" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Website Design
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#mobile" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Mobile App Dev
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#erp" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Custom ERP
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#offshore" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Offshore Dev
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-reveal text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Company</h4>
          <ul className="space-y-3">
            <li className="footer-reveal">
              <a href="#about" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                About Us
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#clients" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Our Clients
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#career" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Career
              </a>
            </li>
            <li className="footer-reveal">
              <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-slate-800 transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
