import { useState } from 'react';
import { Link } from 'react-router-dom';
import './WellBeing.css';

const Question = ({ text, handleAnswer, selectedOption }) => {
  const handleChange = (event) => {
    handleAnswer(Number(event.target.value));
  };

  return (
    <div>
      <p className='questionText'>{text}</p>
      {[0, 1, 2, 3, 4, 5, 6].map(choice => (
        <label key={choice} className={selectedOption === choice ? 'selected' : ''}>
          <input type="radio" value={choice} checked={selectedOption === choice} onChange={handleChange} />
          {choice}
        </label>
      ))}
    </div>
  );
};

const Score = ({ score }) => {
    return(
      <div>
        <p className='resultText-1'>คะแนนของคุณคือ : {score}</p>
        <div className="button-container">
          <Link to="/" className='linkAlone'>
            <button className="btn btn-4">รับทราบ</button>
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
    );
};

const WellBeing = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    'บุคคลอื่นมีอิทธิพลต่อความคิดของฉันเป็นอย่างมาก',
    'โดยทั่วไปแล้ว ฉันคิดว่าฉันสามารถจัดการกับสถานการณ์ที่ฉันประสบอยู่ได้',
    'ฉันคิดว่าประสบการณ์ใหม่ ๆ เป็นสิ่งสำคัญที่ท้าทายในการมองตนเองและการมองโลก',
    'การรักษาสัมพันธภาพกับผู้อื่นให้แนบแน่นเป็นความยากลำบากและอึดอัดสำหรับฉัน',
    'ฉันใช้ชีวิตไปวัน ๆ และไม่คิดอะไรเกี่ยวกับอนาคตเลย',
    'เมื่อฉันมองดูเรื่องราวในชีวิตของฉัน ฉันพอใจกับสิ่งที่เกิดขึ้นมา ',
    'ฉันเชื่อมั่นในความคิดเห็นของฉัน ถึงแม้ว่ามันจะขัดแย้งกับความคิดเห็นของคนในสังคม',
    'บ่อยครั้งการทำบทบาทหน้าที่ในชีวิตทำให้ฉันรู้สึกแย่',
    'สำหรับฉัน ชีวิตคือกระบวนการเรียนรู้ การเปลี่ยนแปลง และการเติบโตอย่างต่อเนื่อง',
    'บุคคลอื่นมองว่าฉันเป็นผู้ให้ และเต็มใจที่จะใช้เวลากับผู้อื่น',
    'คนบางคนมักจะขาดเป้าหมายในชีวิตแต่ฉันไม่ใช่คนเหล่านั้น',
    'ฉันชอบลักษณะบุคลิกภาพโดยส่วนใหญ่ของฉัน',
    'ฉันตัดสินตัวเองจากสิ่งที่ฉันคิดว่ามันเป็นสิ่งสำคัญ ไม่ใช่ตัดสินตามค่านิยมของคนอื่น',
    'ฉันสามารถจัดการกับหน้าที่รับผิดชอบหลายๆอย่างในชีวิตประจำวันของฉันได้เป็นอย่างดี',
    'ฉันละทิ้งความพยายามที่จะปรับปรุงหรือเปลี่ยนแปลงตัวเองมานานแล้ว',
    'ฉันไม่เคยสัมผัสกับสัมพันธภาพที่อบอุ่นและน่าไว้วางใจกับบุคคลอื่น',
    'บางครั้งฉันรู้สึกว่าฉันได้ทำทุกอย่างที่ควรทำแล้วในชีวิต',
    'ฉันรู้สึกผิดหวังกับความสำเร็จในชีวิตจากหลาย ๆ เหตุการณ์ของฉัน'
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (choice) => {
    // Define an array to determine whether each question should be added or subtracted
    const questionModifiers = [-1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1];
  
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = choice * questionModifiers[currentQuestion];
      return newAnswers;
    });
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
};

  const sum = answers.reduce((a, b) => a + b, 0);

  const submitScore = () => {
    setSubmitted(true);
  };

  if (!quizStarted) {
    return (
        <div>
            <p className='questionText'>
                ก่อนเริ่มทำแบบประเมิน{'\n'}ขอให้น้องๆอ่านคำชี้แจงด้านล่างนี้ก่อน
                {'\n'}โดยภายในการประเมินนี้
            </p>
            <p className='ruleTextDass'>
            1 = ไม่เห็นด้วยอย่างยิ่ง
            {'\n'}2 = ไม่เห็นด้วยมาก
            {'\n'}3 = ไม่เห็นด้วยบางครั้ง
            {'\n'}4 = เห็นด้วยบางครั้ง
            {'\n'}5 = เห็นด้วยมาก
            {'\n'}6 = เห็นด้วยอย่างยิ่ง

            </p>
            <div className="button-container">
              <button className="btn btn-4" onClick={handleStartQuiz}>เริ่มต้นทำแบบประเมิน</button>
            </div>
        </div>
    );
  }

  if (submitted) {
    return <Score score={sum} />;
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
      <p>Sum: {sum}</p>
    </div>
  );
}

export default WellBeing;