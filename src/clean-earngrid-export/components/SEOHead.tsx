export function SEOHead() {
  // In a real app, you'd use react-helmet or Next.js Head component
  // For this standalone version, we'll set document title via useEffect
  
  if (typeof window !== 'undefined') {
    document.title = 'EarnGrid by IdleNet - Your Computer Earns While You Sleep';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Install IdleNet with one click. Your computer automatically earns money during downtime—no configuration, no technical knowledge required.');
    }
  }
  
  return null;
}