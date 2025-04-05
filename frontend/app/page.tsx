import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="heading-1 mb-6">
          <span className="bg-gradient-to-r from-skill-bridge-primary to-skill-bridge-secondary bg-clip-text text-transparent">SKILL BRIDGE</span>
        </h1>
        <p className="body-large mb-8">
          Transforming education with domain-based learning pathways that bridge the skill gap between education and industry demands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </main>
  )
}
