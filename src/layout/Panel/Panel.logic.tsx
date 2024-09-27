import gsap from "gsap-trial";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePanel = () => {
  const refs = useRef<HTMLElement[]>([]);

  const addRef = (el: HTMLElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const INITIAL = -500;
      refs.current.forEach((r, i) => {
        const objectPositionX: number = INITIAL + i * -250;
        gsap.from(r, {
          objectPosition: `${objectPositionX}px -400px`,
          scrollTrigger: {
            trigger: ".panel-section",
            start: "top bottom",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return { addRef };
};
