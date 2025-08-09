const blogPosts = [
  {
    id: '01',
    title: 'Monoliths Explained: The Architecture I Kept Hearing About at My First Internship',
    excerpt: 'A beginner-friendly look at what a monolith is, how it compares to microservices, and why it comes up so often in software discussions.',
    content: `
# Monoliths Explained: The Architecture I Kept Hearing About at My First Internship

## The First Standup

It was my first standup meeting at my internship, and honestly, I had no idea what was going on.

There were so many words being thrown around that I didn't understand, and I just kept nodding along, hoping no one noticed. But out of everything mentioned, there was one word that kept coming up — monolith.

Monolith this. Monolith that. The monolith needs an update.

The more they said it, the more it seemed like this word was the most important thing in the world, and everyone else knew exactly what it meant.

Meanwhile, I was sitting there, smiling and nodding, secretly Googling "What is a monolith?". To my surprise, the search didn't help me much, and I left the meeting just as confused as I entered it.

When the weekend came around, I decided enough was enough. I wasn't going to spend another week feeling clueless. I was going to figure out what this "monolith" *thing* actually was.

## So… What is a Monolith?

In simple terms, a monolith is a single, unified application. All the parts of the app — backend, frontend, and database logic — live together and are deployed as one unit.

Imagine a large office building where different departments are all located in the same structure. Each department has its own space, but everything is still connected. If you want to change the layout of one department, it might be a small update. But if you make bigger changes, you have to think about how those changes affect the rest of the building.

In a monolithic application, updates or deployments happen to the whole system together, even if you only changed one part. This can make it easier to manage when starting out, but it can become more challenging as the system grows in size and complexity.

One of the other big names you'll hear in the same conversation is microservices. Microservices take the opposite approach: instead of one large application, you break it into smaller, independent services that can be deployed and updated separately.

## Quick Peek: Monolith vs Microservices

If a monolith is one large office building, microservices are like separate office buildings for each department. Each building can be renovated, moved, or expanded without touching the others.

This can make scaling and maintaining easier, but it also comes with challenges like making sure all the buildings can communicate effectively and work toward the same goals.

## Other Common Architectures You'll Hear About

While monoliths and microservices are two of the most talked-about patterns, there are a few others you'll hear in meetings and tech discussions:

- Layered (n-tier) — Separates code into layers like presentation, business logic, and data access.

- Event-Driven — Services communicate by producing and consuming events, often in real time.

- Serverless — Runs application code in cloud-managed functions without provisioning servers.

Understanding these will help you see the bigger picture when people talk about "system design" or "architecture" in a professional setting.

## Wrapping Up

So that's the mystery behind the "monolith" I kept hearing about in my first standup. It is not a secret project name. It is a way of building software that is still common today, especially for projects in their early stages.
    `,
    publishDate: '2025-08-09T12:00:00',
    readTime: '6 min read',
    tags: ['Architecture', 'Software Engineering', 'Backend', 'Microservices'],
    thumbnail: '/images/mono.jpeg',
    featured: true
  },
  {
    id: '02',
    title: 'More Content Coming Soon!',
    excerpt: 'Stay tuned for more insights, tutorials, and stories from my journey in software development.',
    content: `
# More Content Coming Soon!

Thanks for reading my first blog post! I'm excited to share more content with you soon.

## What's Coming Next?

I'm working on more articles covering:

- My experiences learning new technologies
- Practical tutorials and tips
- Behind-the-scenes stories from software development
- Lessons learned from real projects

## Stay Connected

Keep checking back for new posts, or connect with me to stay updated on my latest content and projects.

More exciting content is on the way!
    `,
    publishDate: '2025-08-22T12:00:00',
    readTime: '1 min read',
    tags: ['Updates', 'Coming Soon'],
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiMyYTJhMmEiLz4KICA8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9IiMwMDAwMDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwLjM7MTswLjMiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9IiMwMDAwMDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwLjM7MTswLjMiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIi8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSBjeD0iMjIwIiBjeT0iMTIwIiByPSI2IiBmaWxsPSIjMDAwMDAwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMC4zOzE7MC4zIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMXMiLz4KICA8L2NpcmNsZT4KPC9zdmc+',
    featured: false
  }
];

// Helper function to get blog post by ID
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get all blog posts sorted by newest first
export const getAllBlogPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured);
};

// Helper function to get blog posts by tag
export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
}; 