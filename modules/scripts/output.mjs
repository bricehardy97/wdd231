export function setTitle(course) {

function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
  }
}
export function renderSections(sections) {
    const list = document.querySelector("#sections");
    list.innerHTML = "";
  
    sections.forEach((section) => {
      const item = document.createElement("li");
      item.textContent = `Section ${section.sectionNumber}: ${section.enrolled} enrolled`;
      list.appendChild(item);
    });
  }