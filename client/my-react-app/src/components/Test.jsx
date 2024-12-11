import React, { useState } from "react";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which of these is a dry cooking method?",
      options: ["Boiling", "Steaming", "Grilling", "Poaching"],
    },
    {
      id: 2,
      question: "What is the primary ingredient in a roux?",
      options: ["Butter and flour", "Oil and water", "Milk and sugar", "Salt and pepper"],
    },
    {
      id: 3,
      question: "What temperature is considered the danger zone for food safety?",
      options: ["0-5°C", "60-100°C", "4-60°C", "100-150°C"],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option when moving to next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Reset selected option when moving to previous question
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Full-screen and centered */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full"> {/* Centered box */}
        <h2 className="text-2xl font-bold mb-6"> {/* Increased font size */}
          Q{questions[currentQuestion].id}. {questions[currentQuestion].question}
        </h2>
        <div className="space-y-4"> {/* Adjusted spacing */}
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block text-lg"> {/* Increased option text size */}
              <input
                type="radio"
                name={`question-${questions[currentQuestion].id}`}
                value={option}
                className="mr-3" // Adjusted spacing for the radio button
                onChange={() => handleOptionChange(option)}
                checked={selectedOption === option}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="flex justify-between mt-8"> {/* Increased margin for buttons */}
          <button
            onClick={handlePrevious}
            className={`px-6 py-3 rounded-lg bg-gray-300 text-gray-800 text-lg ${
              currentQuestion === 0 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`px-6 py-3 rounded-lg bg-teal-500 text-white text-lg ${
              currentQuestion === questions.length - 1 &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
