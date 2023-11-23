'use strict'

const projectList = document.getElementById("project-list");
const projectForm = document.getElementById("project-form");

//Local data
const projects = [
    {
        name: "Project 1",
        description: "This is project 1",
        status: "In Progress",
        teamMembers: ["Alice", "Bob"]
    },
    {
        name: "Project 2",
        description: "This is project 2",
        status: "Completed",
        teamMembers: ["Charlie", "Dave"]
    },
    //Can add as many as desired
];

//Function for display
function displayProjects(projects) {
    projectList.innerHTML = "";

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectName = document.createElement("h2");
        projectName.textContent = project.name;
        projectDiv.appendChild(projectName);

        const projectDescription = document.createElement("p");
        projectDescription.textContent = `Description: ${project.description}`;
        projectDiv.appendChild(projectDescription);

        const projectStatus = document.createElement("p");
        projectStatus.textContent = `Status: ${project.status}`;
        projectDiv.appendChild(projectStatus);

        const projectTeam = document.createElement("p");
        projectTeam.textContent = `Team: ${project.teamMembers.join(", ")}`;

        projectList.appendChild(projectDiv);
    });
}

//initial display of projects
displayProjects(projects);