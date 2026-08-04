import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactFormAndInfo from '../components/contact/ContactFormAndInfo';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative pt-15">
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12 pb-20">
        <ContactHero />
        <ContactFormAndInfo />
        <ContactFAQ />
        <ContactCTA />
      </div>
    </div>
  );
}
