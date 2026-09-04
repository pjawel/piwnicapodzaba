import { useEffect } from 'react';

export interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  canonicalPath?: string;
  structuredData?: object | object[];
}

const DEFAULT_IMAGE = 'https://iili.io/BZtnTLx.md.jpg';
const SITE_NAME = 'Sala Bankietowa Piwnica pod Żabą & Hit Fit Lubin';
const BASE_URL = 'https://piwnicapodzaba.pl';

export function SeoHead({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  canonicalPath,
  structuredData,
}: SeoHeadProps) {
  const currentPath = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // Helper to set or create meta tag by name or property
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 3. Set Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // 4. Set OpenGraph Meta Tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'pl_PL');

    // 5. Set Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'route-structured-data';
    let scriptElement = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = SCRIPT_ID;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData]);

  return null;
}
