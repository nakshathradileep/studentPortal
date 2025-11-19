import React from "react";
import "./StudentCard.css";

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Roll:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> {email}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

      <p className={isActive ? "active-badge" : "inactive-badge"}>
        {isActive ? "Active" : "Inactive"}
      </p>
    </div>
  );
}
