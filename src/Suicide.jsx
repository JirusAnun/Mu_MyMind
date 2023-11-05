import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Suicide.css';

const Question = ({ text, handleAnswer, selectedOption, choices }) => {
    const handleChange = (event) => {
        handleAnswer(event.target.value);
    };

    return (
        <div>
            <p className='questionText'>{text}</p>
            {choices.map(choice => (
                <label key={choice} className="radioChoice">
                    <input type="radio" name="suicideQuestion" value={choice} checked={selectedOption === choice} onChange={handleChange} />
                    {choice}
                </label>
            ))}
        </div>
    );
};

const Suicide = () => {
    const [quizStarted, setQuizStarted] = useState(false);

    const questions = [
        'คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า',
        'อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ',
        'คิดเกี่ยวกับการฆ่าตัวตาย (ถ้าตอบว่าคิดเกี่ยวกับการฆ่าตัวตาย ให้ถามต่อ) ท่านสามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่ หรือ บอกไหมว่าคงจะไม่ทำตามความคิดนั้นในขณะนี้',
        'มีแผนการที่จะฆ่าตัวตาย',
        'ได้เตรียมการที่จะทำร้ายตนเอง หรือ เตรียมการจะฆ่าตัวตาย โดยตั้งใจว่าจะให้ตายจริง ๆ',
        'ได้ทำให้ตนเองบาดเจ็บ แต่ไม่ตั้งใจที่จะทำให้เสียชีวิต',
        'ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย',
        'ท่านเคยพยายามฆ่าตัวตาย',
    ];
    const choices = [
        ['ไม่ใข่', 'ใช่'],
        ['ไม่ใข่', 'ใช่'],
        ['ได้', 'ไม่ได้'],
        ['ไม่ใข่', 'ใช่'],
        ['ไม่ใข่', 'ใช่'],
        ['ไม่ใข่', 'ใช่'],
        ['ไม่ใข่', 'ใช่'],
        ['ไม่ใข่', 'ใช่']
    ];
    const scores = [1, 2, 6, 8, 8, 9, 4, 10, 4]; // Scores for each question
    const [answers, setAnswers] = useState(Array(questions.length).fill('ไม่ยินดี'));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleStartQuiz = () => {
      setQuizStarted(true);
  };

    const handleAnswer = (choice) => {
        setAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestion] = choice;
            return newAnswers;
        });
        if (choice === choices[currentQuestion][1]) {
            setScore(prevScore => prevScore + scores[currentQuestion]);
        }
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    if (!quizStarted) {
      return (
          <div>
              <p className='questionText'>
              แบบประเมินความเสี่ยงต่อการฆ่าตัวตาย
              </p>
              <br/><br/><br/>
              <div className="button-container">
                <button className="btn btn-4" onClick={handleStartQuiz}>เริ่มต้นทำแบบประเมิน</button>
              </div>
          </div>
      );
    }

    if (currentQuestion < questions.length) {
        return (
            <div>
                <p>Your score: {score}</p>
                <Question text={questions[currentQuestion]} handleAnswer={handleAnswer} selectedOption={answers[currentQuestion]} choices={choices[currentQuestion]} />
            </div>
        );
    } else {
        if (score === 0) {
            return(
                <div>
                  <p className='resultText-1'>คุณไม่มีแนวโน้มฆ่าตัวตาย</p>
                  <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
                  <img src="./src/assets/1x/Asset 1.png" alt="Asset1" width="200" height="220" />
                  <div className="button-container">
                  <br/><br/><br/><br/><br/><br/><br/>
                  <Link to="/" className='linkAlone'>
                    <button className="btn btn-4">รับทราบ</button>
                  </Link>
                  </div>
                </div>
              );
        } else if (score < 9) {
            return(
                <div>
                  <p className='resultText-2'>คุณมีแนวโน้มฆ่าตัวตายเล็กน้อย</p>
                  <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
                  <img src="./src/assets/1x/Asset 3.png" alt="Asset1" width="200" height="220" />
                  <div className="button-container">
                  <br/><br/><br/><br/><br/><br/><br/>
                  <Link to="/" className='linkAlone'>
                    <button className="btn btn-4">รับทราบ</button>
                  </Link>
                  </div>
                </div>
              );
        } else if (score < 17) {
            return(
                <div>
                  <p className='resultText-3'>คุณมีแนวโน้มฆ่าตัวตายระดับปานกลาง</p>
                  <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
                  <img src="./src/assets/1x/Asset 4.png" alt="Asset1" width="200" height="220" />
                  <div className="button-container">
                  <br/><br/><br/><br/><br/><br/><br/>
                  <Link to="/" className='linkAlone'>
                    <button className="btn btn-4">รับทราบ</button>
                  </Link>
                  </div>
                </div>
              );
        } else {
            return(
                <div>
                  <p className='resultText-4'>คุณมีแนวโน้มฆ่าตัวตายรุนแรง</p>
                  <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
                  <img src="./src/assets/1x/Asset 5.png" alt="Asset1" width="200" height="220" />
                  <div className="button-container">
                  <br/><br/><br/><br/><br/><br/><br/>
                  <Link to="/" className='linkAlone'>
                    <button className="btn btn-4">รับทราบ</button>
                  </Link>
                  </div>
                </div>
              );
        }
    }
};

export default Suicide;