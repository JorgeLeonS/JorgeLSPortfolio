'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Project } from '../data/ProjectsData';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export interface BaseProjectDescriptionProps {
  project: Project;
  onBack: () => void;
  children?: ReactNode;
}

export function BaseProjectDescription({ project, onBack, children }: BaseProjectDescriptionProps) {
  return (
    <div className="relative p-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 text-green-100 hover:text-green-300"
      >
        <ArrowLeftIcon className="h-8 w-8" />
      </button>

      <div className="mt-12">

        {children}
      </div>
    </div>
  );
}
