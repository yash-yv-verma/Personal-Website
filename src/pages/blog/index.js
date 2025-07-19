import SEOHead from '../../components/shared/SEOHead';
import ComingSoon from '../../components/shared/ComingSoon';

export default function Blog() {
  return (
    <>
      <SEOHead 
        title="Blog by Yash Verma | Coming Soon"
        description="Blog by Yash Verma. Stay tuned for technical articles, insights, tutorials, and more. Coming soon!"
        canonical="https://yash-verma.com/blog/"
        keywords="Yash Verma, Blog, Technology, Programming, Tutorials, Articles, Web Development, Software Engineering"
        ogImage="https://yash-verma.com/images/homebg.jpeg"
      />
      <ComingSoon 
        title="Blog"
        message="Coming Soon by"
        author="Yash Verma"
        gradientColors={["#667eea", "#764ba2"]}
        backgroundColor="linear-gradient(135deg, #101217 0%, #181a1f 100%)"
      />
    </>
  );
} 