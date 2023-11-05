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
          <i class="fa fa-search icon"></i> 
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
            <h3>Card Content</h3>
            <p>This is the content of the card.</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>Card Content</h3>
            <p>This is the content of the card.</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>Card Content</h3>
            <p>This is the content of the card.</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>Card Content</h3>
            <p>This is the content of the card.</p>
          </div>
          <div className="slide-card" onClick={courseClicked}>
            <h3>Card Content</h3>
            <p>This is the content of the card.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
