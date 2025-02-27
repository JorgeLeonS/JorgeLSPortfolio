'use client';
import React from 'react';
import { chronostrikeImages, Project } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { FaSteam, FaMeta } from "react-icons/fa6";

export interface ChronostrikeProps {
  project: Project;
  onBack: () => void;
}

export function Chronostrike({ project, onBack }: ChronostrikeProps) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col items-center pb-8">
        <img
          src={chronostrikeImages.logo}
          alt="Chronostrike Logo"
          className="h-auto"
        />
        <div className="flex p-3 gap-x-5">
          <a
            href="https://www.meta.com/experiences/chronostrike/24697269806585974/"
            className="text-gray-400 hover:text-white size-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMeta className="w-6 h-6 hover:text-green-700 scale-150" />
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center pb-8">
        <iframe
          className="w-full sm:max-w-6xl md:max-w-6xl aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/OBogAz29f60?si=20wZyRCAWD4NBLh6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-y-12 text-gray-300">

        {/* Intro / Overview */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Text first on mobile, second on desktop */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>
              This was the first multiplayer game I worked on professionally, so my experience
              in that area was initially limited. However, I still managed to learn the fundamentals
              and implement various features. Since I had previously worked on audio for Swarm 2, 
              this time I created an audio manager from scratch that routed all Wwise events into 
              a centralized system, later adapting it for multiplayer through Fusion. I also removed
              placeholder sounds to help with memory usage.
            </p>
          </div>
          {/* Image second on mobile, first on desktop */}
          <img
            src={chronostrikeImages.overview}
            alt="Overview"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

        {/* Audio & Wwise Integration */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Audio & Wwise Integration</h2>
            <p>
              I closely collaborated with our audio designer to implement his desired 
              behaviors. One interesting task was configuring a laser’s audio source so that its
              position would dynamically track the closest point on the beam relative to the player.
              Aside from these Wwise tasks, I removed old placeholder sounds to optimize memory usage
              and ensure a cleaner audio pipeline.
            </p>
          </div>
          <img
            src={chronostrikeImages.audio}
            alt="Audio Manager"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

        {/* Multiplayer & Vivox */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Multiplayer & Vivox Integration</h2>
            <p>
              I integrated Vivox voice chat to allow persistent communication in multiplayer mode, 
              even during scene loading, until players ended their session. I also became more 
              familiar with Fusion and used it to implement certain multiplayer-driven features, 
              such as VFXs that only appeared to specific players. In one instance, the VFX changed 
              color based on the other player's voice volume, which I found particularly cool.
            </p>
          </div>
          <img
            src={chronostrikeImages.multiplayer}
            alt="Multiplayer and Vivox Integration"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

        {/* Weapon Models */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Weapon Models Update</h2>
            <p>
              Finally, I updated all the 3D weapon models, ensuring that their functionality, hand 
              positions, SFX, and VFX remained consistent and bug-free. This process involved 
              cross-checking every detail so that players would have a seamless experience 
              interacting with the game’s arsenal.
            </p>
          </div>
          <img
            src={chronostrikeImages.weapons}
            alt="Weapon Models"
            className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
          />
        </div>

      </div>
    </BaseProjectDescription>
  );
}
