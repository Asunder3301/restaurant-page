export function displayMenu() {
    const container = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    const headerText = document.createElement("h1");
    headerText.textContent = "Menu"
    header.appendChild(headerText);
    container.appendChild(header);

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const list = document.createElement("ul");
    list.id = "list";
    const pizza = document.createElement("li");
    pizza.textContent = "Pizza";
    list.appendChild(pizza);
    const steak = document.createElement("li");
    steak.textContent = "Steak";
    list.appendChild(steak);
    const burger = document.createElement("li");
    burger.textContent = "Burger";
    list.appendChild(burger);
    const pancake = document.createElement("li");
    pancake.textContent = "Pancakes";
    list.appendChild(pancake);
    container.appendChild(list);
}