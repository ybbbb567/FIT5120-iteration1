import { Button, Img } from "components";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import React, { useState } from 'react';
import { Radio, Result } from 'antd';
import { getAllQuiz } from "api/quiz";
import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';


const handleReload = () => {
  window.location.reload();
};


const QuizPage = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([])
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  const startQuiz = () => {
    setShowQuiz(true);
    setShowStartButton(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const questionList = await getAllQuiz().then(res => res.result);
      if (questionList) {
        setQuestions(questionList);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Quiz - Trustify Online"
  }, []);


  useEffect(() => {
    if (questions) {
      setOptions(
        questions.map(question => [
          { label: question.optionA, value: 'A' },
          { label: question.optionB, value: 'B' },
          { label: question.optionC, value: 'C' },
          { label: question.optionD, value: 'D' },
        ]),
      );
    }
  }, [questions]);

  const handleAnswer = (e) => {
    const answer = e.target.value;
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      if (newAnswers.length <= currentQuestion) {
        newAnswers.length = currentQuestion + 1;
      }
      newAnswers[currentQuestion] = answer;
      return newAnswers;
    });

    const isAnswerCorrect = answer === questions[currentQuestion].answer;
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
    setAnswered(false);
    setShowExplanation(false);
    setIsCorrect(null);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        score += 1;
      }
    }
    return score;
  };

  if (showResult) {
    const score = calculateScore();
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="flex flex-col font-opensans items-center justify-start  ">
        <Navigationbar />
        <div className="font-pacifico h-full m-full mx-auto p-[129px] md:px-5 relative w-full">

          <div className="bg-purple  flex flex-col inset-x-[0] justify-start mx-auto pb-[37px] sm:pr-5 pr-[37px] top-[0] w-[81%]">
            {showResult && (
              <div className="quiz-result">
                <Result
                  status="success"
                  title={`You scored ${percentage}%`}
                  subTitle={`You answered ${score} out of ${totalQuestions} questions correctly.`}
                />
              </div>
            )}
            <div className="  mx-auto cursor-pointer font-bold font-montserrat leading-[normal]  py-5  text-center text-black text-xl tracking-[-0.30px] w-1/6">
              <TwitterShareButton
                url={'https://www.trustify.one/#/quiz'}
                hashtag="#web security"
                style={{ marginRight: '10px' }}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <FacebookShareButton
                url={'https://www.trustify.one/#/quiz'}
                hashtag="#web security"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <Button className="btn cta bg"
              onClick={handleReload}>
              Try again
            </Button>
          </div>
        </div>
        <Footer
          className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
          feedback="Feedback"
        />

      </div>
    );
  }
  return (
    <>
      <div className="navbar_color  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Navigationbar
          className="flex items-center justify-center md:px-[20px] w-[100%]"
          home="Home"
          picwishone="images/img_picwish2_125x227.png"
        />
        <div className="font-pacifico h-full  mx-auto p-[129px] md:px-5 relative w-full">
          <div className="bg-purple relative">

            <div className="h-[212px] w-full md:w-[29%] mx-auto relative ">
              <Img
                src="images/img_ellipse1.png"
                className="h-[210px] w-1/3 md:h-auto md:w-full mx-auto md:mx-0 absolute left-0 top-0"
                alt="ellipseOne"
              />
              <div className="absolute top-0 left-0 text-center w-full h-full flex items-center justify-center">
                <h2 className="font-normal text-gray_900 text-3xl md:text-4xl absolute left-8 top-15">
                  Online Trusty Quiz
                </h2>
              </div>
            </div>
            {showStartButton && (
              <div className="bg-purple container w-full h-auto max-w-full pb-8" style={{ textAlign: "center" }}>
                {/* <h3 className="text-3xl text-center font-bold text-blueGray" >Quiz</h3> */}
                <h3 className="text-xl text-white text-center font-bold py-8" >Let's test our knowledge by answering the following six quizzes.<br></br>
                  You will get an explanation of each question and a final score.</h3>
                <button
                  className="bg-white text-black py-2 px-4 rounded focus:outline-none"
                  onClick={startQuiz}
                >
                  Start Quiz
                </button>
              </div>
            )}
            {showQuiz && (
              <div className="bg-purple container w-full h-auto max-w-full">
                <div title={`Question ${currentQuestion + 1} of ${questions.length}`} className="mt-8">
                  <div className="text-white text-center">
                    <p className="col-span-2" style={{ fontSize: '24px' }}>{questions?.[currentQuestion]?.question}</p>
                    <Radio.Group onChange={handleAnswer} value={userAnswers[currentQuestion]}>
                      <div className="grid 	 grid-cols-2 gap-4 px-12 py-12 justify-items-start">
                        {options?.[currentQuestion]?.map((option, index) => (
                          <Radio key={option.value} value={option.value} disabled={answered} className="flex items-center justify-center">
                            <span className="mr-2 text-white" style={{ fontSize: '18px' }}>{`${String.fromCharCode(65 + index)}.`}</span>
                            {option.label.startsWith('http') ? <img src={option.label} alt="option" /> : <span className="text-white" style={{ fontSize: '18px' }}>{option.label}</span>}
                          </Radio>
                        ))}
                      </div>
                    </Radio.Group>
                  </div>
                </div>

                {showExplanation && (
                  <div className="text-center text-white py-12">
                    <p>{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
                    <p>Answer: {questions[currentQuestion].answer}</p>
                    <p>Explanation:<br></br> {questions[currentQuestion].explanation}</p>
                  </div>
                )}
                <div
                  className="bg-white_A700 flex h-24 items-center cursor-pointer justify-start md:ml-[0] ml-[1100px] mr-[11px] mt-[122px] pl-0.5 rounded-[50%] w-24"
                  style={{ opacity: answered ? 1 : 0, pointerEvents: answered ? 'auto' : 'none', bottom: '1rem', right: '7rem', position: 'relative' }}>
                  <Img onClick={handleNextQuestion}
                    src="images/img_arrowright.svg"
                    className="h-24 w-auto"
                    alt="arrowright"

                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer
        className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
        feedback="Feedback"
      />
    </>
  );
};


export default QuizPage;
