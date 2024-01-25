import React from 'react'
const faqs = [
  [
    {
      question:
        'What advanced capabilities does FlawFix offer for seamless cybersecurity integration?',
      answer:
        'FlawFix excels in integrating with diverse environments, offering adaptability with existing IT infrastructure, advanced vulnerability scanners, and comprehensive third-party risk databases. This seamless integration ensures a harmonious, efficient security workflow.',
    },

    {
      question:
        'How does FlawFix enhance the reporting process for executive management?',
      answer:
        'FlawFix is equipped with automated, sophisticated reporting tools that provide a clear, in-depth analysis of security vulnerabilities. These reports include severity assessments, mitigation actions, and an up-to-date security status, all tailored to inform and guide decision-making for executives and stakeholders.',
    },
    {
      question:
        'Can FlawFix streamline the prioritization of vulnerabilities in my system?',
      answer:
        'Absolutely. FlawFix employs an intelligent prioritization system using CVSS scores, tailored risk assessments, and system criticality evaluations. This ensures that the most urgent vulnerabilities are identified and addressed first, optimizing your security response strategy.',
    },
  ],
  [
    {
      question:
        'What unique features make FlawFix stand out in vulnerability management?',
      answer:
        'FlawFix distinguishes itself with its comprehensive approach to vulnerability management. It goes beyond mere identification and assessment, offering guided mitigation strategies, detailed documentation, and smooth integration with existing systems. FlawFix is a holistic, all-encompassing solution for managing vulnerabilities efficiently.',
    },
    {
      question:
        'How does FlawFix ensure data security and compliance with privacy regulations?',
      answer:
        'Data security is paramount in FlawFix. Our solution adheres to strict GDPR guidelines, with data hosted on secure servers in Germany. We ensure end-to-end encryption of data and maintain strict protocols for data storage and processing, guaranteeing that your information remains confidential and secure.',
    },

    {
      question:
        "How does FlawFix assist when direct vulnerability remediation isn't feasible?",
      answer:
        "FlawFix supports a range of mitigation strategies. If immediate remediation isn't possible, it assists in implementing alternative approaches like risk acceptance or transfer, ensuring continuous protection and compliance.",
    },
  ],
  [
    {
      question:
        "How does FlawFix assist when direct vulnerability remediation isn't feasible?",
      answer:
        "FlawFix supports a range of mitigation strategies. If immediate remediation isn't possible, it assists in implementing alternative approaches like risk acceptance or transfer, ensuring continuous protection and compliance.",
    },
    {
      question: 'What level of customer support does FlawFix provide?',
      answer:
        'FlawFix is committed to exceptional customer support. Our experienced team is readily available to assist with any queries or issues, ensuring a smooth, efficient experience for all users.',
    },
    {
      question:
        'How current and relevant is the vulnerability data provided by FlawFix?',
      answer:
        'FlawFix prides itself on offering the most current vulnerability information. We continuously update our database, including the Common Vulnerabilities and Exposures (CVE) list, to provide real-time, relevant data that keeps your systems secure against emerging threats.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-blue-100 py-20 sm:py-32"
    >
      <div className="relative container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you cannot find the answer to your question here, please do not
            hesitate to contact our
            <a
              className="underline text-yellow-600 inline-flex"
              href="mailto:support@flawfix.dev"
            >
              Support-Team
            </a>{' '}
            or create an issue on{' '}
            <a
              className="underline text-yellow-600 inline-flex"
              href={'https://github.com/l3montree-dev/flawfix'}
            >
              GitHub
            </a>{' '}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
