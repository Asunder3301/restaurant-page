export function displayHomepage() {
    const container = document.getElementById("content");
    
    const header = document.createElement("div");
    header.id = "logo";
    const headerText = document.createElement("h1");
    headerText.textContent = "Asunder's Diner"
    header.appendChild(headerText);
    container.appendChild(header);

    const hours = document.createElement("div");
    hours.id = "hours";
    const hoursText = document.createElement("h2");
    hoursText.textContent = "Hours";
    hours.appendChild(hoursText);
    const list = document.createElement("ul");
    const monFri = document.createElement("li");
    monFri.textContent = "Monday-Friday: 8am - 8am";
    list.appendChild(monFri);
    const satSun = document.createElement("li");
    satSun.textContent = "Saturday-Sunday: 10am - 8pm";
    list.appendChild(satSun);
    hours.appendChild(list);
    container.appendChild(hours)

    const location = document.createElement("div");
    location.id = "location";
    const locationText = document.createElement("h2");
    locationText.textContent = "Location";
    location.appendChild(locationText);
    const address = document.createElement("p");
    address.textContent = "123 Main Street, Mainville, Alabama";
    location.appendChild(address);
    container.appendChild(location);
}