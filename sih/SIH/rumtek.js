// Initialize Pannellum panorama
var panorama = pannellum.viewer('panorama', {
    type: "equirectangular",
    panorama: "rumtek-panorama.jpg", // replace with your 360° image
    autoLoad: true,
    hotSpots: [
        { pitch: 10, yaw: 100, type: "info", text: "Main Prayer Hall" },
        { pitch: -5, yaw: 200, type: "info", text: "Ancient murals" }
    ]
});

// Audio narration
var audios = {
    en: new Audio("rumtek-en.mp3"),
    hi: new Audio("rumtek-hi.mp3"),
    ne: new Audio("rumtek-ne.mp3")
};

var currentAudio = audios.en;
currentAudio.play();

// Language switcher
document.getElementById("lang-select").addEventListener("change", function() {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = audios[this.value];
    currentAudio.play();
});
