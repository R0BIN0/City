import gsap from "gsap-trial";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useMain = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: -100,
        scrollTrigger: {
          trigger: ref.current,
          start: "-100px 0px",
          scrub: true,
        },
      });

      gsap.to(".main-section .title-animation-overlay h1", {
        transform: "translateY(0px) rotate(0)",
        ease: "back.inOut",
      });

      gsap.to(".main-section .title-animation-overlay button", {
        transform: "translateY(0px) rotate(0)",
        ease: "back.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return { ref };
};
