const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', completed: true }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector("#certificate .cards");
    const buttons = document.querySelectorAll(".menuButton");
  
    function displayCourses(courseArray) {
      cardContainer.innerHTML = ""; // Clear old content
  
      courseArray.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card ${course.completed ? "completed" : "not-completed"}`;
        card.innerHTML = `
          <h3>${course.subject} ${course.number}</h3>
          <p><strong>${course.title}</strong></p>
          <p>${course.description}</p>
          <p><em>Credits:</em> ${course.credits}</p>
          <p><em>Tech:</em> ${course.technology?.join(", ") || "N/A"}</p>
        `;
        cardContainer.appendChild(card);
      });
  
      // Add/update total credits
      const totalCredits = courseArray.reduce((sum, c) => sum + c.credits, 0);
      let totalEl = document.querySelector("#certificate .totalCredits");
      if (!totalEl) {
        totalEl = document.createElement("p");
        totalEl.classList.add("totalCredits");
        document.querySelector("#certificate").appendChild(totalEl);
      }
      totalEl.textContent = `Total Credits: ${totalCredits}`;
    }
  
    // Button filtering
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.textContent.trim();
        let filteredCourses;
  
        if (filter === "All") {
          filteredCourses = courses;
        } else {
          filteredCourses = courses.filter(course => course.subject === filter);
        }
  
        displayCourses(filteredCourses);
      });
    });
  
    // Initial display
    displayCourses(courses);
  });