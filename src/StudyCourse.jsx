import React, { useState } from "react";

import "./StudyCourse.css";
import { useNavigate } from "react-router-dom";

export default function StudyCourse() {
  const navigate = useNavigate();

  const handlePlayVideo = (url) => {
    if (url == null) return;
    window.open(url, "_blank", "noreferrer");
  };

  const Article = ({ article }) => {
    return (
      <div className="article">
        <p>{article.content}</p>
        {article.img != "" && (
          <img
          id="article-img"
          src={article.img}
          onClick={() => handlePlayVideo(article.video)}
        ></img>
        )}
        {article.video != "" && (
          <a className="underline" href={article.video} target="_blank">
            กดเพื่อเล่นวิดีโอ
          </a>
        )}
        {article.survey == true  && (
          <div id="feeling">
            <input
            id="feeling-bar"
            type="text"
            placeholder="แสดงความรู้สึกของคุณ"
          />
          <button id="feeling-button" className="fa fa-microphone"></button>
          <button id="feeling-button">ส่ง</button>
          </div>
          
        )}
      </div>
    );
  };

  const articles = [
    {
      title: "หายใจคลายเครียด",
      content: "ขอต้อนรับน้องๆ ทุกคนเข้าสู่โปรแกรมที่ 1 “หายใจคลายเครียด” อยากรู้แล้วใช่ไหมคะว่าลมหายใจของเรานั้น ช่วยให้เรามีสภาวะทางจิตใจที่ดีขึ้นได้อย่างไร ก่อนอื่น มาชมวิดีโอ “ประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธี” กันก่อนค่ะ อ้อ! อยากให้ตั้งใจดูด้วยนะคะ เพราะเราจะมีคำถามถามน้องๆ ด้วยค่ะ",
      img: "",
      video: "",
      survey: false,
    },
    {
      title: "หายใจคลายเครียด",
      content: "VDO  “หายใจสลายเครียด” ",
      img: "https://cdn.discordapp.com/attachments/728899175856734298/1170725208273989652/image.png?ex=655a15d0&is=6547a0d0&hm=35af03c7e1becf5a792a1dead5473c455813340c6c80153059f71d28d61524ed&",
      video: "https://www.youtube.com/watch?v=xtjnRilu_14",
      survey: false,
    },
    {
      title: "หายใจคลายเครียด",
      content: "ชมวิดีโอกันแล้ว น้อง ๆ รู้สึกอย่างไรกันบ้างคะ น้องๆ เขียนบอกพี่ได้เลยค่ะ",
      img: "",
      video: "",
      survey: true,
    },
    {
      title: "หายใจคลายเครียด",
      content: "เมื่อน้องๆ ได้ทราบประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธีกันแล้ว ต่อไปเรามาเรียนรู้กันต่อว่า การหายใจช่วยสลายความเครียดได้อย่างไร มาชมวิดีโอกันค่ะ",
      img: "",
      video: "",
      survey: false,
    },
    {
      title: "หายใจคลายเครียด",
      content: "VDO  “ประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธี” ",
      img: "https://media.discordapp.net/attachments/728899175856734298/1170751824706424883/image.png?ex=655a2e9a&is=6547b99a&hm=366b6ff4b7740ef4b7684502a6689d92c54f1f5f31968557bb91af9c6e6ddefc&=&width=1130&height=583",
      video: "https://www.youtube.com/watch?v=8hOEuC3amDI",
    },
    {
      title: "หายใจคลายเครียด",
      content: "พี่จะให้เวลาน้องๆ 3 วัน ในการเรียนรู้และฝึกฝนตาม VDO นะคะ ฝึกวันละประมาณ 10-15 นาที จะทำให้น้องๆ ได้รับประโยชน์จากการหายใจอย่างถูกวิธี ",
      img: "",
      video: "",
      survey: false,
    },
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const previousArticle = () => {
    if (currentArticleIndex == 0) {
      navigate("/course")
    }
    if (currentArticleIndex > 0) {
      
      setCurrentArticleIndex(currentArticleIndex - 1);
      decreaseProgress();
    }
    
  };

  const nextArticle = () => {
    if (currentArticleIndex == articles.length - 1) {
      navigate("/home")
    }

    if (currentArticleIndex < articles.length - 1) {
      
      setCurrentArticleIndex(currentArticleIndex + 1);
      increaseProgress();
    }
    
  };

  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      let page = currentArticleIndex+1
      let length = articles.length-1
      setProgress((page/length)*100); 
    }
  };

  const decreaseProgress = () => {
    if (progress > 0) {
      let page = currentArticleIndex-1
      let length = articles.length-1
      setProgress((page/length)*100);   
    }
  };

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className="study">
      <header className="study-header">
        <div className="header-content">{currentArticle.title}</div>
        <div className="progression-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {`${progress}%`}
          </div>
        </div>
      </header>

      <div>
        <Article article={currentArticle} />
      </div>

      <footer className="footer">
        <div className="left-footer">
          <button
            onClick={previousArticle}
            className="btn btn-2 study-button"
          >
            ก่อนหน้า
          </button>
        </div>
        <div className="right-footer">
          <button
            onClick={nextArticle}
            className="btn btn-4 study-button"
          >
            ต่อไป
          </button>
        </div>
      </footer>
    </div>
  );
}
