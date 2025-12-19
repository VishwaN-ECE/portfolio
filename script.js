// ✅ REPLACE THESE URLs WITH YOUR JSON LINKS
const skillsURL = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/refs/heads/main/skills.json";
const projectURL = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/projects.json";
const certURL    = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/certifications.json";
const achieveURL = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/refs/heads/main/achievements.json";


// ---------------- SKILLS ----------------
const skillsGrid = document.querySelector(".skills-grid");

async function loadSkills(){
    const res = await fetch(skillsURL);
    const data = await res.json();
    skillsGrid.innerHTML = "";

    data.forEach(s => {
        skillsGrid.innerHTML += `<div class="skill-card">${s.skill}</div>`;
    });
}
loadSkills();


// ---------------- PROJECTS ----------------
const projectsGrid = document.querySelector(".projects-grid");
const filterButtons = document.querySelectorAll(".project-filters button");

let allProjects = [];

// Load projects
async function loadProjects() {
  const res = await fetch(projectsURL);
  allProjects = await res.json();
  displayProjects(allProjects);
}

function displayProjects(projects) {
  projectsGrid.innerHTML = "";

  projects.forEach(project => {
    projectsGrid.innerHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p class="category">${project.category}</p>
        <p>${project.description}</p>
      </div>
    `;
  });
}

// Filter logic
filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button UI
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    if (filter === "All") {
      displayProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        project => project.category === filter
      );
      displayProjects(filtered);
    }
  });
});

loadProjects();


// ---------------- CERTIFICATIONS ----------------
const certList = document.getElementById("cert-list");

async function loadCerts() {
    const res = await fetch(certURL);
    const data = await res.json();
    certList.innerHTML = "";

    data.forEach(c => {
        certList.innerHTML += `
            <div class="cert-card">
                <img src="${c.icon}" class="cert-icon">
                <div>
                    <b>${c.name}</b><br>
                    ${c.platform}
                </div>
            </div>`;
    });
}

loadCerts();


// ---------------- ACHIEVEMENTS ----------------
const achieveList = document.getElementById("achievement-list");

async function loadAchievements() {
  const res = await fetch(achieveURL);
  const data = await res.json();
  achieveList.innerHTML = "";

  data.forEach(a => {
    achieveList.innerHTML += `
      <div class="achievement-card">
        <img src="${a.image}" class="achievement-img" alt="${a.title}">
        <div>
          <h3>${a.title}</h3>
          <p>${a.description}</p>
          <small>${a.year}</small>
        </div>
      </div>
    `;
  });
}

loadAchievements();



