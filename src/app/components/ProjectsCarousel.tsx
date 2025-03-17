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

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ProjectsCarousel({ setActiveProject }: ProjectsCarouselProps) {
  const clickStart = useRef({ x: 0, y: 0 });

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    clickStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, project: Project) => {
    const diffX = Math.abs(e.clientX - clickStart.current.x);
    const diffY = Math.abs(e.clientY - clickStart.current.y);
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
      const diffX = Math.abs(e.changedTouches[0].clientX - clickStart.current.x);
      const diffY = Math.abs(e.changedTouches[0].clientY - clickStart.current.y);
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
    <div className="relative lg:w-4/5 sm:w-full mx-auto py-12">
      <Slider {...settings}>
        {projectsData.map((project) => (
          <div
            key={project.slug}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, project)}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, project)}
            className="px-4 cursor-pointer"
          >
            <div className="transform transition-all duration-300 hover:scale-105 origin-center bg-green-800/40 backdrop-blur-sm text-green-100 rounded-xl shadow-xl overflow-hidden p-6 border border-green-700/30 hover:border-green-500/50 h-full flex flex-col">
              <div className="relative w-full aspect-[16/9] rounded-lg mb-4 overflow-hidden shadow-lg bg-green-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-green-200 line-clamp-1">{project.title}</h3>
                <p className="text-green-300 text-base md:text-lg leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                <div className="mt-auto pt-4 border-t border-green-700/30">
                  <p className="text-green-400 text-sm md:text-base">
                    Position: <span className="font-medium">{project.role || 'Lead Developer'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
