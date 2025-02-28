'use client';
import React from 'react';
import { otherProjectImages, swarm2Images, Project } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { FaSteam, FaMeta, FaUnity } from "react-icons/fa6";

export interface Swarm2Props {
  project: Project;
  onBack: () => void;
}

export function Swarm2({ project, onBack }: Swarm2Props) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center pb-8">
        <img
          src={swarm2Images.logo}
          alt="Swarm 2 Logo"
          className="h-auto"
        />
        <div className="flex p-3 gap-x-5">
          <a
            href="https://store.steampowered.com/app/2929260/SWARM_2/"
            className="text-gray-400 size-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSteam className="w-6 h-6 hover:text-green-700 scale-150" />
          </a>
          <a
            href="https://www.meta.com/experiences/swarm-2/5791805387504648/?srsltid=AfmBOopICJVTpQmE_rwv3tZhW4dd0IxFxgudZkDjAfFrURTy8ZIphu4x"
            className="text-gray-400 size-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMeta className="w-6 h-6 hover:text-green-700 scale-150" />
          </a>
          <a
            href="https://store-global.picoxr.com/en/detail/1/7283529719864344581"
            className="text-gray-400 size-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pico
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center pb-8">
        <iframe
          className="w-full sm:max-w-6xl md:max-w-6xl aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/-152LOXaM-g?si=0ITUTl4tk7rzexlL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-y-12 text-gray-300">
        
        {/* Overview (No image here, so simple container) */}
        <div className="items-center gap-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p>
            During my time on this project, I worked very closely with the game director, 
            game designers, artists, and other developers to accomplish a broad range of tasks, 
            including feature development, tool creation, technical art implementation, and overall 
            polish and performance work.
          </p>
        </div>

        {/* Audio Programming */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Text first by default on mobile, second on desktop */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Audio Programming</h2>
            <p>
              I collaborated with various audio designers, ranging from small studios to independent artists, 
              to create a centralized audio manager and integrate new Wwise-based sounds. These ranged from 
              single event calls to more robust systems controlling different character voice-overs in multiple scenarios. 
              Additionally, I had to accommodate the different headset functionalities of the Meta Quest and Pico devices, 
              ensuring the game could pause and resume music and voice-overs accordingly. In one urgent case, 
              I rapidly learned how to set up sounds in Wwise and route them to Unity, which introduced me to 
              Wwise profiling and further refined my audio implementation skills.
            </p>
          </div>
          {/* Image second by default on mobile, first on desktop */}
          <img
            src={swarm2Images.audio /* or otherProjectImages.someAudioImage */}
            alt="Audio Programming"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

        {/* Pico Headset Functionality */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Pico Headset Functionality</h2>
            <p>
              Although I didn’t implement the initial support for multiple VR headsets, I became well-versed 
              in the Meta Quest and Pico SDKs, their update changelogs, and the relevant APIs. This knowledge 
              ensured our desired game features were correctly implemented and helped me address graphics 
              and frame rate issues stemming from supporting both headsets.
            </p>
          </div>
          <img
            src={swarm2Images.pico /* or otherProjectImages.somePicoImage */}
            alt="Pico Headset Functionality"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

        {/* Other Highlights */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Other Highlights</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Employed mathematical concepts to implement various enemy behaviors, 
                such as turrets that track the player’s position while rotating along two 
                different axes (base and barrel).
              </li>
              <li>
                Developed a teleporting enemy that, upon being hit, relocates to a newly calculated 
                position at a safe distance from the player and within level boundaries.
              </li>
              <li>
                Created a customizable laser system with variable movement and gameplay settings, 
                prominently featured in the final level of the rogue-like mode.
              </li>
            </ul>
          </div>
          <img
            src={swarm2Images.enemies /* or otherProjectImages.someEnemiesImage */}
            alt="Other Highlights"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

      </div>
    </BaseProjectDescription>
  );
}
