const episodes = [
  {
    id: 'ep02',
    episodeNumber: '02',
    title: 'Jilles Soeters on AI/ML and Developer Experience',
    description: 'Jilles talks about vibe coding, MCP servers, and how AI is shaping the future of software development.',
    thumbnail: 'https://img.youtube.com/vi/w02bweXk2yw/maxresdefault.jpg',
    youtubeId: 'w02bweXk2yw',
    publishDate: '2025-01-27',
    duration: '27 min',
    tags: ['AI', 'LLM', 'ML', 'Developer Experience', 'Vibe Coding', 'MCP Servers', 'Software Engineering'],
    spotifyUrl: 'https://open.spotify.com/episode/3IBqHboITGtxUQsUhp9hHH?si=650c91b9f0894b4a',
    applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/ep-02-jilles-soeters-on-ai-ml-and-developer-experience/id1836825875?i=1000729052881'
  },
  {
    id: 'ep01',
    episodeNumber: '01',
    title: 'Building a Career Beyond Just Software with Seth Hodgson',
    description: 'From biochemistry to SVP of Engineering at Udemy, Seth shares how to grow as a developer and leader beyond just software.',
    thumbnail: 'https://img.youtube.com/vi/Mn44AiX7kF0/maxresdefault.jpg',
    youtubeId: 'Mn44AiX7kF0',
    publishDate: '2024-08-21',
    duration: '47 min',
    tags: ['Leadership', 'Career Growth', 'Engineering Management', 'Tech Industry'],
    spotifyUrl: 'https://open.spotify.com/episode/7sRQvp5hRY99vOZzdfw3Fq?si=6420ba4e5f104170',
    applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/ep-01-building-a-career-beyond-just-software-with/id1836825875?i=1000724315848'
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