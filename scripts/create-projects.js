import { createProjectCardElement } from "./create-project-card.js";

// load JSON data
fetch("projects.json")
  .then((response) => response.json())
  .then((projectsData) => {
    // Get all data science projects
    const dataScienceProjects = projectsData["data-science-projects"];

    // Get the container for the data science projects
    const dataScienceProjectsList = document.querySelector(".projects-list ul");

    // For each project, create a project card and append it to the container
    for (const project of dataScienceProjects) {
      // You can provide a custom cta text as a second argument like createProjectCardElement(project, 'View Project')
      const projectCard = createProjectCardElement(project); // Create a project card
      dataScienceProjectsList.appendChild(projectCard);
    }

    // Repeat the same for the experimental research projects
    const experimentalResearchProjects =
      projectsData["experimental-research-projects"];

    const experimentalResearchProjectsList = document.querySelector(
      "#experimental-research-tab ul"
    );

    for (const project of experimentalResearchProjects) {
      const projectCard = createProjectCardElement(project);
      experimentalResearchProjectsList.appendChild(projectCard);
    }
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
  });
