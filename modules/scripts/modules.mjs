import byuiCourse from './course.mjs';
import { setSectionSelection, populateSections } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';

setTitle(byuiCourse);

// Simulated section data
const sectionData = [
  { sectionNumber: "01", enrolled: 10 },
  { sectionNumber: "02", enrolled: 12 },
  { sectionNumber: "03", enrolled: 8 }
];
populateSections(sectionData);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});
