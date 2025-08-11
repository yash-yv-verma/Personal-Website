import Link from 'next/link';
import { forwardRef } from 'react';

const ScrollToTopLink = forwardRef(({ children, href, ...props }, ref) => {
  const handleClick = () => {
    // Scroll to top immediately when link is clicked
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      
      // Also try alternative methods
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    }
  };

  return (
    <Link href={href} {...props} ref={ref} onClick={handleClick}>
      {children}
    </Link>
  );
});

ScrollToTopLink.displayName = 'ScrollToTopLink';

export default ScrollToTopLink;
