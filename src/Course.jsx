import React, { useState } from "react";

import "./Course.css";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const courseClicked = () => {
    navigate("/course/study")
  }

  return (
    <div className="course-container">
      <header className="course-header">
        <h2 className="course-header-text">Explore Courses</h2>
        <div className="search-container">
          <i className="fa fa-search icon"></i> 
          <input
            id="search-bar"
            type="text"
            placeholder="ค้นหา..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button id="search-button" onClick={handleSearch}>ค้นหา</button>
        </div>
      </header>
      <section className="course-content">
        <h2 className="course-header">Courses</h2>
        <div className="slide-cards-container">
          <div className="slide-card" onClick={courseClicked}>
            <h3>โปรแกรม</h3>
            <p>หายใจคลายเครียด</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>โปรแกรม</h3>
            <p>ละเอียดลออดูกาย</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>โปรแกรม</h3>
            <p>ตระหนักรู้ในอารมณ์</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>โปรแกรม</h3>
            <p>หายใจคลายเครียด 2</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>โปรแกรม</h3>
            <p>หายใจคลายเครียด 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}
