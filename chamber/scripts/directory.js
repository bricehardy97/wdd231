
function start() {
    console.log("fish")
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById("hamburger");
        const nav = document.querySelector("nav ");

        hamburger.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    });

    readMembersJsonData();
}

function readMembersJsonData() {
    console.log("reading in data");
    const filename = "./members.json"

    fetch(filename)
        .then(response => response.json()) // Parse JSON
        .then(data => console.log(data)) // Work with JSON data
        .catch(error => console.error('Error fetching JSON:', error));
}

start();


// footer
document.getElementById("copyright").textContent =
  `© ${new Date().getFullYear()} Brice Hardy:WDD231`;

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;



  async function fetchMembers() {
  const response = await fetch('./data/members.json');
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const container = document.getElementById('members');

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="./images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
    `;

    container.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 3: return "Gold";
    case 2: return "Silver";
    default: return "Member";
  }
}

fetchMembers();