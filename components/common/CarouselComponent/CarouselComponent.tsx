/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import "./CarouselComponent.scss";

interface CarouselComponentProps {
  itemList: any[];
  horizontalDirection: "left" | "right";
  itemWidth?: number;
  itemHeight?: number;
  gap?: number;
  speed?: number;
}

const CarouselComponent = (props: CarouselComponentProps) => {
  const { itemList, horizontalDirection, itemWidth = 140, itemHeight = 200, gap = 16, speed = 0 } = props;

  // Refs and state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const count = itemList?.length || 0;

  // Continuous marquee-style animation using requestAnimationFrame
  const offsetRef = useRef(0); // px
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef(0);

  useEffect(() => {
    const trackEl = trackRef.current;
    const containerEl = containerRef.current;
    if (!trackEl || !containerEl) return;
    if (count <= 0) return;

    const itemOuterWidth = itemWidth + gap;
    const singleSetWidth = itemOuterWidth * count;
    singleSetWidthRef.current = singleSetWidth;

    // initialize: place the track so the next items enter from the viewport edge
    // For left-scrolling we position the track to the right of the viewport
    // (positive translateX). For right-scrolling we position it to the left.
    const containerWidth = containerEl.clientWidth || containerEl.getBoundingClientRect().width;
    offsetRef.current = horizontalDirection === 'left' ? containerWidth : -containerWidth;
    // apply initial transform immediately
    trackEl.style.transform = `translateX(${offsetRef.current}px)`;
    lastTimeRef.current = null;

    function step(now: number) {
      if (lastTimeRef.current == null) lastTimeRef.current = now;
      const dt = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;

      if (!isPaused) {
        // move offset: left decreases translateX, right increases it
        if (horizontalDirection === 'left') {
          offsetRef.current -= speed * dt;
        } else {
          offsetRef.current += speed * dt;
        }

        // wrap offset within [-singleSetWidth, singleSetWidth) using modulo
        // this allows infinite looping in both directions
        offsetRef.current = offsetRef.current % singleSetWidth;
        if (offsetRef.current > 0) {
          offsetRef.current -= singleSetWidth;
        }

        trackEl!.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = window.requestAnimationFrame(step);
    }

    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [count, itemWidth, gap, isPaused, horizontalDirection, speed]);

  // Pause on hover / touch
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div
      className="carouselContainer"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carouselViewport"
        style={{ height: `${itemHeight}px` }}
      >
        <div
          className="carouselTrack"
          ref={trackRef}
          style={{
            gap: `${gap}px`,
            transform: `translateX(0px)`,
          }}
        >
          {itemList && itemList.length > 0
            ? // render items 3x for seamless infinite looping
              [...itemList, ...itemList, ...itemList].map((item, i) => (
                <div
                  key={i}
                  className="carouselItem"
                  style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
                >
                  {item.component ? <item.component /> : <></>}
                  <div className="itemName">{item.name}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
