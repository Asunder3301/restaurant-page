export function displayAbout() {
    const container = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    const headerText = document.createElement("h1");
    headerText.textContent = "About Us"
    header.appendChild(headerText);
    container.appendChild(header);

    const aboutContainer = document.createElement("div");
    const about = document.createElement("p");
    about.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quia debitis facere velit voluptates quae explicabo quos sit nemo dolorum optio. Optio tenetur exercitationem eveniet voluptate nemo porro dignissimos fugit."
}