import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import axios from "axios";
import QuizStart from "./QuizStart";
import Summry from "./Summry";
import { useSelector } from "react-redux";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showStartPopup, setShowStartPopup] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [avgTimePerQuestion, setAvgTimePerQuestion] = useState(0);
  const langState = useSelector(state => state.user.lang)
  let timerInterval;
  useEffect(() => {
    axios
      .get("https://mern-back-1jic.onrender.com/api/quiz")
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  useEffect(() => {
    let timerInterval;

    if (!showStartPopup) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [showStartPopup]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizzes[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === quizzes.length - 1) {
      clearInterval(timerInterval); // Stop the timer
      // Calculate and update the average time per question
      setAvgTimePerQuestion((timer / quizzes.length).toFixed(2));
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const calculateAccuracy = () => {
    return 20 > 0 ? ((score / 20) * 100).toFixed(2) : 0;
  };

  const calculateAvgTimePerQuestion = () => {
    return 20 > 0 ? (timer / 20).toFixed(2) : 0;
  };

  return (
    <div className="flex flex-col items-center justify-center text-slate-600">
      {showStartPopup && (
        <QuizStart onStartQuiz={() => setShowStartPopup(false)} />
      )}
      {quizzes.length > 0 &&
      currentQuestion < quizzes.length &&
      !showStartPopup ? (
        <>
          <div className="w-full p-4 flex justify-between">
            <div className="text-xl font-normal text-slate-600">
              {langState === "en" ? "Question" : "Frage"}
              <br /> {currentQuestion + 1}/20
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-slate-600 opacity-50 w-[29px] h-[29px] relative" />
              <span className="text-slate-700 text-base font-normal font-Lato">
                {formatTime(timer)}
              </span>
            </div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">
              {quizzes[currentQuestion].question}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center">
            {quizzes[currentQuestion].options.map((option, index) => (
              <React.Fragment key={index}>
                <div
                  className="w-[368px] h-[52px] bg-white rounded-lg shadow borde m-2 p-5 flex items-center justify-start cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200"
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </div>
                {index % 2 !== 0 && <div className="w-full"></div>}{" "}
                {/* Add a line break after every 2 options */}
              </React.Fragment>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`py-2 px-4 w-[574px] h-12 bg-slate-700 text-white rounded-lg ${
                !selectedAnswer && "opacity-50 cursor-not-allowed"
              }`}
            >
              {langState === "en" ? "Submit" : "Einreichen"}
            </button>
          </div>
        </>
      ) : (
        !showStartPopup && (
          <div>
          <Summry score={score} Accuracy={calculateAccuracy()} Avg={avgTimePerQuestion} />
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
