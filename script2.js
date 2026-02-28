function selectSport(sportName) {
    localStorage.setItem("selectedSport", sportName);
    window.location.href = "qr.html";
}

function updateSportsRush() {

    const sports = [
        "badminton",
        "tabletennis",
        "squash",
        "gym",
        "kabbadi",
        "badminton_court_1",
        "badminton_court_2",
        "badminton_court_3",
        "badminton_court_4",
        "badminton_court_5",
        "badminton_court_6",
        "badminton_court_7",
        "badminton_court_8",
        "tt_court_1",
        "tt_court_2",
        "tt_court_3",
        "tt_court_4",
        "squash_court_1",
        "squash_court_2"
    ];

    sports.forEach(sport => {

        const countElement = document.getElementById(`${sport}-count`);
        const statusElement = document.getElementById(`${sport}-status`);

        if (!countElement || !statusElement) return;

        const count = parseInt(countElement.innerText);

        if (count < 5) {
            statusElement.innerText = "Low";
            statusElement.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
            statusElement.style.color = "white";
            statusElement.style.boxShadow = "0 4px 15px rgba(46, 204, 113, 0.3)";
        }
        else if (count < 15) {
            statusElement.innerText = "Moderate";
            statusElement.style.background = "linear-gradient(135deg, #f39c12, #e67e22)";
            statusElement.style.color = "white";
            statusElement.style.boxShadow = "0 4px 15px rgba(243, 156, 18, 0.3)";
        }
        else {
            statusElement.innerText = "High Rush";
            statusElement.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";
            statusElement.style.color = "white";
            statusElement.style.boxShadow = "0 4px 15px rgba(231, 76, 60, 0.3)";
        }

    });
}

function goBack() {
    window.history.back();
}