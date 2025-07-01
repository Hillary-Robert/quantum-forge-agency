import React from "react";
import { services } from "../arrayObjects/arrayObjects";

function ServicesSection() {
  return (
    <section id="services" className="relative mt-20 border-b border-neutral-800 pb-28">
      
      <header className="text-center max-w-3xl mx-auto px-4">
        <span className="inline-block bg-blue-700/10 text-blue-500 px-3 py-1 rounded-full text-xs tracking-wider uppercase font-medium">
          Services
        </span>

        <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-wide">
          Let’s help you&nbsp;
          <span className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
            build <br className="hidden sm:block" />
            your product
          </span>
        </h2>
      </header>

      
      <div className="mt-10 grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {services.map(({ icon, text, description }, i) => (
          <article
            key={i}
            className="relative group animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 120}ms` }}>

           
            <div className="relative rounded-xl bg-neutral-900/60 backdrop-blur p-8 h-full border border-neutral-700/60 group-hover:-translate-y-1 group-hover:bg-gradient-to-r from-blue-900 to-blue-900 transition duration-300">
             
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700/10 text-blue-500 text-xl mb-5 group-hover:animate-card-glow">
                {icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">{text}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;