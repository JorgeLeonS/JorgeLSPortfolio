export interface Project {
  slug: string;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
}

export const projectsData = [
    {
      slug: 'first-project',
      title: 'Swarm 2',
      image: '/images/my-first-project.gif',
      description: 'Brief description of the first project.',
    },
    {
      slug: 'second-project',
      title: 'Cyber Attack',
      image: '/images/CyberAttack/SquaredCA.gif',
      description: 'Brief description of the second project.',
    },
    {
      slug: 'third-project',
      title: 'Third Project',
      image: '/images/my-third-project.jpg',
      description: 'Brief description of the third project.',
    },
    // ... Add more as needed
  ];
  