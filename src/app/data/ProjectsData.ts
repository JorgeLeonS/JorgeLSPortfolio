export interface Project {
  slug: string;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
}

export const projectsData = [
  {
    slug: 'shadow-chambers',
    title: 'Shadow Chambers',
    image: '/images/my-first-project.gif',
    description: 'Brief description of the first project.',
  },
  {
    slug: 'chronostrike',
    title: 'Chronostrike',
    image: '/images/my-first-project.gif',
    description: 'Brief description of the first project.',
  },
    {
      slug: 'swarm-2',
      title: 'Swarm 2',
      image: '/images/my-first-project.gif',
      description: 'Brief description of the first project.',
    },
    {
      slug: 'visions-of-yesterday',
      title: 'Visions of Yesterday',
      image: '/images/Dementia/Gifs/SquaredDementia.gif',
      description: 'Brief description of the second project.',
    },
    {
      slug: 'cyber-attack',
      title: 'Cyber Attack',
      image: '/images/CyberAttack/SquaredCA.gif',
      description: 'Brief description of the second project.',
    },
    {
      slug: 'other-projects',
      title: 'Other Projects',
      image: '/images/my-third-project.jpg',
      description: 'Brief description of the third project.',
    },
    // ... Add more as needed
  ];

  export const swarm2Images = {
    logo: "/images/Swarm2/Swarm2Logo.png",
    gifs: [
      "/images/Gifs/CA_Robots2.gif",
      "/images/Gifs/CA_Robots1.gif",
      "/images/Gifs/CA_Puzzle1.gif",
      "/images/Gifs/CA_Puzzle2.gif",
    ]
  };

  export const visionsOfYesterdayImages = {
    interactionsManager: "/images/Dementia/UnityAndCode/UnityEditor_InteractionsManager.png",
    playerController: "/images/Dementia/UnityAndCode/UnityEditor_PlayerController.png",
    jamesController: "/images/Dementia/UnityAndCode/UnityEditor_JamesController.png",
    gifs: [
      "/images/Dementia/Gifs/BlindsEffect.gif",
      "/images/Dementia/Gifs/PillsEffect.gif",
    ]
  };

  export const cyberAttackImages = {
    logo: "/images/CyberAttack/CyberAttackLogoWhite.png",
    gifs: [
      "/images/Gifs/CA_Robots2.gif",
      "/images/Gifs/CA_Robots1.gif",
      "/images/Gifs/CA_Puzzle1.gif",
      "/images/Gifs/CA_Puzzle2.gif",
    ]
  };

  export const otherProjectImages = {
    geometryGuars: ["/images/Gifs/Geometry1.gif"],
    starWolf: [
      "/images/StarWolf/DemoImage2.png",
      "/images/StarWolf/DemoImage3.png",
      "/images/StarWolf/DemoImage4.png"
    ],
    bowPlatformer: ["/images/Gifs/Bows1.gif"],
    ponTuSemilla: [
      "/images/PonTuSemilla/DemoImage2.png",
      "/images/PonTuSemilla/DemoImage3.png",
      "/images/PonTuSemilla/DemoImage4.png"
    ],
    cadenaPerpetua: ["/images/Gifs/CadenaPer.gif"],
    escapeVelocity: ["/images/Gifs/EscapeVel.gif"],
  };
  