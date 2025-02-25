'use client';
import { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import ResponsiveNavBar from '../../components/ResponsiveNavBar';
import ProjectsCarousel from '../../components/ProjectsCarousel';
import AboutMe from '../../components/AboutMe';
import ProjectDescription from '../../components/ProjectsDescription';
import { Project } from '../../data/ProjectsData';

export default function Home({ slug }: { slug: string }) {
  // Type activeSection as either "projects" or "about"
  const [activeSection, setActiveSection] = useState<'projects' | 'about'>('projects');
  // Type activeProject as Project or null
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="bg-darkest-green text-green-200 min-h-screen">
      <Head>
        <title>Jorge LS Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ResponsiveNavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeSection === 'projects' && !activeProject && (
            <motion.section
              key="projectsCarousel"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectsCarousel setActiveProject={setActiveProject} />
            </motion.section>
          )}

          {activeSection === 'projects' && activeProject && (
            <motion.section
              key="projectDescription"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDescription
                project={activeProject}
                onBack={() => setActiveProject(null)}
              />
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <AboutMe />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}