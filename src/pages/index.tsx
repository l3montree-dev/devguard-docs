import clsx from 'clsx'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import Heading from '@theme/Heading'
import React from 'react'
import { PrimaryFeatures } from '../components/PrimaryFeatures'
import { Faqs } from '../components/Faqs'

function HomepageHeader() {
  return (
    <header className={clsx('bg-blue-950')}>
      <div className="container relative text-center text-white max-w-screen-lg py-20">
        <Heading
          as="h1"
          className="hero__title relative text-6xl font-medium font-display"
        >
          Open-Source ISO 27001 compliant
          <br />{' '}
          <span className="text-yellow-500">Vulnerability Management</span>
        </Heading>
        <p className="hero__subtitle text-lg mt-10">
          DevSecOps Simplified: FlawFix integrates effortlessly into your
          development lifecycle, offering an ISO 27001-compliant platform that
          aligns with the rhythm of DevSecOps. Designed for developers, it
          ensures robust vulnerability mitigation and comprehensive
          documentation, making security a seamless part of your development
          process.
        </p>
        <div className="flex justify-center mt-10">
          <a
            href="/docs"
            className="bg-yellow-500 hover:no-underline hover:text-black hover:bg-yellow-600 transition-all text-black font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
        </div>
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
        <PrimaryFeatures />

        <section className="bg-white">
          <div className="container py-10">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-col gap-4 flex items-center justify-center">
                <div className="flex flex-row items-center gap-2">
                  <img src="/img/logo_img.svg" className="h-20" />
                  <span className="font-bold text-5xl">@</span>
                  <img src="/img/discord-mark-black.svg" className="h-16" />
                </div>
                <h2 className="text-5xl font-display max-w-lg text-center font-medium">
                  Welcome to the FlawFix community
                </h2>
                <div className="flex flex-row gap-4">
                  <button className="bg-yellow-500 mt-6 hover:bg-yellow-600 transition-all text-black font-bold py-2 px-4 rounded">
                    Join the Discord
                  </button>
                  <a
                    target="_blank"
                    href="https://github.com/l3montree-dev/flawfix"
                    className="bg-yellow-500 hover:text-black hover:no-underline mt-6 hover:bg-yellow-600 transition-all text-black font-bold py-2 px-4 rounded"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faqs />
        <section className="bg-blue-950 pt-10 text-white">
          <div>
            <img src="/img/logo_inverse.svg" className="w-40 mx-auto" />
            <div className="container flex flex-row justify-center py-10">
              <div className="max-w-screen-md text-center">
                <h2 className="text-4xl font-medium mb-2 font-display text-center">
                  Streamline Your{' '}
                  <span className="text-yellow-500">DevSecOps</span> Journey
                </h2>
                <p className="text-lg mt-5">
                  Empower your DevSecOps implementation with FlawFix&apos;s
                  guided, error-proof approach. Simplify complex security
                  integrations and embrace a culture of security-first
                  development, effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
