'use client';
import React from 'react';
import { shadowChambersImages, Project } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { FaMeta } from "react-icons/fa6";

export interface ShadowChambersProps {
  project: Project;
  onBack: () => void;
}

export function ShadowChambers({ project, onBack }: ShadowChambersProps) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      {/* Header Section */}
            <div className="max-w-6xl mx-auto flex flex-col items-center pb-8">
              <img
                src={shadowChambersImages.logo}
                alt="Cyber Attack Logo"
                className="h-auto"
              />
              <div className="flex p-3 gap-x-5">
                <a
                  href="https://www.meta.com/experiences/shadow-chambers/7922919961167014/"
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
                src="https://scontent.oculuscdn.com/v/t64.7195-25/473391890_4158925231005741_7697656160575343636_n.mp4?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=b20b63&amp;_nc_ohc=BQgqnhvqBzgQ7kNvgFua_QD&amp;_nc_oc=AdhWfgyZmG1twxxYGggnGEH0noPTBVObzKCidUb3o8m_C6dNLvoFHvUdkvEa0fUtotM&amp;_nc_zt=28&amp;_nc_ht=scontent.oculuscdn.com&amp;_nc_gid=AOLaDHH4widGdk7xpJ1Exsu&amp;oh=00_AYA0yD-t8iLTFYCME57CJeCWbF_l1tzH6L4Z4IaY2YwYVg&amp;oe=67C68842"
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
                  src={shadowChambersImages.audio /* or otherProjectImages.someAudioImage */}
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
                  src={shadowChambersImages.pico /* or otherProjectImages.somePicoImage */}
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
                  src={shadowChambersImages.enemies /* or otherProjectImages.someEnemiesImage */}
                  alt="Other Highlights"
                  className="md:w-1/2 order-2 md:order-1 object-cover rounded-lg"
                />
              </div>
      
            </div>
    </BaseProjectDescription>
  );
}
