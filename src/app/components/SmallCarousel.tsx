'use client';
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the slider to avoid SSR issues with react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Define a type for individual slides
export interface Slide {
  image: string;
  description: string;
}

// Define props for the SmallCarousel component
export interface SmallCarouselProps {
  slides: Slide[];
  // Optional callback to notify when the slide changes
  onSlideChange?: (index: number) => void;
  // Allow additional settings to be passed in, if desired
  settings?: Record<string, any>;
  // Whether to show descriptions in the carousel
  showDescriptions?: boolean;
}

export default function SmallCarousel({ slides, onSlideChange, settings, showDescriptions = false }: SmallCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  const defaultSettings = {
    ref: sliderRef,
    centerMode: true,
    centerPadding: '100px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: '60px' } },
      { breakpoint: 768, settings: { centerPadding: '40px' } },
      { breakpoint: 480, settings: { centerPadding: '20px' } },
    ],
  };

  const sliderSettings = {
    ...defaultSettings,
    ...settings,
  };

  return (
    <div className="relative w-full max-w-[98%] mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Image Carousel */}
        <div className="w-full md:w-[50%] mb-14 md:mb-0">
          <div className="relative">
            <Slider {...sliderSettings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-2 cursor-pointer">
                  <div className="bg-tag-green text-green-100 rounded-lg items-center shadow-lg overflow-hidden">
                    <div className="relative aspect-[6/5] m-3">
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-contain object-center rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Description Panel - Only show if showDescriptions is true */}
        {showDescriptions && (
          <div className="w-full md:w-[50%] bg-green-800/40 backdrop-blur-sm rounded-lg p-6 border border-green-700/30 min-h-[300px] md:min-h-[400px]">
            <div className="h-full">
              <div className="prose prose-invert max-w-none">
                <p className="text-green-200 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
