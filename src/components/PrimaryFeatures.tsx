import {
  BeakerIcon,
  ChartPieIcon,
  CircleStackIcon,
  CursorArrowRaysIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
const features = [
  {
    title: '1. DevSecOps-Enhanced Vulnerability Consolidation',
    description:
      'FlawFix seamlessly integrates with your DevSecOps cycle, allowing swift import and unification of vulnerability scan reports in popular formats. This integration ensures continuous and proactive vulnerability management, keeping security in sync with every phase of development.',
    icon: CircleStackIcon,
  },
  {
    title: '2. Automated Data Enrichment including Threat Intelligence',
    description:
      "FlawFix elevates your security posture by intelligently automating the aggregation and enrichment of data from the Common Vulnerabilities and Exposures (CVE) database. It doesn't just identify vulnerabilities; it contextualizes them with detailed threat intelligence, including CVSS scores, to accurately map each vulnerability's severity. This integration of automated analysis and threat intelligence empowers you with comprehensive insights for proactive security decision-making",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: '3. Advanced Risk Assessment with Intuitive Guidance',
    description:
      'FlawFix revolutionizes risk analysis with its user-friendly interface, guiding you through a comprehensive assessment process. Utilizing the latest CVSS 4.0 metrics, it not only facilitates a nuanced and meaningful risk scoring but also supports automatic risk acceptance. This approach streamlines risk evaluation, enabling you to make informed, efficient decisions about your security posture.',
    icon: BeakerIcon,
  },
  {
    title: '4. Tailored Mitigation Selection with Seamless Integration',
    description:
      'FlawFix empowers you to select the most effective mitigation strategies, ensuring targeted and efficient resolution of vulnerabilities. It integrates smoothly with leading ticket systems, ensuring every action is meticulously documented and logged. This not only aids in maintaining ISO compliance but also streamlines the process, keeping your security measures organized and traceable.',
    icon: CursorArrowRaysIcon,
  },

  {
    title: '5. Automated Reporting and Insightful Dashboards',
    description:
      'FlawFix goes beyond just reporting; it delivers an automated, comprehensive reporting system, complete with insightful dashboards tailored for management and other key stakeholders. These reports are not only clear and meaningful but are also designed to provide a holistic view of all relevant information, including implemented measures and the current security status.',
    icon: ChartPieIcon,
  },
]

export function PrimaryFeatures() {
  const activeFeatureRef = useRef(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const listener = () => {
      // get all features on the page
      const features = document.querySelectorAll('.feature')

      const progressBar = progressRef.current
      if (progressBar) {
        const y = progressBar.getBoundingClientRect().top
        setProgress(
          Math.min(
            progressBar.getBoundingClientRect().height,
            window.innerHeight / 2 - y,
          ),
        )
      }

      // iterate over each feature
      features.forEach(feature => {
        // get the position of the feature
        const featurePosition = feature.getBoundingClientRect()
        // check if the feature is in the middle of the screen
        if (
          featurePosition.top < window.innerHeight / 2 &&
          featurePosition.bottom > window.innerHeight / 2 &&
          activeFeatureRef.current !== parseInt(feature.getAttribute('data-i'))
        ) {
          // get the index of the feature
          const i = parseInt(feature.getAttribute('data-i'))
          activeFeatureRef.current = i
          setActiveFeature(i)
        }
      })
    }

    document.addEventListener('scroll', listener, { passive: true })
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [])

  const clickListener = i => () => {
    const feature = document.querySelector(`[data-i="${i}"]`)
    if (feature) {
      feature.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }
  return (
    <section
      id="features"
      className="relative  bg-blue-100 pb-28 pt-20 sm:py-32"
    >
      <div className="container relative">
        <div className="max-w-4xl md:mx-auto md:text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Improve your IT security with advanced vulnerability analysis
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-900">
            Utilise an ISO 27001 compliant solution that provides you with a
            seamless and efficient process for identifying, assessing and
            elimination of security vulnerabilities
          </p>
        </div>

        <div className="relative flex flex-1 flex-col gap-10 pt-10">
          <div
            ref={progressRef}
            className="absolute left-3 h-full w-2 -translate-x-1/2 rounded-full bg-slate-400"
          >
            <div
              style={{
                height: `${progress}px`,
              }}
              className="w-2 rounded-full bg-blue-950 "
            ></div>
          </div>

          {features.map((feature, i) => (
            <div
              data-i={i}
              className="feature flex  flex-row items-center"
              key={feature.title}
            >
              <div
                onClick={clickListener(i)}
                className={clsx(
                  'relative z-20 flex h-6 w-6 cursor-pointer flex-row items-center justify-center rounded-full border-2 border-blue-950',
                  i <= activeFeature ? 'bg-yellow-500' : 'bg-white',
                )}
              ></div>
              <div
                onClick={clickListener(i)}
                className={clsx(
                  'relative ml-auto w-5/6 cursor-pointer rounded-sm p-4 transition-all sm:w-3/4',
                  activeFeature === i && 'bg-blue-950 text-blue-50 shadow-lg',
                )}
              >
                <div className="flex flex-row gap-4">
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                </div>
                <p className=" mt-2 opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <a
            href="/Whitepaper_FlawFix.pdf"
            download={true}
            className="bg-yellow-500 hover:text-black hover:no-underline mt-6 hover:bg-yellow-600 transition-all text-black font-bold py-2 px-4 rounded"
          >
            Download Whitepaper
          </a>
        </div>
      </div>
    </section>
  )
}
