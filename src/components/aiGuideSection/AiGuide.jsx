"use client";

import { useState } from "react";
import { Sparkles, Cpu } from "lucide-react";

const questions = [
  {
    type: "text",
    question: "Hello! I'm your AI travel companion. What should I call you?",
    key: "name",
    placeholder: "Enter your name",
  },
  {
    type: "text",
    question: "Nice to meet you! Where would you like to explore?",
    key: "destination",
    placeholder: "e.g. Lahore",
  },
  {
    type: "group",
    question: "Who's joining you on this adventure?",
    key: "groupType",
    options: ["Solo", "Couple", "Family", "Friends"],
  },
  {
    type: "budget",
    question: "What's your travel budget style?",
    key: "budget",
  },
  {
    type: "experience",
    question: "What kind of experiences excite you most?",
    key: "experience",
    options: [
      "Culture & History",
      "Food & Dining",
      "Adventure",
      "Art & Museums",
      "Shopping",
      "Photography",
    ],
  },
];

export default function AiGuide() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[step];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log("FINAL DATA:", answers);
      // You can redirect or send to backend here
    }
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  const isNextDisabled = () => {
    if (current.type === "text") {
      return !answers[current.key];
    }

    if (current.type === "group") {
      if (!answers.groupType) return true;
      if (
        (answers.groupType === "Family" || answers.groupType === "Friends") &&
        !answers.people
      )
        return true;
    }

    if (current.type === "budget") {
      if (!answers.budget && !answers.customBudget) return true;
    }

    if (current.type === "experience") {
      return !answers.experience;
    }

    return false;
  };

  return (
    <div className="min-h-screen bg-lightblue flex flex-col items-center justify-center px-4 py-10">
      {/* HEADER */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Your <span className="text-primary">AI Travel</span> Companion
      </h1>

      <p className="text-gray-600 mt-3 text-center max-w-xl text-sm sm:text-base px-2">
        Discover amazing destinations, plan perfect trips, and get personalized
        recommendations powered by artificial intelligence.
      </p>

      {/* AI ICON + PROGRESS */}
      <div className="flex flex-col items-center mt-6 sm:mt-8">
        <div className="bg-secondary p-4 sm:p-5 rounded-full">
          <Cpu className="text-primary" size={26} />
        </div>

        <div className="flex gap-2 mt-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-4 sm:w-6 rounded-full transition-all duration-300 ${
                index <= step ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-5 sm:p-8 mt-8 sm:mt-10">
        {/* QUESTION */}
        <div className="flex items-start gap-3 mb-6">
          <div className="bg-pink-100 p-2 rounded-full">
            <Sparkles className="text-primary" size={16} />
          </div>

          <div className="bg-gray-100 px-3 sm:px-4 py-3 rounded-lg w-full">
            <p className="text-gray-700 text-xs sm:text-sm">
              {current.question}
            </p>
          </div>
        </div>

        {/* TEXT INPUT */}
        {current.type === "text" && (
          <input
            type="text"
            value={answers[current.key] || ""}
            onChange={(e) =>
              setAnswers({ ...answers, [current.key]: e.target.value })
            }
            placeholder={current.placeholder}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
          />
        )}

        {/* GROUP */}
        {current.type === "group" && (
          <>
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              {current.options.map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, groupType: option })}
                  className={`px-4 sm:px-6 py-2 rounded-lg border text-sm sm:text-base transition ${
                    answers.groupType === option
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {(answers.groupType === "Family" ||
              answers.groupType === "Friends") && (
              <input
                type="number"
                placeholder="How many people?"
                value={answers.people || ""}
                className="mt-4 w-full bg-gray-100 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                onChange={(e) =>
                  setAnswers({ ...answers, people: e.target.value })
                }
              />
            )}
          </>
        )}

        {/* BUDGET */}
        {current.type === "budget" && (
          <>
            <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              {["Under PKR 1000", "PKR 5000", "PKR 10000+"].map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, budget: option })}
                  className={`px-4 sm:px-6 py-2 rounded-lg border text-sm sm:text-base transition ${
                    answers.budget === option
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Or enter your custom budget (PKR)"
              value={answers.customBudget || ""}
              className="mt-4 w-full bg-gray-100 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  customBudget: e.target.value,
                })
              }
            />
          </>
        )}

        {/* EXPERIENCE */}
        {current.type === "experience" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
            {current.options.map((option) => (
              <button
                key={option}
                onClick={() => setAnswers({ ...answers, experience: option })}
                className={`p-2 sm:p-3 rounded-lg border text-xs sm:text-sm transition ${
                  answers.experience === option
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className={`text-primary font-medium text-sm sm:text-base ${
              step === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className={`w-full sm:w-auto px-6 py-2 rounded-lg shadow-md text-sm sm:text-base transition ${
              isNextDisabled()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-pink-500 text-white"
            }`}
          >
            {step === questions.length - 1 ? "Start Exploring ✨" : "Next ✨"}
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-grayish mt-8 text-center">
        <span>
          <span className="text-primary text-lg">•</span> Secure & Private
        </span>
        <span>✨ AI-Powered</span>
      </div>
    </div>
  );
}
