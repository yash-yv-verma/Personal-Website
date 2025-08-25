# Platform URLs Setup for Beyond the Stack Podcast

## Overview
Your BTS episodes now include buttons for Spotify and Apple Podcasts platforms. These buttons are displayed on both the episode listing page (`/bts`) and individual episode pages (`/bts/[episode]`).

## Current Setup
- **Spotify**: Green buttons with Spotify branding
- **Apple Podcasts**: Black buttons with Apple branding
- **Responsive Design**: Buttons automatically adjust for mobile and desktop
- **Animations**: Smooth hover effects and transitions

## How to Update URLs

### 1. Find Your Episode URLs
- **Spotify**: Go to your episode on Spotify, copy the URL from the address bar
- **Apple Podcasts**: Go to your episode on Apple Podcasts, copy the URL from the address bar

### 2. Your Current Platform Links
- **Spotify Profile**: [https://open.spotify.com/show/770A9NCMDj1cSXpMfsv5o2?si=7bced10fe34c4de2](https://open.spotify.com/show/770A9NCMDj1cSXpMfsv5o2?si=7bced10fe34c4de2)
- **Apple Podcasts Profile**: [https://podcasts.apple.com/us/podcast/beyond-the-stack/id1836825875](https://podcasts.apple.com/us/podcast/beyond-the-stack/id1836825875)

### 2. Update the Data File
Edit `src/data/episodesData.js` and replace the placeholder URLs:

```javascript
{
  id: 'ep01',
  // ... other episode data ...
  spotifyUrl: 'https://open.spotify.com/episode/YOUR_ACTUAL_SPOTIFY_ID',
  applePodcastsUrl: 'https://podcasts.apple.com/podcast/YOUR_ACTUAL_APPLE_ID'
}
```

### 3. URL Format Examples
- **Spotify**: `https://open.spotify.com/episode/7sRQvp5hRY99vOZzdfw3Fq?si=6420ba4e5f104170`
- **Apple Podcasts**: `https://podcasts.apple.com/us/podcast/ep-01-building-a-career-beyond-just-software-with/id1836825875?i=1000724315848`

### 4. Episode 01 - Fully Integrated ✅
- **Spotify**: [https://open.spotify.com/episode/7sRQvp5hRY99vOZzdfw3Fq?si=6420ba4e5f104170](https://open.spotify.com/episode/7sRQvp5hRY99vOZzdfw3Fq?si=6420ba4e5f104170)
- **Apple Podcasts**: [https://podcasts.apple.com/us/podcast/ep-01-building-a-career-beyond-just-software-with/id1836825875?i=1000724315848](https://podcasts.apple.com/us/podcast/ep-01-building-a-career-beyond-just-software-with/id1836825875?i=1000724315848)

## Features
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Smooth Animations**: Framer Motion integration
- ✅ **Platform Branding**: Official colors and icons
- ✅ **Hover Effects**: Interactive user experience
- ✅ **Mobile Optimized**: Touch-friendly button sizes

## Styling
The buttons use inline styles for consistency and are fully customizable. You can modify:
- Colors
- Sizes
- Spacing
- Animations
- Hover effects

## Notes
- Buttons open in new tabs (`target="_blank"`)
- Includes proper security attributes (`rel="noopener noreferrer"`)
- Font Awesome icons are used for platform logos
- Mobile-specific CSS ensures optimal viewing on all devices
