import clsx from 'clsx'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import Heading from '@theme/Heading'
import React from 'react'

function HomepageHeader() {
  return (
    <header className={clsx('bg-blue-950')}>
      <div className="container text-center text-white max-w-screen-lg py-20">
        <Heading
          as="h1"
          className="hero__title text-6xl font-medium font-display"
        >
          ISO 27001 konformes
          <br />{' '}
          <span className="text-yellow-500">Schwachstellenmanagement</span>
        </Heading>
        <p className="hero__subtitle text-lg mt-10 opacity-75">
          Seamless integration, comprehensive documentation. As an ISO
          27001-compliant vulnerability management system, FlawFix fits
          perfectly into any IT environment and ensures the mitigation of
          vulnerabilities and complete documentation of security processes.
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div>
            <img src="/img/logo.svg" className="w-full" />
            Welcome to the FlawFix community
          </div>
        </div>
      </main>
    </Layout>
  )
}
