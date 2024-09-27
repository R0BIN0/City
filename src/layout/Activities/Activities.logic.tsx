import gsap from "gsap-trial";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useActivities = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".activities-section .title-animation-overlay h2", {
        scrollTrigger: {
          trigger: ".activities-section",
          start: "-20% center",
          end: "100px 100px",
        },
        transform: "translateY(0px) rotate(1.5deg)",
        ease: "back.inOut",
        duration: 0.75,
      });
    });

    return () => ctx.revert();
  }, []);
};
