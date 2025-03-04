'use client';
import React from 'react';
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
}

interface SmallCarouselState {
  currentSlide: number;
}

class SmallCarousel extends React.Component<SmallCarouselProps, SmallCarouselState> {
  constructor(props: SmallCarouselProps) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  handleAfterChange = (index: number) => {
    this.setState({ currentSlide: index });
    if (this.props.onSlideChange) {
      this.props.onSlideChange(index);
    }
  };

  render() {
    // Default settings for the slider
    const defaultSettings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.handleAfterChange,
    };

    // Merge any custom settings passed via props
    const sliderSettings = {
      ...defaultSettings,
      ...this.props.settings,
    };

    return (
      <div>
        <Slider {...sliderSettings}>
          {this.props.slides.map((slide, index) => (
            <div key={index} className="px-2 cursor-pointer">
              <div className="relative aspect-[6/5] mb-4">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SmallCarousel;
