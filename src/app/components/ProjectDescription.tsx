// ProjectDescription.tsx
'use client';
import React from 'react';
import { Project } from '../data/ProjectsData';
import { BaseProjectDescription } from './BaseProjectDescription';
import { CyberAttack } from './Projects/CyberAttack';
import { Swarm2 } from './Projects/Swarm2';
import { VisionsOfYesterday } from './Projects/VisionsOfYesterday';
import { OtherProjects } from './Projects/OtherProjects';

export interface ProjectDescriptionProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDescription({ project, onBack }: ProjectDescriptionProps) {
  // Render the special version if the project title matches
  if (project.title === 'Cyber Attack') {
    return <CyberAttack project={project} onBack={onBack} />;
  }
  else if (project.title === 'Swarm 2') {
    return <Swarm2 project={project} onBack={onBack} />;
  }
  else if (project.title === 'Visions of Yesterday') {
    return <VisionsOfYesterday project={project} onBack={onBack} />;
  }
  else if (project.title === 'Other Projects'){
    return <OtherProjects project={project} onBack={onBack} />;
  }

  // Otherwise, render the base version
  return <BaseProjectDescription project={project} onBack={onBack} />;
}
