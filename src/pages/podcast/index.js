import SEOHead from '../../components/shared/SEOHead';
import ComingSoon from '../../components/shared/ComingSoon';

export default function Podcast() {
  return (
    <>
      <SEOHead 
        title="Podcast by Yash Verma | Stay Tuned"
        description="Podcast by Yash Verma. Stay tuned for insightful discussions, interviews, and more. Coming soon!"
        canonical="https://yash-verma.com/podcast/"
        keywords="Yash Verma, Podcast, Technology, Interviews, Discussions, Coming Soon"
        ogImage="https://yash-verma.com/images/homebg.jpeg"
      />
      <ComingSoon 
        title="Podcast"
        message="Coming Soon by"
        author="Yash Verma"
        gradientColors={["#6a82fb", "#fc5c7d"]}
        backgroundColor="linear-gradient(135deg, #101217 0%, #181a1f 100%)"
      />
    </>
  );
} 