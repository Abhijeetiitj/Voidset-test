// Get selected values
const facility = localStorage.getItem("facility");
const location = localStorage.getItem("location");

// Safety check
if (!facility || !location) {
    alert("No selection made!");
    window.location.href = "index.html";
}

// Display values
document.getElementById("facilityName").innerText = facility.toUpperCase();
document.getElementById("locationName").innerText = location.toUpperCase();

// Generate unique session ID
const sessionId = Date.now();

// Create structured QR data
const qrData = JSON.stringify({
    facility: facility,
    location: location,
    session: sessionId,
    timestamp: new Date().toISOString()
});

// Clear old QR if exists
document.getElementById("qrcode").innerHTML = "";

// Generate QR
new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 250,
    height: 250
});