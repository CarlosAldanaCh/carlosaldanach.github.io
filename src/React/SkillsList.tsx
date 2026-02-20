import { useState } from "react";
import type { ReactElement } from "react";

const CategoryIcons: Record<string, ReactElement> = {
  "Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2a2 2 0 0 1 2 2v1.06a8 8 0 0 1 2.24.93l.75-.75a2 2 0 1 1 2.83 2.83l-.75.75A8 8 0 0 1 18.94 10H20a2 2 0 1 1 0 4h-1.06a8 8 0 0 1-.93 2.24l.75.75a2 2 0 1 1-2.83 2.83l-.75-.75A8 8 0 0 1 14 18.94V20a2 2 0 1 1-4 0v-1.06a8 8 0 0 1-2.24-.93l-.75.75a2 2 0 1 1-2.83-2.83l.75-.75A8 8 0 0 1 5.06 14H4a2 2 0 1 1 0-4h1.06a8 8 0 0 1 .93-2.24l-.75-.75A2 2 0 1 1 8.07 4.2l.75.75A8 8 0 0 1 10 5.06V4a2 2 0 0 1 2-2Zm0 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z" />
    </svg>
  ),

  "Analytics & EDA": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3h2v18H3V3Zm16 6h2v12h-2V9ZM7 13h2v8H7v-8Zm4-6h2v14h-2V7Zm4 3h2v11h-2V10Z" />
    </svg>
  ),

  "Data & SQL": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2c4.97 0 9 1.79 9 4v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V6c0-2.21 4.03-4 9-4Zm0 2c-4.08 0-7 .99-7 2s2.92 2 7 2s7-.99 7-2s-2.92-2-7-2Zm7 5.12C17.33 10.27 14.88 11 12 11s-5.33-.73-7-1.88V12c0 1.01 2.92 2 7 2s7-.99 7-2V9.12Zm0 6C17.33 16.27 14.88 17 12 17s-5.33-.73-7-1.88V18c0 1.01 2.92 2 7 2s7-.99 7-2v-2.88Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    "Machine Learning": [
      "End-to-end ML pipelines (prep → train → evaluate)",
      "Feature engineering + preprocessing (sklearn)",
      "Model evaluation with business-focused metrics",
      "Computer Vision basics (transfer learning: ResNet50)",
      "NLP basics (vectorization + classical models)",
    ],
    "Analytics & EDA": [
      "Exploratory Data Analysis (EDA) + data quality checks",
      "Hypothesis-driven analysis & clear takeaways",
      "Visualization for decision-making (clean, minimal)",
      "Communicating results as business-ready insights",
    ],
    "Data & SQL": [
      "SQL in PostgreSQL (joins, aggregations, windows basics)",
      "Data wrangling with Pandas/NumPy",
      "Reproducible projects + Git/GitHub workflow",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[260px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
