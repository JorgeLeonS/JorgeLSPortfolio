'use client';
import { Suspense, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import ResponsiveNavBar from '../../components/ResponsiveNavBar';
import ProjectsCarousel from '../../components/ProjectsCarousel';
import AboutMe from '../../components/AboutMe';
import ProjectDescription from '../../components/ProjectDescription';
import { Project, projectsData } from '../../data/ProjectsData';

// Extract the logic that uses useSearchParams into its own component.
function HomeContent({ slug }: { slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeSection, setActiveSection] = useState<'projects' | 'about'>('projects');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Sync component state with URL query parameters
  useEffect(() => {
    const section = searchParams.get('section') as 'projects' | 'about' | null;
    const projectSlug = searchParams.get('project');

    // Set the section (default to projects if not provided)
    if (section) {
      setActiveSection(section);
    } else {
      setActiveSection('projects');
    }

    // If there is a project slug in the URL and we're in projects section, set the active project
    if (section === 'projects' && projectSlug) {
      const foundProject = projectsData.find((p) => p.slug === projectSlug);
      setActiveProject(foundProject || null);
    } else {
      setActiveProject(null);
    }
  }, [searchParams]);

  // Update the URL and state when the section changes
  const handleSectionChange = (section: 'projects' | 'about') => {
    setActiveSection(section);
    setActiveProject(null); // clear active project when switching sections
    router.push(`/?section=${section}`);
  };

  // Update the URL and state when a project is selected
  const handleProjectSelect = (project: Project) => {
    setActiveProject(project);
    router.push(`/?section=projects&project=${project.slug}`);
  };

  // Update the URL and state when going back from a project description
  const handleBack = () => {
    setActiveProject(null);
    router.push(`/?section=projects`);
  };

  return (
    <div className="bg-darkest-green text-green-200 min-h-screen">
      <Head>
        <title>Jorge LS Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ResponsiveNavBar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
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
              <ProjectsCarousel setActiveProject={handleProjectSelect} />
            </motion.section>
          )}

          {activeSection === 'projects' && activeProject && (
            <motion.section
              key="projectDescription"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDescription
                project={activeProject}
                onBack={handleBack}
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

// Wrap HomeContent in a Suspense boundary to satisfy useSearchParams
export default function Home({ slug }: { slug: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent slug={slug} />
    </Suspense>
  );
}
