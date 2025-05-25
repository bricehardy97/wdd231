import byuiCourse from './course.mjs';
export function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    sectionSelect.innerHTML = ""; // Optional: clear existing options
  
    byuiCourse.sections.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.sectionNumber;
      option.textContent = `${section.sectionNumber}`;
      sectionSelect.appendChild(option);
    });
  }
  
  export function populateSections(sections) {
    byuiCourse.sections = sections;     // Assign sections to the course object
  setSectionSelection();              // Populate the select dropdown with these sections

  }
  