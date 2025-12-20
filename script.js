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
        <img src="${skill.image}" alt="${skill.skill}" width="48" height="48">
        <p>${skill.skill}</p>
      </div>
    `;
  });
}

loadSkills();


// ================= PROJECTS =================

const projectsGrid = document.querySelector(".projects-grid");

async function loadProjects() {
  const res = await fetch(projectsURL);
  const projects = await res.json();
  displayProjects(projects);
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

loadProjects();


// ================= CERTIFICATIONS =================
const certList = document.getElementById("cert-list");

async function loadCerts() {
  if (!certList) return;

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
  if (!achieveList) return;

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

// ================= TYPING ANIMATION =================

const text1 = "Hello! Welcome to My Portfolio, I'm ";
const nameText = "Vishwa N";
const text2 = " — Innovator & Engineer";
const subText = "Let's Explore My Site";

const typeTextEl = document.getElementById("type-text");
const nameEl = document.getElementById("name-text");
const suffixEl = document.getElementById("suffix-text");
const subEl = document.getElementById("type-sub");

let i = 0, j = 0, k = 0;

function typeMain() {
  if (i < text1.length) {
    typeTextEl.textContent += text1.charAt(i);
    i++;
    setTimeout(typeMain, 50);
  } else {
    typeName();
  }
}

function typeName() {
  if (j < nameText.length) {
    nameEl.textContent += nameText.charAt(j);
    j++;
    setTimeout(typeName, 70);
  } else {
    typeSuffix();
  }
}

function typeSuffix() {
  if (k < text2.length) {
    suffixEl.textContent += text2.charAt(k);
    k++;
    setTimeout(typeSuffix, 40);
  } else {
    typeSub();
  }
}

let s = 0;
function typeSub() {
  if (s < subText.length) {
    subEl.textContent += subText.charAt(s);
    s++;
    setTimeout(typeSub, 60);
  }
}

// Start animation
typeMain();

