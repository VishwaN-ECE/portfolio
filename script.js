// ================= JSON URLs =================
const skillsURL   = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/skills.json";
const projectsURL = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/projects.json";
const certURL     = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/certifications.json";
const achieveURL  = "https://raw.githubusercontent.com/Vishwa-Narayanan-dev/vishwa-portfolio-data/main/achievements.json";


// ================= SKILLS =================
const skillsGrid = document.querySelector(".skills-grid");

async function loadSkills() {
  const res = await fetch(skillsURL);
  const skills = await res.json();

  skillsGrid.innerHTML = "";

  skills.forEach(skill => {
    skillsGrid.innerHTML += `
      <div class="skill-card">
        <img src="${skill.icon}" alt="${skill.name}" width="48" height="48">
        <p>${skill.name}</p>
      </div>
    `;
  });
}

loadSkills();


// ================= PROJECTS =================
const projectsGrid = document.querySelector(".projects-grid");
const filterButtons = document.querySelectorAll(".project-filters button");

let allProjects = [];

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

// Filter buttons
filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    if (filter === "All") {
      displayProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        p => p.category === filter
      );
      displayProjects(filtered);
    }
  });
});

loadProjects();


// ================= CERTIFICATIONS =================
const certList = document.getElementById("cert-list");

async function loadCerts() {
  const res = await fetch(certURL);
  const data = await res.json();

  certList.innerHTML = "";

  data.forEach(c => {
    certList.innerHTML += `
      <div class="cert-card">
        <img src="${c.icon}" class="cert-icon" alt="${c.name}">
        <div>
          <b>${c.name}</b><br>
          <small>${c.platform}</small>
        </div>
      </div>
    `;
  });
}

loadCerts();


// ================= ACHIEVEMENTS =================
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
