import React from 'react'
import {insightsData} from "../arrayObjects/arrayObjects"

function Insights() {
  return (
    <section id='insights' className="max-w-7xl mx-auto px-6 py-20">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Insights &nbsp;
          <span className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
            for Engineers
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 text-lg">
          Stay ahead with articles, guides, and tips from QuantumForge’s expert team.
        </p>
      </header>

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {insightsData.map(({ title, excerpt, date, link }, i) => (
          <article
            key={i}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-700/60 shadow-md hover:shadow-blue-900 transition-shadow duration-300 cursor-pointer animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 120}ms` }}
            onClick={() => window.location.href = link}
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{excerpt}</p>
            <time className="text-xs text-neutral-500">{date}</time>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Insights
