import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import BoardScreen from './components/BoardScreen';
import HomeScreen from './components/HomeScreen';
import { questions } from './data/questions';

function App() {
  const [screen, setScreen] = useState('home'); // 'home', 'start', 'quiz', 'result', 'board'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStartTest = () => {
    setScreen('start');
  };

  const handleStartQuiz = () => {
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (value) => {
    // If answer already exists for this index (e.g. went back then forward), overwrite it
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = { questionId: questions[currentQuestionIndex].id, value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('result');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setScreen('start');
    }
  };

  const handleRestart = () => {
    setScreen('home'); // Go back to Home on restart
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleViewAllColumns = () => {
    setScreen('board');
  };

  const handleBackToResult = () => {
    // If coming from result, go back to result. But if from Home -> Board, maybe Home? 
    // Simplified: Board "Back" button behavior depends on context, but requested flow implies navigation from Result -> Board. 
    // If "Board" is accessed from Home, Back should go Home. 
    // We can check history or just use a simple check.
    // For now, let's keep it simple: If we are in 'board', we can go back to 'home' if we came from home?
    // Let's pass a prop or just default to 'home' if no result.
    // However, the current BoardScreen back button logic was 'handleBackToResult' (setScreen('result')).
    // We need to differentiate. 
    // Let's default to Home for now if we didn't come from Result? 
    // Actually, let's just make the "Back" button in Board go to Home if accessed from Home.
    // But `handleBackToResult` is hardcoded. Let's make it generic `handleBoardBack`.

    // Quick fix: If answers exist, go result (likely finished test). Else Home.
    if (answers.length > 0) {
      setScreen('result');
    } else {
      setScreen('home');
    }
  };

  return (
    <>
      {screen === 'home' && (
        <HomeScreen
          onStartTest={handleStartTest}
          onViewColumns={handleViewAllColumns}
        />
      )}
      {screen === 'start' && <StartScreen onStart={handleStartQuiz} />}
      {screen === 'quiz' && (
        <QuizScreen
          currentQuestionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          answers={answers}
          onRestart={handleRestart}
          onViewAll={handleViewAllColumns}
        />
      )}
      {screen === 'board' && (
        <BoardScreen onBack={handleBackToResult} />
      )}
    </>
  );
}

export default App;
