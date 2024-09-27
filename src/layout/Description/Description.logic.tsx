import gsap from "gsap-trial";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useDescription = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".description-section .title-animation-overlay h2", {
        scrollTrigger: {
          trigger: ".description-section",
          start: "-50% bottom",
        },
        transform: "translateY(0px) rotate(0deg)",
        ease: "back.inOut",
        duration: 0.75,
      });

      gsap.to(".description-section .description-right p", {
        scrollTrigger: {
          trigger: ".description-section",
          start: "-50% bottom",
        },
        transform: "translateY(0px)",
        opacity: 1,
        ease: "back.inOut",
        duration: 0.75,
      });
    });

    return () => ctx.revert();
  }, []);
};
