import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Update document title
    document.title = 'EarnGrid - Turn Your Computer Into a Tiny Gold Mine';
    
    // Add meta tags
    const metaTags = [
      { name: 'description', content: 'Install IdleNet with one click. Your computer automatically earns money during downtime. Join thousands earning while they sleep.' },
      { name: 'keywords', content: 'earn money computer, idle computer earning, distributed computing, passive income, computer mining' },
      { name: 'author', content: 'EarnGrid by IdleNet' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'EarnGrid - Turn Your Computer Into a Tiny Gold Mine' },
      { property: 'og:description', content: 'Install IdleNet with one click. Your computer automatically earns money during downtime.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://earngrid.io' },
      { property: 'og:site_name', content: 'EarnGrid' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'EarnGrid - Turn Your Computer Into a Tiny Gold Mine' },
      { name: 'twitter:description', content: 'Install IdleNet with one click. Your computer automatically earns money during downtime.' },
      
      // Mobile and viewport
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#39E19D' },
    ];

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://earngrid.io';
    document.head.appendChild(canonical);

    // Add favicon links
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/favicon.ico';
    document.head.appendChild(favicon);

    // Add meta tags to head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Cleanup function to remove added elements
    return () => {
      document.head.removeChild(canonical);
      document.head.removeChild(favicon);
      metaTags.forEach(() => {
        const metas = document.head.querySelectorAll('meta');
        metas.forEach(meta => {
          if (metaTags.some(tag => 
            (tag.name && meta.name === tag.name) || 
            (tag.property && meta.getAttribute('property') === tag.property)
          )) {
            document.head.removeChild(meta);
          }
        });
      });
    };
  }, []);

  return null; // This component doesn't render anything
}