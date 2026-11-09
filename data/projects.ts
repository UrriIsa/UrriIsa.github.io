// Datos de mis proyectos

export type MediaType = 'gradient' | 'image'

export interface Project{
    id: number
    category: 'divulgacion' | 'dev' | 'ds' | 'blender' | string
    tag: string
    tagClass: string
    title: string
    desc: string
    href: string
    size: 'large' | 'medium' | 'wide'
    media:{
        type: MediaType
        value: string
    }
}

// Categorías para los filtros del portfolio
export const filterLabels: Record<string, string> = {
  todo:        'Todo',
  divulgacion: 'Divulgación',
  dev:         'Dev',
  ds:          'Data Science',
  blender:     'Blender / 3D',
  video:       'Video',
}

export const projects: Project[] = [
    {
    id: 1,
    category: 'science communication',
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
      value: 'linear-gradient(150deg,#924c90 0%,#1d0848 100%)',
    },
  },
  {
    id: 3,
    category: 'dev',
    tag: 'Java',
    tagClass: 'java',
    title: 'Terminal Spelling Challenge',
    desc: 'An interactive console application developed in Java for spelling practice and improvement using terminal-based logic.',
    href: 'https://github.com/UrriIsa/java-projects/tree/main/spellingGame',
    size: 'medium',
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
    size: 'large',
    media: {
      type: 'gradient',
      value: 'linear-gradient(150deg,#579a54 0%,#233d74 100%)',
    },
  },
]