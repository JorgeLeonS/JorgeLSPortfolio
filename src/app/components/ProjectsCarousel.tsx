'use client';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { projectsData, Project } from '../data/ProjectsData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/carousel-overrides.css';

export interface ProjectsCarouselProps {
  setActiveProject: (project: Project) => void;
}

// Dynamically import Slider to avoid SSR issues in Next.js
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ProjectsCarousel({ setActiveProject }: ProjectsCarouselProps) {
  // Use a ref to store the starting coordinates
  const clickStart = useRef({ x: 0, y: 0 });

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    clickStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, project: Project) => {
    const diffX = Math.abs(e.clientX - clickStart.current.x);
    const diffY = Math.abs(e.clientY - clickStart.current.y);
    // If the movement is minimal, treat as a click
    if (diffX < 5 && diffY < 5) {
      setActiveProject(project);
    }
  };

  // Touch event handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      clickStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>, project: Project) => {
    if (e.changedTouches.length > 0) {
      const diffX = Math.abs(
        e.changedTouches[0].clientX - clickStart.current.x
      );
      const diffY = Math.abs(
        e.changedTouches[0].clientY - clickStart.current.y
      );
      if (diffX < 5 && diffY < 5) {
        setActiveProject(project);
      }
    }
  };

  const settings = {
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    infinite: true,
    swipeToSlide: true,
    draggable: true,
    speed: 600,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    edgeFriction: 0.35,
    touchThreshold: 10,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: '80px' } },
      { breakpoint: 768, settings: { centerPadding: '50px' } },
      { breakpoint: 480, settings: { centerPadding: '10px' } },
    ],
  };

  return (
    <div className="relative w-full mx-auto py-8">
      <Slider {...settings}>
        {projectsData.map((project) => (
          <div
            key={project.slug}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, project)}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, project)}
            className="px-2 cursor-pointer"
          >
            <div className="bg-tag-green text-green-100 rounded-lg shadow-lg overflow-hidden p-4">
              <div className="relative aspect-[3/4] md:aspect-video rounded-md mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-green-300">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
