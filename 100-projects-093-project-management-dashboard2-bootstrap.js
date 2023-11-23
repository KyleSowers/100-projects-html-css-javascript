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
