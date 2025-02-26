'use client';
import React from 'react';
import Slider from "react-slick";
import { BaseProjectDescription } from '../BaseProjectDescription';
import { visionsOfYesterdayImages } from '../../data/ProjectsData';
import { Project } from '../../data/ProjectsData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export interface VisionsOfYesterdayProps {
  project: Project;
  onBack: () => void;
}

export function VisionsOfYesterday({ project, onBack }: VisionsOfYesterdayProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <BaseProjectDescription project={project} onBack={onBack}>
      <div className="min-h-screen text-gray-200 p-6 space-y-16">
        {/* Title & Video Section */}
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Visions of Yesterday</h1>
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-2/3 aspect-video rounded-lg shadow-lg"
              src="https://drive.google.com/file/d/1Ii90RVWKaRMNgyTDOj1oRKF_dF0z7kIf/preview"
              title="Google Drive video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* What is it? Section */}
        <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
          <h2 className="text-2xl font-semibold mb-4">What is it?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-lg">
                A story based experience, developed in Unity, where the user will see visual impairments that try to imitate dementia symptoms.
                Its original use case was to create empathy in professional and at-home carers so they can better understand the daily struggles of someone with dementia.
                <br />
                It was delivered as the client project for TTT Studios on the VR/AR design and development program at Vancouver Film School.
              </p>
            </div>
            <div>
              <img
                src={visionsOfYesterdayImages.gifs[0]}
                alt="Blinds Effect"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* How did we do it? Section */}
        <section className="max-w-6xl mx-auto border-b border-green-500 pb-8">
          <h2 className="text-2xl font-semibold mb-4">How did we do it?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-lg">
                In a team of four, we were tasked with ideating and developing “A VR experience that puts dementia care workers in the shoes of someone with dementia.”
                The team chose a story-based approach, placing the user in the role of a person with dementia receiving regular assistance with daily tasks.
                The limited interactions and intentionally frustrating visual impairments were designed to generate empathy.
              </p>
            </div>
            <div>
              <img
                src={visionsOfYesterdayImages.gifs[1]}
                alt="Pills Effect"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* What did I do? Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What did I do?</h2>
          <div className="space-y-6 text-lg">
            <p>
              Due to the limited time (4 months) to plan, develop, adjust to the client’s feedback, and handle other projects and homework, I knew from the start that someone had to take main responsibility.
              I suggested being the lead programmer and project manager, and the team agreed.
            </p>
            <h3 className="text-xl font-semibold mt-4">Project management</h3>
            <p>
              I set up a Trello board to manage tasks—assigning priorities and categories—and held weekly meetings to update progress.
              Together with a teammate, we created a timeline, defined our scope, and identified project risks.
            </p>
            <h3 className="text-xl font-semibold mt-4">Programming</h3>
            <p>
              For the programming aspect, I established the GitHub repository and built a basic engine structure using the XR Interaction Toolkit.
              I also conducted sessions to familiarize the team with GitHub and Unity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-4">
              <div className="order-2 md:order-1">
                <p className="text-lg pt-10">
                  Once the basic functionality was set, I focused on creating a template scene that allowed non-technical team members to easily add dialogues or actions.
                  In the image slideshow, Img 1 shows the Interactions Manager in Unity Editor, which sequences dialogues and actions.
                  Img 2 displays the PlayerController, primarily used for handling dialogues.
                  Img 3 illustrates the CharacterController, which also manages animations and movement.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Slider {...sliderSettings}>
                  <div>
                    <img
                      src={visionsOfYesterdayImages.interactionsManager}
                      alt="Img 1 - Interactions Manager in Unity Editor"
                      className="w-full rounded-lg "
                    />
                    <p className="text-center text-sm mt-2">Img 1 - Interactions Manager in Unity Editor</p>
                  </div>
                  <div>
                    <img
                      src={visionsOfYesterdayImages.playerController}
                      alt="Img 2 - Player Controller in Unity Editor"
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm mt-2">Img 2 - Player Controller in Unity Editor</p>
                  </div>
                  <div>
                    <img
                      src={visionsOfYesterdayImages.jamesController}
                      alt="Img 3 - Character Controller in Unity Editor"
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm mt-2">Img 3 - Character Controller in Unity Editor</p>
                  </div>
                </Slider>
              </div>
            </div>
            <h4 className="text-lg font-semibold mt-4">What I could have improved:</h4>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                With more time, I would have created a custom editor to manage action inputs dynamically, making it easier to track method calls.
              </li>
              <li>
                I also believe that interactions such as item grabbing, light control, or visual effects could have been managed within the engine for easier adjustments.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">If you want to know a little more about how everything works...</h4>
            <p>
              I implemented a coroutine-based, event-driven communication system between an interactions manager script, characters, the player, and scene actions.
              The manager iterates through an inspector-defined list and triggers the respective events for each subscribed class.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <span className="font-semibold">Multiple characters:</span>
                <ul className="list-disc ml-5 space-y-1">
                  <li>A dialogue with text and either audio or a fixed duration.</li>
                  <li>Walking to a specific location.</li>
                  <li>Playing an animation.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">A player:</span>
                <ul className="list-disc ml-5 space-y-1">
                  <li>A dialogue with text and either audio or a fixed duration.</li>
                  <li>Being positioned at a specific location.</li>
                  <li>Interacting with the environment.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Visual effects:</span>
                <ul className="list-disc ml-5 space-y-1">
                  <li>A manager class that tweens post-processing effect values for visual enhancements.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Credits Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Credits</h2>
          <p className="text-lg">
            Client project for the VR and AR Design and Development course at Vancouver Film School.
            Team members: 
            <a href="" className="text-blue-400 hover:underline ml-1">Anthony Fusio</a>,
            <a href="" className="text-blue-400 hover:underline ml-1"> Elaine Serrano</a>,
            <a href="" className="text-blue-400 hover:underline ml-1"> William Livingstone</a>,
          </p>
        </section>
      </div>
    </BaseProjectDescription>
  );
}
