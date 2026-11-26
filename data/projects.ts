// Datos de mis proyectos

export type MediaType = 'gradient' | 'image'

export interface Project{
    id: number
    category: 'sc' | 'dev' | 'ds' | 'blender' | 'web' | string
    tag: string
    tagClass: string
    title: string
    desc: string
    href: string
    size: 'small' | 'large' | 'medium' | 'wide' | 'half'
    media:{
        type: MediaType
        value: string
    }
}


// Categorías para los filtros del portfolio
export const filterLabels: Record<string, string> = {
  all: 'All',
  sc: 'Science Communication',
  dev: 'Dev',
  ds: 'Data Science',
  blender: 'Blender / 3D',
  video: 'Video',
  web : 'Web',
}

export const projects: Project[] = [
    {
    id: 1,
    category: 'sc',
    tag: 'Science communication',
    tagClass: 'divulgacion',
    title: 'Science communication',
    desc: 'A public science communication account focused on communicating scientific research in an accessible way, covering topics in computer science and biology for a general audience.',
    href: 'https://www.instagram.com/urri.php/',
    size: 'large',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#6285e4 0%,#122856 100%)',
    },
  },
  {
    id: 2,
    category: 'ds',
    tag: 'Data Science',
    tagClass: 'ds',
    title: 'Data analysis: Xylarum IB-UNAM',
    desc: 'Statistical Analysis and Processing of Biological Data on Xylarum by the UNAM Institute of Biology. Presented at the 23rd Mexican Congress of Botany. It is currently in the process of being published',
    href: 'https://github.com/UrriIsa/r-projects/tree/main/symposiumIBUNAM2024',
    size: 'medium',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#924c90 0%,#4c0101 100%)',
    },
  },
  {
    id: 6,
    category: 'web',
    tag: 'Web',
    tagClass: 'web',
    title: 'Web Development Course Mentoring 2026',
    desc: 'Mentor and instructor for the Web Development course taught at ENP 6. A support website was developed to prevent students from dropping out of specialized technical programs..',
    href: 'https://github.com/UrriIsa/ENP6-CW26-E3/tree/develop',
    size: 'medium',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#9943fb 0%,#1d0848 100%)',
    },
  },
  {
    id: 19,
    category: 'dev',
    tag: 'Assembly',
    tagClass: 'C',
    title: 'Interactive terminal — MIPS Assembly',
    desc: 'I developed an interactive terminal in MIPS assembly language using the MARS simulator. The commands implemented are song, rev, cat, repr, and exit.',
    href: 'https://github.com/UrriIsa/assembly/tree/main/MIPS/shell',
    size: 'large',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#579a54 0%,#233d74 100%)',
    },
  },
  {
    id: 13,
    category: 'dev',
    tag: 'Java',
    tagClass: 'java',
    title: 'Terminal Spelling Challenge',
    desc: 'An interactive console application developed in Java for spelling practice and improvement using terminal-based logic.',
    href: 'https://github.com/UrriIsa/java-projects/tree/main/spellingGame',
    size: 'small',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#4b8d8d 0%,#0e4158 100%)',
    },
  },
  
  {
    id: 4,
    category: 'dev',
    tag: 'C / Linux Dev',
    tagClass: 'C',
    title: 'Snake Game — Terminal',
    desc: 'Implementation of the classic game using the ncurses library for terminal manipulation in Linux/Unix environments.',
    href: 'https://github.com/UrriIsa/cpp-algorithms/tree/master/snakeGame',
    size: 'small',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#579a54 0%,#233d74 100%)',
    },
  },
  {
    id: 3,
    category: 'web',
    tag: 'Web',
    tagClass: 'web',
    title: 'Web Development Course Mentoring 2025',
    desc: 'Mentor and instructor for the Web Development with JavaScript course taught at ENP 6. An interactive music player was developed using the YouTube API.',
    href: 'https://github.com/UrriIsa/ENP6-CW25-E8',
    size: 'small',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#9943fb 0%,#1d0848 100%)',
    },
  },
  {
    id: 10,
    category: 'sc',
    tag: 'Science communication',
    tagClass: 'divulgacion',
    title: 'Impulso STEAM',
    desc: 'A member and one of the founders of the Impulso STEAM collective, whose goal is to make science more accessible to children and young people. Part of INJUVE\'s JAT program',
    href: 'https://www.instagram.com/urri.php/',
    size: 'wide',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#6285e4 0%,#122856 100%)',
    },
  },
]