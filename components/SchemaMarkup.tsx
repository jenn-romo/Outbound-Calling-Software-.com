
import React from 'react';

const SchemaMarkup: React.FC = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Revenue Hunters",
    "operatingSystem": "Web-based",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "997.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "description": "Revenue Hunters provides high-performance outbound calling software and AI phone agents to automate sales qualification and appointment setting."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is outbound calling software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outbound calling software is a tool that automates the process of making sales calls to prospective leads. Revenue Hunters enhances this with AI to hold natural conversations and book meetings."
        }
      },
      {
        "@type": "Question",
        "name": "Does AI cold calling software actually work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AI cold calling software from Revenue Hunters can qualify leads, handle objections, and sync directly with your CRM, performing at the level of a high-trained SDR."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </>
  );
};

export default SchemaMarkup;
