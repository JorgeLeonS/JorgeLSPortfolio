'use client';
import Link from 'next/link';
import { FaDiscord, FaLinkedin, FaGithub, FaCode, FaBrush, FaPeopleGroup, FaGlasses } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";

export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
        <p className="text-lg leading-relaxed">
          Hello! I’m <strong> Jorge</strong>, a game developer and software
          engineer with a background in <strong>Computer Science</strong>. My passion for immersive experiences
          started early on and led me to explore game design and VR/AR development.
          After attending an intensive one-month Game Design and Programming program 
          at Vancouver Film School in 2019, I knew I had found my calling—so much so 
          that I enrolled in a VR and AR Design and Development program in 2022, and 
          I’ve never looked back!
        </p>
      </section>

      {/* Experience & Tools */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experience & What I Do</h2>
        <p className="text-lg leading-relaxed">
          I’ve had the chance to work on numerous projects involving both 
          <strong> Unity (C#)</strong> and <strong> Unreal Engine (Blueprints)</strong>,
          with a bit of web development sprinkled in for good measure. 
          I’m a firm believer in combining creativity with technical know-how 
          to deliver engaging, polished results—whether it’s a game prototype, 
          a VR/AR experience, or a sleek web application.
        </p>
      </section>

      {/* Skills & Approach */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Approach & Teamwork</h2>
        <ul className="list-inside mt-4 space-y-2 text-lg">
          <li>
            <div className="flex p-2">
            <FaCode  className="w-6 h-6"/>
            <strong className="px-4">I know how to code:</strong>
            </div>
             Primarily in Unity (C#), but I’m 
            also comfortable with Unreal Blueprints and eager to dive deeper into C++. 
            Web technologies? Been there, done that!
          </li>
          <li>
          <div className="flex p-2">
            <FaBrush  className="w-6 h-6"/>
            <strong className="px-4">I appreciate great design:</strong>
          </div>
            Collaborating with designers 
            and artists taught me how much work goes into creating visually compelling 
            environments and interfaces—and I love every bit of it.
          </li>
          <li>
          <div className="flex p-2">
            <FaPeopleGroup  className="w-6 h-6"/>
            <strong className="px-4">I thrive in teams:</strong>
          </div>
            For me, truly great work emerges 
            when everyone understands and supports each other, and I find real joy 
            in bringing people together. I’ve also guided and managed teams 
            on multiple occasions, helping us push projects across the finish line.
          </li>
          <li>
          <div className="flex p-2">
            <FaGlasses  className="w-6 h-6"/>
            <strong className="px-4">I’m always improving:</strong> 
          </div>
            Whether it’s hunting for a more 
            efficient solution or refactoring existing code, I constantly push myself 
            to do better (sometimes at the cost of redoing something that already 
            works...)
          </li>
        </ul>
      </section>

      {/* AI Superpower */}
<section className="mb-8">
  <div className="flex">
  <RiOpenaiFill className="w-6 h-6 scale-150"/>
  <h2 className="text-2xl font-semibold mb-2 px-4">AI: My Superpower</h2>
  </div>
  <p className="text-lg leading-relaxed">
    Lately, I’ve also been harnessing <strong>AI</strong> tools to speed up 
    development and spark fresh ideas. It often feels like a superpower that 
    can supercharge productivity, but as Uncle Ben famously said, 
    “with great power comes great responsibility.” I keep ethics, fairness, 
    and user well-being in mind whenever I integrate AI into my projects, 
    ensuring that technology enhances experiences in meaningful ways.
  </p>
  <p className="text-lg leading-relaxed mt-4">
    Check out{' '}
    <Link 
      href="/?section=projects&project=shadow-chambers"
      className="text-blue-500 underline"
    >
      Shadow Chambers
    </Link>{' '}
    if you want to know more about how I’ve used AI in my projects.
  </p>
</section>

      {/* Personal Interests */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">A Bit About Me</h2>
        <p className="text-lg leading-relaxed">
          When I’m not coding or working on a new game concept, you’ll probably 
          find me <strong>playing videogames</strong>—I’m a huge Nintendo fan—or 
          binge-watching my favorite series, anime, and movies. I also love exploring 
          the outdoors, going on hikes, and immersing myself in nature. Even though 
          I cherish my Mexican roots, my time in Canada opened my eyes to new 
          cultures and adventures, fueling my desire to get to know what the world has to offer,
          so I'm open for relocation!
        </p>
      </section>

      {/* Random Fun Facts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Fun Facts</h2>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>I’m a big technology and gadgets enthusiast.</li>
          <li>My favorite food is Mexican, but I also love Asian gastronomy, can't decide between Chinese and Japanese for my top 2.</li>
          <li>I enjoy a wide range of music—especially alternative rock, electronic, 80s, and indie.</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Let’s Connect</h2>
        <p className="text-lg leading-relaxed">
          Whether you want to team up for an exciting project, talk about the 
          future of gaming, or share your favorite taco spot, 
          I’m always happy to connect. Feel free to reach out 
          and let’s see what we can create together!
        </p>

        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center pb-8 pt-8 space-x-4">
                  <a
                    href="https://www.linkedin.com/in/jorge-leon-salas/"
                    className="text-gray-400 size-11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-6 h-6 hover:text-green-700 scale-150" />
                  </a>
                  <a
                    href="https://discordapp.com/users/jorgels3312"
                    className="text-gray-400 size-11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord className="w-6 h-6 hover:text-green-700 scale-150" />
                  </a>
                  <a
                    href="https://github.com/JorgeLeonS"
                    className="text-gray-400 size-11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-6 h-6 hover:text-green-700 scale-150" />
                  </a>
                </div>
      </section>
    </div>
  );
}
