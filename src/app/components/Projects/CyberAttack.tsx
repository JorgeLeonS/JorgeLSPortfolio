'use client';
import React from 'react';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { cyberAttackImages } from '../../data/ProjectsData';
import { Project } from '../../data/ProjectsData';
import { FaSteam } from "react-icons/fa";

export interface CyberAttackProps {
  project: Project;
  onBack: () => void;
}

export function CyberAttack({ project, onBack }: CyberAttackProps) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      <div className="min-h-screen text-gray-200 p-6 space-y-16">
        {/* Title & Video Section */}
        <section className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center pb-8">
    <img
      src={cyberAttackImages.logo}
      alt="Cyber Attack Logo"
      className=" h-auto"
    />
    <a
      href="https://store.steampowered.com/app/2122960/Cyber_Attack_VR_board_game/"  // Replace with your actual Steam URL
      className="text-gray-400 hover:text-white size-11 "
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaSteam className="w-6 h-6 hover:text-green-700 scale-150" />
    </a>
  </div>
  <div className="flex justify-center">
    <iframe
      className="w-full sm:max-w-6xl md:max-w-6xl aspect-video rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/YMunG3BXT5s"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">What is it?</h2>
              <p className="text-lg">
                Having a futuristic-space theme, the ship AI has gone crazy and ejected the astronauts out of the ship D:
                The players first start on a turn based board game, where they control the remaining good robots and have to cooperate to collect enough data so they can recover control of the ship.
                It's a fast paced, strategy game where most of the actions to perform are randomized, from the movement, attack, energy points, to a special option that can spawn more enemies, give more time for turns, or maybe teleport the player to the other section of the game, the MAZE.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">How did we do it?</h2>
              <p className="text-lg">
                The team started with 4 people (me included), who did all the development; later, some people from the same school joined and helped with design, story, and SFX.
                <br />
                It's an Unreal Engine 5 (Blueprint only) VR network game for up to four players.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">What did I do?</h2>
              <p className="text-lg">
                When a player gets teleported to the MAZE, it changes the whole game mechanic from a board game to a first-person shooter. In that mode, you will find two different challenges: fast, self-destructing, chasing robots and terminals that contain two different puzzles.
                The objective is to find two specific terminals that will allow the player to go back to the board game. However, while the player is trapped, shooting at robots while figuring out where the terminals are on the labyrinth is the most fun part for me.
              </p>
            </div>
          </div>
        </section>

        {/* Robots Section */}
        <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
          <h3 className="text-3xl font-bold mb-4">Robots</h3>
          {/* First Robots Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image on left for desktop */}
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={cyberAttackImages.gifs[0]}
                  alt="Robots Action"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text on right for desktop */}
            <div className="order-1 md:order-2">
              <ul className="list-disc ml-5 space-y-2 text-lg">
                <li>Randomly patrol on the MAZE until a player enters their field of view or shoots at them.</li>
                <li>Chase the player around the map using AI movement.</li>
                <li>
                  When a player is close, the self-destruct counter starts, making them jump, play an alerting sound, and trigger a glowing effect—pretty scary if you don’t notice them.
                </li>
                <li>
                  They need to be shot 3 times in order to destroy them without damaging the player. (If the player gets damaged 5 times, it’s game over for everyone.)
                </li>
              </ul>
            </div>
          </div>
          {/* Second Robots Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
            {/* Image on left for desktop */}
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={cyberAttackImages.gifs[1]}
                  alt="Robots Gun Mechanics"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text on right for desktop */}
            <div className="order-1 md:order-2">
              <ul className="list-disc ml-5 space-y-2 text-lg">
                <li>Spatialized sound implementation for all the robot actions:</li>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Matching footstep sound with walking and running through animation events.</li>
                  <li>Sounds for when they are about to explode, exploding, and getting damaged.</li>
                </ul>
                <li>Implemented all the gun mechanics for destroying the robots:</li>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    I used a gun from the Lyra project template (by Epic Games) and adapted it to VR. The model, Niagara VFX, and SFX were taken from that project.
                  </li>
                  <li>Used a shooting mechanism that damages the robots.</li>
                </ul>
              </ul>
            </div>
          </div>
        </section>

        {/* Puzzles Section */}
        <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
          <h3 className="text-3xl font-bold mb-4">Puzzles</h3>
          <p className="text-lg mb-6">When a player finds and enters a Terminal, two different puzzles can be spawned:</p>
          {/* First Puzzles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image on left for desktop */}
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={cyberAttackImages.gifs[2]}
                  alt="Memory Puzzle"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text on right for desktop */}
            <div className="order-1 md:order-2">
              <ul className="list-disc ml-5 space-y-2 text-lg">
                <li>
                  A memory puzzle. The player can grab and move shapes to check their positions. Once a shape is selected, the rest will change to the same shape.
                  The goal is to find the matching pieces and select them one after the other. When all pairs are found, the puzzle is completed.
                </li>
              </ul>
            </div>
          </div>
          {/* Second Puzzles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
            {/* Image on left for desktop */}
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={cyberAttackImages.gifs[3]}
                  alt="Alignment Puzzle"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text on right for desktop */}
            <div className="order-1 md:order-2">
              <ul className="list-disc ml-5 space-y-2 text-lg">
                <li>
                  An alignment puzzle. The player needs to grab the moving sphere and align the connection lasers to the scattered contact points.
                  The goal is to align all the cables simultaneously. Although it sounds simple, the Niagara effects implementation and very bright post-processing lights make it quite challenging.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Credits Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Credits</h2>
          <p className="text-lg">
            Final project for the VR and AR Design and Development course at Vancouver Film School.
            Team members: 
            <a href="" className="text-blue-400 hover:underline ml-1">Dmitrii Orlov</a>,
            <a href="" className="text-blue-400 hover:underline ml-1"> Hugo Carrillo</a>,
            <a href="" className="text-blue-400 hover:underline ml-1"> Morlán Beltrán</a>,
          </p>
        </section>
      </div>
    </BaseProjectDescription>
  );
}
