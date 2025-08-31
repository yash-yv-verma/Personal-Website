const episodes = [
  {
    id: 'ep01',
    episodeNumber: '01',
    title: 'Building a Career Beyond Just Software with Seth Hodgson',
    description: 'From biochemistry to SVP of Engineering at Udemy, Seth shares how to grow as a developer and leader beyond just software.',
    thumbnail: 'https://img.youtube.com/vi/Mn44AiX7kF0/maxresdefault.jpg',
    youtubeId: 'Mn44AiX7kF0',
    publishDate: '2024-08-21',
    duration: '47 min',
    tags: ['Leadership', 'Career Growth', 'Engineering Management', 'Tech Industry']
  },
  {
    id: 'ep02',
    episodeNumber: '02',
    title: 'Jilles Soeters on AI/ML and Developer Experience',
    description: 'Jilles talks about vibe coding, MCP servers, and how AI is shaping the future of software development.',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiMyYTJhMmEiLz4KICA8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9IiMwMDAwMDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwLjM7MTswLjMiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9IiMwMDAwMDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwLjM7MTswLjMiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIi8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSBjeD0iMjIwIiBjeT0iMTIwIiByPSI2IiBmaWxsPSIjMDAwMDAwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMC4zOzE7MC4zIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMXMiLz4KICA8L2NpcmNsZT4KPC9zdmc+',
    youtubeId: 'dQw4w9WgXcQ',
    publishDate: '2004-02-15',
    duration: '52 min',
    tags: ['AI', 'Developer Experience', 'Vibe Coding', 'MCP Servers', 'Software Engineering']
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