'use client';
import React, { useState } from 'react';
import SmallCarousel from '../SmallCarousel';
import { shadowChambersImages, Project } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { FaMeta } from "react-icons/fa6";

export interface ShadowChambersProps {
  project: Project;
  onBack: () => void;
}

export function ShadowChambers({ project, onBack }: ShadowChambersProps) {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel data: image and corresponding description
    const carouselData = [
      {
        image: shadowChambersImages.spatialPuzzle,
        description: "A fully procedural spatial puzzle that is based in one of the Half-Life: Alyx puzzles, the goal is to find the proper alignment for all the points. However there are many customizeable settings that allowed us to define a proper difficulty progression."
      },
      {
        image: shadowChambersImages.VRIK,
        description: "I implemented full body IK, althought the character changing feature was scrapped at the end, I think it's worth showing."
      },
      {
        image: shadowChambersImages.UI,
        description: "UI isn’t my favorite aspect of development, but I implemented functionality for displaying server-stored games, creating new games, and managing settings. This involved optimizing loading times, handling error messages, ensuring a smooth user flow, and managing cancellations when switching menus or starting games."
      }
    ];

  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      <div className="min-h-screen text-gray-200 space-y-16">
        {/* Header & Video Section */}
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center pb-8">
            <img
              src={shadowChambersImages.logo}
              alt="Shadow Chambers Logo"
              className="h-auto"
            />
            <div className="flex p-3 gap-x-5">
              <a
                href="https://www.meta.com/experiences/shadow-chambers/7922919961167014/"
                className="text-gray-400 hover:text-white text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMeta className="w-6 h-6 hover:text-green-700 scale-150" />
              </a>
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <iframe
              className="w-full sm:max-w-6xl md:max-w-6xl aspect-video rounded-lg shadow-lg"
              src="https://scontent.oculuscdn.com/v/t64.7195-25/473391890_4158925231005741_7697656160575343636_n.mp4?autoplay=0&_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=b20b63&amp;_nc_ohc=BQgqnhvqBzgQ7kNvgFua_QD&amp;_nc_oc=AdhWfgyZmG1twxxYGggnGEH0noPTBVObzKCidUb3o8m_C6dNLvoFHvUdkvEa0fUtotM&amp;_nc_zt=28&amp;_nc_ht=scontent.oculuscdn.com&amp;_nc_gid=AOLaDHH4widGdk7xpJ1Exsu&amp;oh=00_AYA0yD-t8iLTFYCME57CJeCWbF_l1tzH6L4Z4IaY2YwYVg&amp;oe=67C68842"
              title="Shadow Chambers Demo Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

      <div className="max-w-6xl mx-auto flex flex-col gap-y-12 text-gray-300">

        {/* Overview & Game Concept Section */}
        <section className="max-w-6xl mx-auto border-b border-green-500 pb-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="md:text-lg">
              This project is the highlight of my work. In 6 months, I developed a full prototype that was presented to the Canada Media Fund (CMF), received funding, and was later published in the Meta Quest Store. Under the guidance of the game director for Swarm 1 and Swarm 2, I leveraged generative AI to create unique experiences in a mystery-based, puzzle game. 
              Although some store assets were used, I built the fully optimized VR demo from scratch, ensuring compliance with Meta Quest Store requirements and delivering a polished, high-performance experience.
              After presenting the demo, more people joined the team, I led the Unity development effort, established technical constraints, and optimized workflows as the team expanded, collaborating closely with other developers and artists to ensure high quality and efficiency.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Game Concept</h2>
            <p className="md:text-lg">
              In Shadow Chambers, players are granted 10 tokens to create games. The experience connects to an external server that integrates multiple LLM provider APIs—such as ChatGPT, Claude, and Deepseek—to generate a dynamic JSON file. This file contains the game story, character and player dialogues, as well as the design for rooms and puzzles. Additional prompts trigger other AI models like ElevenLabs for voice overs and Flux via Replicate for image generation, creating unique in-game assets.
            </p>
          </div>
        </section>

        {/* Contributions Section with Bulletpoints */}
        <section className="border-b border-green-500 pb-8 space-y-6">

          {/* AI Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">AI Work</h2>
              <p className="md:text-lg">
                Initially, I integrated AI model calls directly within Unity by connecting APIs for ChatGPT, ElevenLabs, and Flux, engineering custom prompts and JSON structures. Later, we shifted to an external server to control API limits and store generated games.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={shadowChambersImages.screenshot3}
                  alt="AI Work"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

                    {/* Editor Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Editor Tools</h2>

              <p className="md:text-lg">
                I created several tools to streamline game testing, including features for puzzle testing, level skipping, server game management, and an image creation utility.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={shadowChambersImages.screenshot3}
                  alt="Editor Tools"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          </section>

          
          {/* Game Mechanics */}
          <div className="md:items-center gap-6">
            <h2 className="text-2xl font-bold mb-4">Game Mechanics</h2>
              <p className="md:text-lg">
                  I designed, developed, and maintained core gameplay systems—including game flow, puzzles, NPC dialogue, scene management, audio, UI, and localization—using the Hurricane VR interaction package for intuitive player interactions.
                  <br></br>
                  Check some of them below:
              </p>
          </div>

          {/* Other Highlights Section with Carousel */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 pb-20">
      <div className="md:w-1/2 order-1 md:order-2">
        <p className="md:text-lg">
          {carouselData[currentSlide].description}
        </p>
      </div>
      <div className="md:w-1/2 order-2 md:order-1">
        <SmallCarousel
          slides={carouselData}
          onSlideChange={(index) => setCurrentSlide(index)}
        />
      </div>
    </div>
          

      </div>

      </div>
    </BaseProjectDescription>
  );
}
