// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { projectsData } from '../../data/ProjectsData'

// Must match the same data used in `projects/page.tsx`
// const projectsData = [
//   {
//     slug: 'first-project',
//     title: 'First Project',
//     image: '/images/my-first-project.gif',
//     description: 'Full, detailed description of the first project.',
//   },
//   {
//     slug: 'second-project',
//     title: 'Second Project',
//     image: '/images/my-second-project.gif',
//     description: 'Full, detailed description of the second project.',
//   },
// ]

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // Use the `slug` from the URL to find the right project
  const project = projectsData.find((p) => p.slug === params.slug)
  
  if (!project) {
    // Show a 404 page if no project is found
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl font-bold mb-6 text-green-100">
        {project.title}
      </h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-md mb-6"
      />
      <p className="text-green-200">{project.description}</p>
    </div>
  )
}