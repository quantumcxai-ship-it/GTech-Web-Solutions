import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const badge = sectionRef.current?.querySelector(".about-badge");
    const heading = sectionRef.current?.querySelector(".about-heading");
    const desc = sectionRef.current?.querySelectorAll(".about-desc");
    const btn = sectionRef.current?.querySelectorAll(".about-btn");
    const imgLeft = sectionRef.current?.querySelectorAll(".about-img-left");
    const imgRight = sectionRef.current?.querySelectorAll(".about-img-right");
    const centerCol = sectionRef.current?.querySelector(".about-center-col");

    // Staggered Entrance
    if (badge && heading) {
      gsap.fromTo(
        [badge, heading, ...Array.from(desc || []), ...Array.from(btn || []), ...Array.from(imgLeft || []), ...Array.from(imgRight || [])],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Scroll-driven Parallax (Base Layer)
    if (imgLeft && imgLeft.length > 0) {
      imgLeft.forEach((img) => {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    if (imgRight && imgRight.length > 0) {
      imgRight.forEach((img) => {
        gsap.to(img, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    // Advanced 3D Interactive Mouse Parallax (Top Layer)
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      // Tilt the entire card in 3D space
      gsap.to(card, {
        rotateY: x * 6, // max 6 degrees tilt
        rotateX: -y * 6,
        transformPerspective: 1200,
        ease: "power3.out",
        duration: 0.6,
      });

      // Shift left image in opposite direction (parallax depth)
      if (imgLeft) {
        gsap.to(imgLeft, {
          x: -x * 20,
          y: -y * 20,
          ease: "power3.out",
          duration: 0.6,
        });
      }

      // Shift right image in mouse direction
      if (imgRight) {
        gsap.to(imgRight, {
          x: x * 25,
          y: y * 25,
          ease: "power3.out",
          duration: 0.6,
        });
      }

      // Shift center content card slightly
      if (centerCol) {
        gsap.to(centerCol, {
          x: x * 10,
          y: y * 10,
          ease: "power3.out",
          duration: 0.6,
        });
      }
    };

    const onMouseLeave = () => {
      // Smoothly reset all 3D rotations and translations
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.8,
      });

      if (imgLeft) {
        gsap.to(imgLeft, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.8,
        });
      }

      if (imgRight) {
        gsap.to(imgRight, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.8,
        });
      }

      if (centerCol) {
        gsap.to(centerCol, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.8,
        });
      }
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12 select-none perspective-card-container">
      <section
        ref={cardRef}
        className="about-card bg-white/15 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden font-sans shadow-lg transition-shadow duration-500 hover:shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Badge row */}
        <div className="about-badge flex items-center gap-3 mb-6 sm:mb-8" style={{ transform: "translateZ(30px)" }}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            1
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 px-3 sm:px-4 py-1 sm:py-1.5">
            Introducing Gtech Web Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="about-heading text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28" style={{ transform: "translateZ(40px)" }}>
          Innovative software engineering, delivering{" "}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          intelligence infinite across enterprises.
        </h2>

        {/* MOBILE / TABLET Layout */}
        <div className="lg:hidden">
          <p className="about-desc text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
            For over 18 years, we have engineered custom banking, co-operative society, and enterprise ERP solutions that empower financial institutions to scale and thrive.
          </p>

          <div className="about-btn mb-8">
            <button className="group bg-[#1e293b] hover:bg-[#0f172a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-sm">
              <div className="overflow-hidden h-[20px]">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center">About Gtech</span>
                  <span className="h-[20px] flex items-center">About Gtech</span>
                </div>
              </div>
              <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1e293b] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              </div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="sm:w-[45%] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]" style={{ transform: "translateZ(25px)" }}>
              <img
                src="/about_small.png"
                alt="Mobile mockups"
                className="about-img-left w-full aspect-[438/346] scale-125 object-cover"
              />
            </div>
            <div className="sm:w-[55%] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]" style={{ transform: "translateZ(25px)" }}>
              <img
                src="/about_large.png"
                alt="Developers workspace"
                className="about-img-right w-full aspect-[900/600] scale-125 object-cover"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP Layout */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          {/* Left Column */}
          <div className="self-end w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]" style={{ transform: "translateZ(30px)" }}>
            <img
              src="/about_small.png"
              alt="Mobile mockups"
              className="about-img-left w-full aspect-[438/346] scale-125 object-cover"
            />
          </div>

          {/* Center Column */}
          <div className="about-center-col self-start flex flex-col justify-end pl-2" style={{ transform: "translateZ(50px)" }}>
            <p className="about-desc text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 mb-6">
              For over 18 years, we have engineered custom banking,<br />
              co-operative society, and enterprise ERP solutions that<br />
              empower financial institutions to scale and thrive.
            </p>
            <div className="about-btn flex">
              <button className="group bg-[#1e293b] hover:bg-[#0f172a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-sm">
                <div className="overflow-hidden h-[20px]">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center">About Gtech</span>
                    <span className="h-[20px] flex items-center">About Gtech</span>
                  </div>
                </div>
                <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1e293b] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="self-end w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]" style={{ transform: "translateZ(30px)" }}>
            <img
              src="/about_large.png"
              alt="Developers workspace"
              className="about-img-right w-full aspect-[3/2] scale-125 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
