import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dass21.css';

const stressQuestions = [1, 6, 8, 11, 12, 14, 18];
const anxietyQuestions = [2, 4, 7, 9, 15, 19, 20];
const depressionQuestions = [3, 5, 10, 13, 16, 17, 21];


const Question = ({ text, handleAnswer, selectedOption }) => {
  const handleChange = (event) => {
    handleAnswer(Number(event.target.value));
  };

  return (
    <div>
      <p className='questionText'>{text}</p>
      {[0, 1, 2, 3, 4].map(choice => (
        <label key={choice} className={selectedOption === choice ? 'selected' : ''}>
          <input type="radio" value={choice} checked={selectedOption === choice} onChange={handleChange} />
          {choice}
        </label>
      ))}
    </div>
  );
};


const Score = ({ score }) => {
  if (score < 5) {
    return(
      <div>
        <p className='resultText-1'>คุณมีสุขภาพจิตดี!</p>
        <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/Asset%201.png?raw=true" alt="Asset1" width="200" height="220" />
        <p className='resultDes'>
        น้องเป็นผู้ที่มีสุขภาพจิตดีนะคะ อย่างไรก็ตาม ในอนาคตอาจจะมีเหตุการณ์เข้ามาในชีวิตที่ทำให้น้องเครียดได้ {'\n'}ดังนั้นเพื่อป้องกันปัญหาที่อาจจะเกิดขึ้นได้ในอนาคต {'\n'}ขอให้น้องๆมาเรียนรู้วิธีการและฝึกฝนเพื่อพัฒนาความเข้มแข็งทางจิตใจจากโปรแกรมส่งเสริมสุขภาพใจ {'\n'}ใน App นี้นะคะ</p>
        <div className="button-container">
          <Link to="/home" className='linkAlone'>
            <button className="btn btn-4">รับทราบ</button>
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
  else if (score < 7) {
    return(
      <div>
        <p className='resultText-2'>คุณมีอาการซึมเศร้าเล็กน้อย</p>
        <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/Asset%202.png?raw=true" alt="Asset2" width="200" height="220" />
        <p className='resultDes'>
        น้องเป็นผู้ที่เริ่มมีอารมณ์เศร้าเล็กน้อย {'\n'}ซึ่งคนทั่วไปก็สามารถมีอารมณ์เช่นนี้ได้ {'\n'}อย่างไรก็ตามหากต้องการหายจากอารมณ์เศร้านี้ {'\n'}ให้น้องเรียนรู้วิธีการจาก{'\n'}โปรแกรมส่งเสริมสุขภาพใจกันนะคะ</p>
        <p className='resultScore'>สายด่วนกรมสุขภาพจิต โทร: 1323</p>
        <div className="button-container">
          <Link to="/home" className='linkAlone'>
            <button className="btn btn-4">รับทราบ</button>
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
  else if (score < 11) {
    return(
      <div>
        <p className='resultText-3'>คุณมีอาการซึมเศร้าปานกลาง</p>
        <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/Asset%203.png?raw=true" alt="Asset3" width="200" height="220" />
        <p className='resultDes'>
        น้องเป็นผู้มีที่มีสภาวะอารมณ์ซึมเศร้าปานกลาง ไม่ต้องตกใจไปนะคะ เราสามารถช่วยให้สภาวะอารมณ์ของน้องกลับคืนสู่ภาวะปกติได้ เชิญน้องมาเรียนรู้จากโปรแกรมส่งเสริมสุขภาพใจ เพื่อการมีสุขภาพจิตที่ดีกันนะคะ</p>
        <p className='resultScore'>สายด่วนกรมสุขภาพจิต โทร: 1323</p>
        <div className="button-container">
          <Link to="/home" className='linkAlone'>
          <button className="btn btn-4">รับทราบ</button>
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
  else if (score < 14) {
    return(
      <div>
        <p className='resultText-4'>คุณมีอาการซึมเศร้าค่อนข้างมาก</p>
        <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/Asset%204.png?raw=true" alt="Asset4" width="200" height="220" />
        <p className='resultDes'>น้องมีสภาวะอารมณ์ซึมเศร้าค่อนข้างมาก ชึ่งสามารถเกิดขึ้นได้และสามารถกลับสู่สภาวะอารมณ์ปกติได้ อย่าเพิ่งต้องตกใจไปค่ะ น้องสามารถกลับคืนสู่การมีสุขภาพจิตที่ดีขึ้นได้โดยเร็วจากการทำ 2 อย่าง ดังนี้นะคะ 
        {'\n'}1) เข้าไปเรียนรู้จากโปรแกรมส่งเสริมสุขภาพใจ
        {'\n'}2) ปรึกษาผู้เชี่ยวชาญเพื่อให้การช่วยเหลือ ซึ่งพี่จะมีชื่อและเบอร์โทรให้แก่น้องในลำดับถัดไปค่ะ 
        หรือ ถ้าน้องต้องการให้ผู้เชี่ยวชาญของเราติดต่อกลับ เพื่อพูดคุยให้การช่วยเหลือให้น้องมีสุขภาพจิตที่ดีขึ้นโดยเร็ว {'\n'}พี่จะรีบติดต่อน้องนะคะ</p>
        <p className='resultScore'>สายด่วนกรมสุขภาพจิต โทร: 1323</p>
        <div className="button-container">
          <Link to="/Suicide" className='linkAlone'>
            <button className="btn btn-2">ไม่ยินดี</button>
          </Link>
          <Link to="/Suicide" className='linkAlone'>
            <button className="btn btn-4">ยินดี</button>
          </Link>
        </div>
        <br/><br/><br/><br/>
      </div>
    );
  }
  else{
    return(
      <div>
        <p className='resultText-5'>คุณมีอาการซึมเศร้าสูงมาก</p>
        <p className='resultScore'>คะแนนของคุณคือ : {score}</p>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/Asset%205.png?raw=true" alt="Asset5" width="200" height="220" />
        <p className='resultDes'>น้องมีสภาวะอารมณ์ซึมเศร้าในระดับสูงมาก น้องกำลังต้องการการช่วยเหลือใช่ไหม๊คะ พี่สามารถช่วยเหลือน้องได้ค่ะ พี่มีผู้เชี่ยวชาญในการให้การช่วยเหลือพูดคุยให้การปรึกษากับน้องๆ  มีข้อมูลแหล่งช่วยเหลือต่างๆ {'\n'}ขอให้น้องติดต่อขอความช่วยเหลือได้เลยนะคะ หรือถ้าน้องต้องการให้ผู้เชี่ยวชาญของเราติดต่อกลับ เพื่อพูดคุยให้การปรึกษาให้น้องมีสุขภาพจิตดีขึ้นโดยเร็ว พี่ก็จะยินดีมากค่ะ  และขอเชิญชวนให้น้องเข้าไปเรียนรู้จากโปรแกรมส่งเสริมสุขภาพใจ
          เพื่อให้น้องกลับคืนสู่การมีสุขภาพจิตที่ดีโดยเร็วนะคะ</p>
        <p className='resultScore'>สายด่วนกรมสุขภาพจิต โทร: 1323</p>
        <div className="button-container">
          <Link to="/Suicide" className='linkAlone'>
          <button className="btn btn-2">ไม่ยินดี</button>
          </Link>
          <Link to="/Suicide" className='linkAlone'>
            <button className="btn btn-4">ยินดี</button>
          </Link>
        </div>
        <br/><br/><br/><br/>
      </div>
    );
  }
};

const Dass21 = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    'ฉันรู้สึกยากที่จะสงบจิตใจลง',
    'ฉันรู้สึกปากแห้งคอแห้ง',
    'ฉันแทบไม่รู้สึกอะไรดีๆ เลย',
    'ฉันมีอาการหายใจผิดปกติ (เช่น หายใจเร็วเกินเหตุ หายใจไม่ทันแม้ว่าจะไม่ได้ออกแรง)',
    'ฉันพบว่ามันยากที่จะคิดริเริ่มทำสิ่งใดสิ่งหนึ่ง',
    'ฉันมีแนวโน้มที่จะตอบสนองเกินเหตุต่อสถานการณ์',
    'ฉันรู้สึกว่าร่างกายบางส่วนสั่นผิดปกติ (เช่น มือสั่น)',
    'ฉันรู้สึกเสียพลังงานไปมากกับการวิตกกังวล',
    'ฉันรู้สึกกังวลกับเหตุการณ์ที่อาจทำให้ฉันรู้สึกตื่นกลัวและกระทำบางสิ่งที่น่าอับอาย',
    'ฉันรู้สึกไม่มีเป้าหมายในชีวิต',
    'ฉันรู้สึกกระวนกระวายใจ',
    'ฉันรู้สึกอยากที่จะผ่อนคลายตัวเอง',
    'ฉันรู้สึกจิตใจเหงาหงอยเศร้าซึม',
    'ฉันรู้สึกทนไม่ได้เวลามีอะไรมาขัดขวางสิ่งที่ฉันกำลังทำอยู่',
    'ฉันรู้สึกคล้ายจะมีอาการตื่นตระหนก',
    'ฉันรู้สึกไม่มีความกระตือรือร้นต่อสิ่งใด',
    'ฉันรู้สึกเป็นคนไม่มีคุณค่า',
    'ฉันรู้สึกค่อนข้างฉุนเฉียวง่าย',
    'ฉันรับรู้ถึงการทำงานของหัวใจแม้ในตอนที่ฉันไม่ได้ออกแรง (เช่น รู้สึกว่าหัวใจเต้นเร็วขึ้นหรือเต้นไม่เป็นจังหวะ)',
    'ฉันรู้สึกกลัวโดยไม่มีเหตุผล',
    'ฉันรู้สึกว่าชีวิตไม่มีความหมาย ',
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (choice) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = choice;
      return newAnswers;
    });
  };

  const calculateScores = () => {
    let stressScore = 0;
    let anxietyScore = 0;
    let depressionScore = 0;

    for (let i = 0; i < answers.length; i++) {
      if (stressQuestions.includes(i + 1)) {
        stressScore += answers[i];
      } else if (anxietyQuestions.includes(i + 1)) {
        anxietyScore += answers[i];
      } else if (depressionQuestions.includes(i + 1)) {
        depressionScore += answers[i];
      }
    }

    const sum = stressScore + anxietyScore + depressionScore;

    return { sum, stressScore, anxietyScore, depressionScore };
  };

  const submitScore = () => {
    const scores = calculateScores();
    setSubmitted(true);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
};

  const sum = answers.reduce((a, b) => a + b, 0);

  if (!quizStarted) {
    return (
        <div>
            <p className='questionText'>
                ก่อนเริ่มทำแบบประเมิน{'\n'}ขอให้น้องๆอ่านคำชี้แจงด้านล่างนี้ก่อน
                {'\n'}โดยภายในการประเมินนี้
            </p>
            <p className='ruleTextDass'>
                0 คือ ไม่ตรงกับฉันเลย
                {'\n'}1 คือ ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง
                {'\n'}2 คือ ตรงกับฉัน หรือเกิดขึ้นบ่อย
                {'\n'}3 คือ ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด
            </p>
            <div className="button-container">
              <button className="btn btn-4" onClick={handleStartQuiz}>เริ่มต้นทำแบบประเมิน</button>
            </div>
        </div>
    );
  }

  const scores = calculateScores();

  if (submitted) {
    return <Score score={scores.depressionScore} />;
  }

  return (
    <div className='container'>
      <Question 
        key={currentQuestion} 
        text={questions[currentQuestion]} 
        handleAnswer={handleAnswer} 
        selectedOption={answers[currentQuestion]} 
      />
      
      <div className="button-container">
        {currentQuestion > 0 && <button className="btn btn-2" onClick={() => setCurrentQuestion(currentQuestion - 1)}>ย้อนกลับ</button>}
        {currentQuestion < questions.length - 1 && <button className="btn btn-4" onClick={() => setCurrentQuestion(currentQuestion + 1)}>ต่อไป</button>}
        {currentQuestion === questions.length - 1 && <button className="btn btn-4" onClick={submitScore}>ส่ง</button>}
      </div>
      {/* <p>Sum: {scores.sum}</p>
      <p>depressionScore: {scores.depressionScore}</p>
      <p>anxietyScore: {scores.anxietyScore}</p>
      <p>stressScore: {scores.stressScore}</p> */}
    </div>
  );
}

export default Dass21;