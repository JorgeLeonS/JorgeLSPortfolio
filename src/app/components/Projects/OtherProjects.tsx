'use client';
import React from 'react';
import { otherProjectImages } from '../../data/ProjectsData';
import { Project } from '../../data/ProjectsData';
import { BaseProjectDescription } from '../BaseProjectDescription';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export interface OtherProjectsProps {
  project: Project;
  onBack: () => void;
}

export function OtherProjects({ project, onBack }: OtherProjectsProps) {
  return (
    <BaseProjectDescription project={project} onBack={onBack}>
    <div className="min-h-screen text-gray-200 p-6 space-y-16">
      {/* =============== GEOMETRY GUARS =============== */}
      <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>1. Geometry Guars</span>
          <a
            href="https://github.com/JorgeLeonS/Unity-Games/tree/master/GeometryGuars"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          This game mimics the basic gameplay of Geometry Wars, published by
          Activision. The main objective is to shoot the spawning enemies to
          obtain the biggest score.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* IMAGE on the left in desktop, bottom in mobile */}
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.geometryGuars[0]}
                alt="Geometry Guars"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* TEXT on the right in desktop, top in mobile */}
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Three types of enemies (slow, regular, fast) randomly spawned
                with Gizmos at a safe distance from the player.
              </li>
              <li>
                A particle system that shows when either a bullet or the player
                collides with an enemy.
              </li>
              <li>
                Difficulty (enemy spawning speed) increases exponentially
                according to an animation curve.
              </li>
              <li>
                The glow in enemies, player, bullets, and the pattern was
                applied through default Unity shaders.
              </li>
              <li>
                The player movement is controlled by acceleration and turning
                speed.
              </li>
              <li>
                Bullets are spawned in a different rotation depending on the
                clicked arrow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =============== STAR WOLF =============== */}
      <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>2. Star Wolf</span>
          <a
            href="https://github.com/JorgeLeonS/StarWolf_Game"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          A space-based game where the player constantly moves forward while
          avoiding and/or shooting different objects such as immobile mines,
          space debris, and following enemies. The movement mechanics are
          inspired by Starfox.
        </p>

        {/* SUBSECTION 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.starWolf[0]}
                alt="Star Wolf Demo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Single and Multiplayer mode through UNet Networking (object
                instancing is reduced in Multiplayer for better performance).
              </li>
            </ul>
          </div>
        </div>

        {/* SUBSECTION 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.starWolf[1]}
                alt="Star Wolf Detail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                A Cinemachine Dolly Cart is used to keep a constant forward
                movement, limiting X and Y with the camera view.
              </li>
              <li>
                Instancing for different objects with random size, varying
                damage, and five levels of detail based on distance.
              </li>
            </ul>
          </div>
        </div>

        {/* SUBSECTION 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.starWolf[2]}
                alt="Star Wolf FSM"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                The following enemy uses a Finite State Machine and a mesh-based
                approach to find the player's position and guide itself.
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Credits</h3>
        <p className="text-gray-400">
          Final project for the Modeling and Animation class at ITESM. Developed
          by: Alfredo Prado Cajiga, Alonso Narro Delgado, and Jorge León Salas,
          with guidance from Professor Sergio Ruiz Loza.
        </p>
      </section>

      {/* =============== BOW PLATFORMER =============== */}
      <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>3. Bow Platformer</span>
          <a
            href="https://github.com/JorgeLeonS/Unity-Games/tree/master/BowPlatformer"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          A local multiplayer platformer whose objective is to shoot an arrow
          and defeat the other player.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.bowPlatformer[0]}
                alt="Bow Platformer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Both players share the same keyboard:
                <ul className="list-disc ml-5">
                  <li>Player 1 uses WASD + Space to jump + F to shoot.</li>
                  <li>
                    Player 2 uses arrow keys + Right CTRL to jump + Right Shift
                    to shoot.
                  </li>
                </ul>
              </li>
              <li>
                The platform is infinite; going out of bounds warps you to the
                opposite side.
              </li>
              <li>
                Players have a double jump and can also wall jump for added
                mobility.
              </li>
              <li>
                Arrows stick to the map, can be collected, up to 5 carried.
              </li>
              <li>
                Various platform behaviors: moving, rotating, climbable,
                non-walkable, floating, pushable, treadmill-like.
              </li>
            </ul>
          </div>
        </div>
      </section>

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

      {/* =============== CADENA PERPETUA =============== */}
      <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>5. Cadena Perpetua</span>
          <a
            href="https://github.com/JorgeLeonS/CadenaPerpetua-Game"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          A Beat Em' Up game developed by 5th semester students at the Tecnológico de
          Monterrey, Mexico City Campus. The player must cross 3 levels while
          avoiding or defeating cops to escape from prison.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.cadenaPerpetua[0]}
                alt="Cadena Perpetua"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Four enemy types:
                <ul className="list-disc ml-5 space-y-1">
                  <li>Melee attacker that patrols, then attacks in close range.</li>
                  <li>Gun shooter that patrols, then shoots from afar.</li>
                  <li>Guard dogs that run forward in the last level.</li>
                  <li>
                    A boss that spawns dogs; must be defeated to win the game.
                  </li>
                </ul>
              </li>
              <li>
                Five item/weapon types:
                <ul className="list-disc ml-5 space-y-1">
                  <li>MedKit (regenerate health)</li>
                  <li>Shield (blocks attacks)</li>
                  <li>Knife (short-range, high damage)</li>
                  <li>Beating stick (longer range, similar damage)</li>
                  <li>Pistol (long-range, highest damage)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =============== ESCAPE VELOCITY =============== */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
          <span>6. Escape Velocity</span>
          <a
            href="https://github.com/JorgeLeonS/Unity-Games/tree/master/EscapeVelocity"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-green-700" />
          </a>
        </h2>
        <p className="mb-6">
          An endless runner set in space. In this 2D game, random asteroids
          appear from the top of the screen. The player has three lives to avoid
          collisions; the goal is to travel the longest distance possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={otherProjectImages.escapeVelocity[0]}
                alt="Escape Velocity"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Getting hit with more than one life left triggers a green
                explosion and a sound effect.
              </li>
              <li>
                Losing the last life triggers an orange explosion, shows total
                distance, and a retry menu.
              </li>
              <li>Player movement and asteroid spawning area are restricted.</li>
              <li>Ship velocity increases according to distance traveled.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
        </BaseProjectDescription>
  );
}
