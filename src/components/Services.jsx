import React, { useState } from "react";
import { SERVICES } from "../constants";

function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);

  return (
    <section className="bg-stone-50 text-emerald-950" id="services">
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Services
        </h2>

        {/* Tabs */}
        <div className="flex items-center justify-center flex-wrap space-x-4">
          {SERVICES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold tracking-tighter transition-colors lg:text-2xl ${
                activeTab.id === tab.id
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-emerald-950 hover:text-orange-500"
              }`}
             
            >
              {tab.title}
            </button>
        ))}
       </div>
       <div key={activeTab.id} className="mt-8 flex flex-col items-center lg:flex-row">
          <div className="p-4 lg:w-1/2">
             <h2 className="mb-4 text-3xl lg:text-4xl">{activeTab.content}</h2>
             <p className="text-lg tracking-tighter text-emerald-950 lg:text-2xl">
                {activeTab.description}
             </p>
          </div>
          <div className="p-4 lg:w-1/2">
            <img src={activeTab.imgSrc} alt={activeTab.title} 
            className="h-auto w-full rounded-lg" />
          </div>
       </div>
       </div>
    </section>
  )
}

export default Services
