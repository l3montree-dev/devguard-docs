import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import Heading from '@theme/Heading';
import React from 'react';

function HomepageHeader() {
  
  return (
    <header className={clsx('dark:bg-white bg-black dark:text-black')}>
      <div className="container text-center max-w-screen-lg py-20">
        <Heading as="h1" className="hero__title text-6xl font-medium font-display">
        ISO 27001 konformes<br/> Schwachstellenmanagement
        </Heading>
        <p className="hero__subtitle text-lg mt-10 opacity-75">Nahtlose Integration, umfassende Dokumentation. FlawFix als ISO 27001 konformes Schwachstellenmanagement passt sich perfekt in jede IT-Umgebung ein und gewährleistet die Mitigation von Schwachstellen und eine lückenlose Dokumentation der Sicherheitsprozesse.
        </p>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}
