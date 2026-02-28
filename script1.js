function goTo(page) {
    window.location.href = page;
}

function goBack() {
    window.location.href = "index.html";
}

function selectFloor(floorName) {
    localStorage.setItem("selectedFloor", floorName);
    window.location.href = "qr.html";
}

function updateRushStatus() {

    const floors = ["floor0", "floor1", "floor2", "floor3"];

    floors.forEach(floor => {

        const count = parseInt(document.getElementById(`${floor}-count`).innerText);
        const statusElement = document.getElementById(`${floor}-status`);

        if (count < 20) {
            statusElement.innerText = "Low Rush";
            statusElement.style.backgroundColor = "#1e7e34";
        }
        else if (count < 40) {
            statusElement.innerText = "Moderate";
            statusElement.style.backgroundColor = "#b8860b";
        }
        else {
            statusElement.innerText = "High Rush";
            statusElement.style.backgroundColor = "#8b0000";
        }

    });
}
function selectCourt(element) {

    // Remove previous selection
    let courts = document.querySelectorAll(".court");
    courts.forEach(court => {
        court.classList.remove("selected");
    });

    // Add selected class
    element.classList.add("selected");

    alert("You selected " + element.querySelector("h3").innerText);
}