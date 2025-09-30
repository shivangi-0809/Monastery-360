// Initialize map centered on Sikkim
var map = L.map('map').setView([27.533, 88.512], 9); // Sikkim coords

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Monastery data
var monasteries = [
  {
    name: "Rumtek Monastery",
    coords: [27.3319, 88.6121],
    description: "Largest and most significant monastery in Sikkim.",
    image: "monastery1.jpg",
    tour: "rumtek-tour.html"
  },
  {
    name: "Pemayangtse Monastery",
    coords: [27.3360, 88.2746],
    description: "Historic monastery with stunning views of Kanchenjunga.",
    image: "monastery2.jpg",
    tour: "pemayangtse-tour.html"
  },
  {
    name: "Tashiding Monastery",
    coords: [27.3120, 88.2623],
    description: "Sacred site known for the Bhumchu festival.",
    image: "monastery3.jpg",
    tour: "tashiding-tour.html"
  }
];

// Add markers
monasteries.forEach(function(monastery) {
  var marker = L.marker(monastery.coords).addTo(map);
  marker.bindPopup(
    `<b>${monastery.name}</b><br>
    <img src="${monastery.image}" width="150"><br>
    ${monastery.description}<br>
    <a href="${monastery.tour}" class="btn btn-sm btn-success mt-1">Start 360° Tour</a>`
  );
});
