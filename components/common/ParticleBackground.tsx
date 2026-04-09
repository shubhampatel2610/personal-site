"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Transparent for overlay use
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 5 },
          grab: { distance: 180, links: { opacity: 0.5 } },
          repulse: { distance: 120, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#38bdf8", "#6366f1", "#a78bfa", "#f472b6"] },
        links: {
          color: { value: ["#60a5fa", "#8b5cf6", "#a78bfa", "#38bdf8"] },
          distance: 160,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 1.2,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 55,
        },
        opacity: {
          value: 0.75,
          random: { enable: true, minimumValue: 0.35 },
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.5,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "star", "polygon", "square", "triangle"],
          options: {
            star: { sides: 5 },
            polygon: { sides: 6 },
            square: { sides: 4 },
            triangle: { sides: 3 },
          },
        },
        size: {
          value: { min: 1.5, max: 4.5 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1.2,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.02,
            opacity: 0.7,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const particleClasses = "absolute inset-0";

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className={particleClasses}
    />
  );
};

export default ParticleBackground;