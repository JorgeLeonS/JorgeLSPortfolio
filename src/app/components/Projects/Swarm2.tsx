'use client';
import React from 'react';
import { otherProjectImages } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { Project } from '../../data/ProjectsData';
import { swarm2Images } from '../../data/ProjectsData';
import { FaLinkedin, FaGithub, FaSteam, FaMeta } from "react-icons/fa6";

export interface Swarm2Props {
  project: Project;
  onBack: () => void;
}

export function Swarm2({ project, onBack }: Swarm2Props) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      <div className="max-w-6xl mx-auto flex flex-col items-center pb-8">
          <img
            src={swarm2Images.logo}
            alt="Cyber Attack Logo"
            className=" h-auto"
          />
          <div className='flex p-3 gap-x-5'>
          <a
            href="https://store.steampowered.com/app/2929260/SWARM_2/"
            className="text-gray-400 hover:text-white size-11 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSteam className="w-6 h-6 hover:text-green-700 scale-150" />
          </a>
          <a
            href="https://www.meta.com/experiences/swarm-2/5791805387504648/?srsltid=AfmBOopICJVTpQmE_rwv3tZhW4dd0IxFxgudZkDjAfFrURTy8ZIphu4x"
            className="text-gray-400 hover:text-white size-11 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMeta className="w-6 h-6 hover:text-green-700 scale-150" />
          </a>
          <a
            href="https://store-global.picoxr.com/en/detail/1/7283529719864344581"
            className="text-gray-400 hover:text-white size-11 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Pico
          </a>
          </div>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-full sm:max-w-6xl md:max-w-6xl aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/-152LOXaM-g?si=0ITUTl4tk7rzexlL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

            {/* =============== PON TU SEMILLA =============== */}
            <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>4. Pon tu semilla</span>
          <a
            href="https://github.com/JorgeLeonS/PonTuSemilla"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          Literally translated to “Plant your seed,” this VR experience aims to
          raise awareness about climate change. Developed in one week for the Oculus Rift at Tecnológico de
          Monterrey, Querétaro Campus.
        </p>

        {/* SUBSECTION 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.ponTuSemilla[0]}
                alt="Pon tu semilla Demo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Full Oculus functionality: movement, collision, following
                cameras, distance grabbers, etc.
              </li>
              <li>Reactive objects that can be grabbed when pointed at.</li>
            </ul>
          </div>
        </div>

        {/* SUBSECTION 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.ponTuSemilla[1]}
                alt="Pon tu semilla Scene"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Four main scenes for climate change awareness:
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Introduction video explaining the problem.</li>
                  <li>
                    Calling 911 to extinguish a forest fire, simulated with
                    smoke, fire particles, and red lighting.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        {/* SUBSECTION 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.ponTuSemilla[2]}
                alt="Pon tu semilla Final Scene"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ol className="list-decimal ml-5 space-y-2" start={3}>
              <li>
                Organic and inorganic garbage separation using two garbage cans.
              </li>
              <li>
                Planting seeds for reforestation: glowing seeds can be thrown on
                the ground, spawning a tree where they land.
              </li>
            </ol>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Credits</h3>
        <p className="text-gray-400">
          Professors: Luis Raúl Castillo Coronel and Eduardo Rosado Colmenares.
          Unity & programming: Jorge León Salas and Fernando Carrillo. 3D models:
          Alberto Pérez and Pedro Aguirre.
        </p>
      </section>
    </BaseProjectDescription>
  );
}
