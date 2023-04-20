// Get the input field and search button
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

// Get the list of projects
const projectsList = document.getElementById("projectsList");
const projects = projectsList.getElementsByTagName("li");

// Function to filter the projects by technology
function filterProjects() {
    const filter = searchInput.value.toUpperCase();

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const technology = project.textContent.toUpperCase(); // Use textContent instead of innerText

        if (technology.indexOf(filter) > -1) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    }
}

// Add event listener to search button
searchButton.addEventListener("click", filterProjects);

// Add event listener to input field
searchInput.addEventListener("keyup", filterProjects);