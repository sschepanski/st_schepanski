/**
 * Creates a project card element with the given title and description.
 *
 * @param {Object} project - The project object.
 * @param {string} project.title - The title of the project.
 * @param {string} project.description - The description of the project.
 * @param {string} project.link - The link to the project.
 *
 * @param {string} cta - The call to action text. Defaults to "View Project".
 */
export const createProjectCardElement = (project, cta = "View Project") => {
  // Create the outer <li> element with the class "card"
  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card");

  // Create the <a> element with class "card-details" and id "#project2"

  const projectLink = document.createElement("a");
  projectLink.classList.add("card-details");
  projectLink.href = project.link;
  projectLink.target = "_blank";

  // Create the <p> element with class "text-title" and set its text content
  const titleParagraph = document.createElement("p");
  titleParagraph.classList.add("text-title");
  titleParagraph.textContent = project.title;

  // Create the <p> element with class "text-body" and set its text content
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("text-body");
  bodyParagraph.textContent = project.description;

  // Create the <button> element with class "card-link" and set its text content
  const ctaElement = document.createElement("a");
  ctaElement.classList.add("card-link");
  ctaElement.classList.add("button-layout");
  ctaElement.href = project.link;
  projectLink.target = "_blank";
  ctaElement.textContent = cta;

  // Append the <p> elements to the <a> element
  projectLink.appendChild(titleParagraph);
  projectLink.appendChild(bodyParagraph);

  // Append the <a> element and the <button> element to the <li> element
  cardListItem.appendChild(projectLink);
  cardListItem.appendChild(ctaElement);

  return cardListItem;
};
