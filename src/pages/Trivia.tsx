import React, { useState } from 'react';

const triviaQuestions = [
  {
    question: "What's the tea with Hanuman's leap to Lanka? 🦸‍♂️",
    options: [
      "He just walked there",
      "Took a boat like everyone else",
      "Jumped 800 miles across the ocean",
      "Used Google Maps"
    ],
    correct: 2,
    fact: "Hanuman really said 'parkour' and jumped 800 miles across the ocean. No cap, that's like jumping from NYC to Chicago! 🤯"
  },
  {
    question: "Why was Ravana so extra with his heads? 👑",
    options: [
      "10 heads = 10x smarter",
      "It was a fashion statement",
      "He couldn't decide on one hairstyle",
      "Better selfie angles"
    ],
    correct: 0,
    fact: "Mans really had 10 heads and was a master of all subjects. Basically had Chrome with infinite tabs open in his brain 🧠"
  },
  {
    question: "What's the deal with the squirrel in Rama's bridge story? 🐿️",
    options: [
      "It was the project manager",
      "Helped by carrying tiny pebbles",
      "Was just there for moral support",
      "Filmed it for TikTok"
    ],
    correct: 1,
    fact: "This tiny squirrel was helping build the bridge to Lanka by carrying small stones. Rama blessed it, creating the three lines on squirrels' backs. Talk about employee recognition! 💅"
  }
];

const Trivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedIndex: number) => {
    if (!answered) {
      if (selectedIndex === triviaQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Spill the Ancient Tea ☕
        </h1>

        {!showResult ? (
          <div className="glass rounded-xl p-8">
            <div className="mb-8">
              <span className="text-purple-400">Question {currentQuestion + 1}/{triviaQuestions.length}</span>
              <h2 className="text-2xl font-bold mt-2">{triviaQuestions[currentQuestion].question}</h2>
            </div>

            <div className="space-y-4">
              {triviaQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    answered
                      ? index === triviaQuestions[currentQuestion].correct
                        ? 'bg-green-500/20 border-green-500'
                        : 'bg-red-500/20 border-red-500'
                      : 'glass hover:scale-105'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {answered && (
              <div className="mt-6">
                <p className="text-white/80 mb-4">{triviaQuestions[currentQuestion].fact}</p>
                <button
                  onClick={nextQuestion}
                  className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                >
                  {currentQuestion === triviaQuestions.length - 1 ? 'Show Results' : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="glass rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete! 🎉</h2>
            <p className="text-xl mb-6">You scored: {score}/{triviaQuestions.length}</p>
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trivia;