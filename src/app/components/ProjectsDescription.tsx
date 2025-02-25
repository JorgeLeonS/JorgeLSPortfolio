'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ProjectDescription({ project, onBack }) {
  return (
    <div className="relative p-4">
      {/* Back Arrow */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 text-green-100 hover:text-green-300"
      >
        <ArrowLeftIcon className="h-8 w-8" />
      </button>
      
      {/* Project Details */}
      <div className="mt-12">
        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <div className="relative w-full h-64 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="text-green-300">
          {project.longDescription || project.description}
        </p>
      </div>
    </div>
  );
}
