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
const projectGrid = document.querySelector(".projects-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
let projects = [];

async function loadProjects() {
    const res = await fetch(projectURL);
    projects = await res.json();
    displayProjects("all");
}

function displayProjects(category) {
    projectGrid.innerHTML = "";

    projects
      .filter(p => category === "all" || p.category === category)
      .forEach(p => {
        projectGrid.innerHTML += `
            <div class="project-card">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <b>Category: ${p.category}</b>
            </div>`;
      });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        displayProjects(btn.dataset.category);
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
            <div class="cert-card">
                <h3>${a.title}</h3>
                <p>${a.description}</p>
                <small>${a.year}</small>
            </div>`;
    });
}

loadAchievements();
