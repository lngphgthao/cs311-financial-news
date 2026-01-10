import React from "react";

const Content = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
        {/* Main article */}
        <article className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Introduction
            </h2>
            <p className="leading-relaxed">
              Artificial Intelligence (AI) has emerged as a transformative force
              in the healthcare industry, reshaping patient care, diagnostics,
              and research.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Artificial Intelligence (AI)
            </h2>
            <p className="leading-relaxed">
              AI is integrated into medical practice, from diagnostic imaging to
              personalized treatment plans, enhancing efficiency and outcomes.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Predictive Analytics and Disease Prevention
            </h2>
            <p className="leading-relaxed">
              Predictive models help identify diseases early, enabling proactive
              and preventive healthcare.
            </p>
          </div>
          <button className="rounded-md border border-gray-600 px-4 py-2 hover:bg-gray-800">
            Read Full Blog →
          </button>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 rounded-xl bg-[#141414] p-6">
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400">Publication Date:</span> Oct 15,
              2023
            </p>
            <p>
              <span className="text-gray-400">Category:</span> Healthcare
            </p>
            <p>
              <span className="text-gray-400">Reading Time:</span> 10 min
            </p>
            <p>
              <span className="text-gray-400">Author:</span> Dr. Emily Walker
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Table of Contents</h3>
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li>Introduction</li>
              <li>AI in Diagnostic Imaging</li>
              <li>Predictive Analytics</li>
              <li>Personalized Treatment</li>
              <li>Ethical Considerations</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Content;
