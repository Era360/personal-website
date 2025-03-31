"use client";

import * as motion from "motion/react-client";
import { RefObject, useEffect, useRef } from "react";
import { useScroll, useTransform } from "motion/react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  layer: number;
}

interface StarBackgroundProps {
  ScrollableRef?: RefObject<HTMLDivElement | null>;
}

export default function StarBackground({ ScrollableRef }: StarBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const starsRef = useRef<Star[]>([]);
  const twinkleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    container: ScrollableRef,
    layoutEffect: false,
  });

  // Create different parallax effects for different star layers
  const foregroundStarsY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const midgroundStarsY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const backgroundStarsY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    // Create stars data with different layers
    starsRef.current = Array.from({ length: 200 }, () => {
      const layer = Math.floor(Math.random() * 3); // 0, 1, or 2
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size:
          layer === 0
            ? Math.random() * 4.5 + 1 // foreground stars are larger
            : layer === 1
            ? Math.random() * 1.5 + 0.8 // midground stars
            : Math.random() * 1 + 0.5, // background stars are smaller
        alpha: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.5 + 0.5,
        layer: layer,
      };
    });

    // Store the current refs in a local variable for the cleanup function
    const currentLayerRefs = [...layerRefs.current];

    // Clear previous stars
    currentLayerRefs.forEach((layer) => {
      if (layer) layer.innerHTML = "";
    });

    // Create and append stars to their respective layer ref
    starsRef.current.forEach((star) => {
      const layerElement = currentLayerRefs[star.layer];
      if (!layerElement) return;

      const starElement = document.createElement("div");
      starElement.className = "absolute rounded-full bg-white star-element";
      starElement.style.width = `${star.size}px`;
      starElement.style.height = `${star.size}px`;
      starElement.style.left = `${star.x}vw`;
      starElement.style.top = `${star.y}vh`;
      starElement.style.opacity = star.alpha.toString();
      starElement.style.boxShadow = `0 0 ${
        star.size * 2
      }px rgba(255, 255, 255, ${star.alpha})`;
      starElement.style.transition = "opacity 0.5s ease-in-out";

      layerElement.appendChild(starElement);
    });

    // Animation loop for subtle twinkling
    const twinkleStars = () => {
      currentLayerRefs.forEach((layer) => {
        if (!layer) return;
        const stars = layer.querySelectorAll(".star-element");

        stars.forEach((star) => {
          // opacity change
          const alpha = 0.2 + Math.random() * 0.8;
          (star as HTMLElement).style.opacity = alpha.toString();
        });
      });

      twinkleTimerRef.current = setTimeout(twinkleStars, 500);
    };

    // Start twinkling after a short delay to ensure all stars are rendered
    setTimeout(twinkleStars, 100);

    return () => {
      currentLayerRefs.forEach((layer) => {
        if (layer) layer.innerHTML = "";
      });
      if (twinkleTimerRef.current) {
        clearTimeout(twinkleTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <motion.div
        ref={(el) => {
          layerRefs.current[0] = el;
        }}
        className="absolute inset-0"
        data-layer="0"
        style={{ y: foregroundStarsY }}
      />
      <motion.div
        ref={(el) => {
          layerRefs.current[1] = el;
        }}
        className="absolute inset-0"
        data-layer="1"
        style={{ y: midgroundStarsY }}
      />
      <motion.div
        ref={(el) => {
          layerRefs.current[2] = el;
        }}
        className="absolute inset-0"
        data-layer="2"
        style={{ y: backgroundStarsY }}
      />
    </div>
  );
}
