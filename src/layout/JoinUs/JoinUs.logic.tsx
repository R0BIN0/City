import gsap from "gsap-trial";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useJoinUs = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".joinUs-section .title-animation-overlay h2", {
        scrollTrigger: {
          trigger: ".joinUs-section",
          start: "-20% center",
          end: "100px 100px",
        },
        transform: "translateY(0px) rotate(0deg)",
        ease: "back.inOut",
        duration: 0.75,
      });
      gsap.to(".joinUs-section .title-animation-overlay button", {
        scrollTrigger: {
          trigger: ".joinUs-section",
          start: "-20% center",
          end: "100px 100px",
        },
        transform: "translateY(0px) rotate(0deg)",
        ease: "back.inOut",
        duration: 0.75,
      });
    });

    return () => ctx.revert();
  }, []);
};
