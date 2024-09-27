import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { IActivityCard } from "@/interfaces/components/ActivityCard/IActivityCard";

gsap.registerPlugin(ScrollTrigger);

export const useActivityCard = (props: IActivityCard) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 300,
        rotate: `${props.animation.rotate}deg`,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "0px bottom",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { ref };
};
