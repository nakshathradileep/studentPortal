import React from "react";
import StudentCard from "./studentCard";

export default function App() {
  const activeStudents = [
    {
      name: "Rahul Sharma",
      rollNumber: "A101",
      course: "Full Stack Development",
      email: "rahul@gmail.com",
      skills: ["HTML", "CSS", "JavaScript"],
      isActive: true
    },
    {
      name: "Anita Verma",
      rollNumber: "A102",
      course: "Full Stack Development",
      email: "anita@gmail.com",
      skills: ["React", "Node.js"],
      isActive: true
    },
    {
      name: "Vikas Rao",
      rollNumber: "A103",
      course: "Full Stack Development",
      email: "vikas@gmail.com",
      skills: ["MongoDB", "Express"],
      isActive: true
    },
    {
      name: "Sneha Kumar",
      rollNumber: "A104",
      course: "Full Stack Development",
      email: "sneha@gmail.com",
      skills: ["UI/UX", "JavaScript"],
      isActive: true
    }
  ];

  const alumni = [
    {
      name: "Arjun Singh",
      rollNumber: "B201",
      course: "Web Development",
      email: "arjun@gmail.com",
      skills: ["HTML", "CSS"],
      isActive: false
    },
    {
      name: "Priya Mehta",
      rollNumber: "B202",
      course: "React Development",
      email: "priya@gmail.com",
      skills: ["React", "Redux"],
      isActive: false
    },
    {
      name: "Kunal Joshi",
      rollNumber: "B203",
      course: "Backend Development",
      email: "kunal@gmail.com",
      skills: ["Node.js", "SQL"],
      isActive: false
    }
  ];

  const totalStudents = activeStudents.length + alumni.length;

  const allSkills = [...activeStudents, ...alumni].flatMap(s => s.skills);
  const skillCount = {};
  allSkills.forEach(skill => {
    skillCount[skill] = (skillCount[skill] || 0) + 1;
  });
  const mostCommonSkill = Object.keys(skillCount).reduce((a, b) =>
    skillCount[a] > skillCount[b] ? a : b
  );

  return (
    <div>
      <header>
        <h1>Student Directory 2025</h1>
        <h3>Full Stack Development Batch</h3>
      </header>

      <section>
        <h2>Active Students</h2>
        {activeStudents.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </section>

      <section>
        <h2>Alumni</h2>
        {alumni.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </section>

      <section>
        <h2>Directory Statistics</h2>
        <p><strong>Total Students:</strong> {totalStudents}</p>
        <p><strong>Active:</strong> {activeStudents.length}</p>
        <p><strong>Alumni:</strong> {alumni.length}</p>
        <p><strong>Most Common Skill:</strong> {mostCommonSkill}</p>
      </section>

      <footer>
        <p>© 2025 Student Portal | Contact: support@studentportal.com</p>
      </footer>
    </div>
  );
}
