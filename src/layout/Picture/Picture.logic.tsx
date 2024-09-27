import gsap from "gsap-trial";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePicture = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".picture-section .title-animation-overlay h2", {
        scrollTrigger: {
          trigger: ".picture-section",
          start: "-20% center",
          end: "100px 100px",
        },
        transform: "translateY(0px) rotate(-1.5deg)",
        ease: "back.inOut",
        duration: 0.75,
      });

      gsap.to(".picture-image", {
        scrollTrigger: {
          trigger: ".picture-section",
          start: "-20% center",
          scrub: true,
        },
        objectPosition: "0px -100px",
      });
    });

    return () => ctx.revert();
  }, []);
};
