import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import Summry from "./Summry";
import Testend from "./TestEnd";
import { useSelector } from "react-redux";

const Questionary = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is your cast?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option A",
      selectedAnswer: "",
    },
    {
      question: "What is your color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Red",
      selectedAnswer: "",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const langState = useSelector((state) => state.user.lang);

  const handleAnswerClick = (answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selectedAnswer = answer;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleFinish = () => {
    window.location.pathname = "/app/endtest";
  };

  return (
    <div className="flex flex-col items-center justify-center text-slate-600 mt-16">
      <>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">
            {questions[currentQuestion].question}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`w-[368px] h-[52px] bg-white rounded-lg shadow borde m-2 p-5 flex items-center justify-start cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${
                questions[currentQuestion].selectedAnswer === option
                  ? "bg-blue-300" // Highlight selected answer
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className={`py-2 px-4 mr-4 bg-slate-700 text-white rounded-lg ${
              currentQuestion === 0 && "opacity-50 cursor-not-allowed"
            }`}
          >
            {langState === "en" ? "Back" : "Zurück"}
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className={`py-2 px-4 mr-4 bg-slate-700 text-white rounded-lg`}
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              disabled={!questions[currentQuestion].selectedAnswer}
              className={`py-2 px-4 bg-slate-700 text-white rounded-lg ${
                !questions[currentQuestion].selectedAnswer &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              {langState === "en" ? "Next" : "Nächster"}
            </button>
          )}
        </div>
      </>
      {currentQuestion === questions.length && (
        <div>
          <Testend />
        </div>
      )}
    </div>
  );
};

export default Questionary;
