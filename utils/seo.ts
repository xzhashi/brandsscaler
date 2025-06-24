
export const setMetaTags = (title: string, description: string, keywords?: string) => {
  document.title = `${title} | BrandsScaler`;
  
  let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  } else {
    metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = description;
    document.head.appendChild(metaDesc);
  }

  let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
  if (keywords) {
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }
  }

  // Basic Open Graph and Twitter Card updates
  const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (ogTitle) ogTitle.setAttribute('content', `${title} | BrandsScaler`);
  
  const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (ogDesc) ogDesc.setAttribute('content', description);
  
  const twitterTitle = document.querySelector('meta[property="twitter:title"]') as HTMLMetaElement | null;
  if (twitterTitle) twitterTitle.setAttribute('content', `${title} | BrandsScaler`);

  const twitterDesc = document.querySelector('meta[property="twitter:description"]') as HTMLMetaElement | null;
  if (twitterDesc) twitterDesc.setAttribute('content', description);
};

export const setPageSpecificJsonLd = (jsonData: object | null) => {
  const scriptTag = document.getElementById('page-specific-json-ld');
  if (scriptTag) {
    scriptTag.innerHTML = jsonData ? JSON.stringify(jsonData) : '';
  }
};
