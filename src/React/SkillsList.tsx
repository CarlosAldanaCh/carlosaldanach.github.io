import React, { useState } from "react";

const CategoryIcons: Record<string, JSX.Element> = {
  "ML Modeling (Tabular)": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3h18v2H3V3zm2 6h3v10H5V9zm5 4h3v6h-3v-6zm5-6h3v12h-3V7zm5 8h1v4h-1v-4z" />
    </svg>
  ),

  "NLP (Text & Transformers)": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M20 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3v3l4-3h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM4 4h16v13H10.3L9 18v-1H4V4Zm3 3h10v2H7V7Zm0 4h7v2H7v-2Z" />
    </svg>
  ),

  "Computer Vision (CV)": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M9 4a2 2 0 0 0-2 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2-2H9Zm3 6a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 17.8a2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  ),

  "Data & SQL": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C7.03 2 3 3.79 3 6v12c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4Zm0 2c4.42 0 7 .99 7 2s-2.58 2-7 2-7-.99-7-2 2.58-2 7-2Zm0 16c-4.42 0-7-.99-7-2v-2.18C6.48 17.03 9.11 18 12 18s5.52-.97 7-2.18V18c0 1.01-2.58 2-7 2Zm0-6c-4.42 0-7-.99-7-2V9.82C6.48 11.03 9.11 12 12 12s5.52-.97 7-2.18V12c0 1.01-2.58 2-7 2Z" />
    </svg>
  ),

  "Delivery (Production-minded)": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2l4 8h6l-5 4 2 8-7-5-7 5 2-8-5-4h6l4-8z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>("ML Modeling (Tabular)");

  const skills: Record<string, string[]> = {
    "ML Modeling (Tabular)": [
      "Data cleaning + EDA (outliers, nulls, leakage checks)",
      "Feature engineering + preprocessing pipelines (scikit-learn)",
      "Model selection & tuning (CV, GridSearch, thresholding when needed)",
      "Tree-based models: Random Forest, Gradient Boosting (LightGBM/CatBoost)",
      "Metrics-driven evaluation (RMSE / MAE / sMAPE / F1 / AUC-ROC)",
    ],

    "NLP (Text & Transformers)": [
      "TF-IDF baselines (LogReg / LinearSVC) with solid validation",
      "Fine-tuning Transformers (BERT) using PyTorch + Hugging Face",
      "Error analysis: confusion matrix, precision/recall trade-offs",
      "Stress tests with tricky inputs (negation, mixed sentiment, sarcasm)",
    ],

    "Computer Vision (CV)": [
      "Transfer learning with ResNet50 (TensorFlow/Keras)",
      "Image preprocessing + augmentation strategies",
      "Reproducible training pipeline + clear evaluation (e.g., MAE)",
      "Focus on practical delivery: stable training and readable results",
    ],

    "Data & SQL": [
      "PostgreSQL querying (joins, aggregations, filtering, window basics)",
      "Data shaping for modeling (clean splits, consistent schemas)",
      "Project structure & reproducibility (requirements, environment hygiene)",
    ],

    "Delivery (Production-minded)": [
      "Latency vs quality trade-offs (inference speed matters)",
      "Saving models & artifacts (joblib / checkpoints) + clean handoff",
      "Readable reporting: what worked, why it worked, what to improve next",
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
                {CategoryIcons[category] ?? (
                  <span className="w-6 h-6 inline-block rounded-full bg-[var(--sec)] opacity-40" />
                )}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[240px] md:max-w-none overflow-hidden">
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
                    ? "max-h-[520px] pb-4 opacity-100"
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
