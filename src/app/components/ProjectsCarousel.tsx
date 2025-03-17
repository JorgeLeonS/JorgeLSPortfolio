'use client';
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { projectsData, Project } from '../data/ProjectsData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/carousel-overrides.css';

export interface ProjectsCarouselProps {
  setActiveProject: (project: Project) => void;
  currentSlide?: number;
}

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ProjectsCarousel({ setActiveProject, currentSlide = 0 }: ProjectsCarouselProps) {
  const clickStart = useRef({ x: 0, y: 0 });
  const sliderRef = useRef<any>(null);

  // Effect to set initial slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

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
    ref: sliderRef,
    centerMode: true,
    centerPadding: '100px',
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
    initialSlide: currentSlide,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: '60px' } },
      { breakpoint: 768, settings: { centerPadding: '40px' } },
      { breakpoint: 480, settings: { centerPadding: '20px' } },
    ],
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
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
            <div className="transform transition-all duration-300 hover:scale-105 origin-center bg-green-800/40 backdrop-blur-sm text-green-100 rounded-xl shadow-xl overflow-hidden p-4 border border-green-700/30 hover:border-green-500/50">
              <div className="relative w-full aspect-[16/9] rounded-lg mb-2 overflow-hidden shadow-lg bg-green-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-green-200 line-clamp-1">{project.title}</h3>
                <p className="text-green-300 text-sm md:text-base leading-relaxed line-clamp-2 mb-2">{project.description}</p>
                <div className="pt-2 border-t border-green-700/30">
                  <p className="text-green-400 text-xs md:text-sm">
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
