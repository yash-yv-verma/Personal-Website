const episodes = [
  {
    id: 'ep01',
    episodeNumber: '01',
    title: 'Getting Started with React',
    description: 'In this episode, we dive deep into React fundamentals, discussing hooks, state management, and best practices for building modern web applications.',
    thumbnail: '/images/homebg.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    publishDate: '2024-01-15',
    duration: '45 min',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development']
  },
  {
    id: 'ep02',
    episodeNumber: '02',
    title: 'Backend Architecture Patterns',
    description: 'Exploring different backend architecture patterns including microservices, monoliths, and serverless approaches for scalable applications.',
    thumbnail: '/images/homebg.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    publishDate: '2024-03-22',
    duration: '52 min',
    tags: ['Backend', 'Architecture', 'Microservices', 'Node.js']
  },
  {
    id: 'ep03',
    episodeNumber: '03',
    title: 'Frontend Frameworks in 2025',
    description: 'A comprehensive comparison of modern frontend frameworks and their evolution, covering React, Vue, Svelte, and emerging technologies.',
    thumbnail: '/images/homebg.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    publishDate: '2024-05-29',
    duration: '38 min',
    tags: ['Frontend', 'Frameworks', 'React', 'Vue', 'Svelte']
  },
  {
    id: 'ep04',
    episodeNumber: '04',
    title: 'Kubernetes Infrastructure Usage',
    description: 'A comprehensive exploration of different backend architecture patterns and technologies, focusing on Kubernetes infrastructure management and deployment strategies.',
    thumbnail: '/images/homebg.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    publishDate: '2024-07-15',
    duration: '38 min',
    tags: ['Kubernetes', 'Infrastructure', 'Docker', 'Terraform']
  }
  
];

// Helper function to get episode by ID
export const getEpisodeById = (id) => {
  return episodes.find(episode => episode.id === id);
};

// Helper function to get all episodes sorted by newest first
export const getAllEpisodes = () => {
  return episodes.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}; 