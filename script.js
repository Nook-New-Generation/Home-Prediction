// Mencegah reload halaman pada submit form
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input
  const squareFeet = document.getElementById("square-feet").value;
  const bedrooms = document.getElementById("bedrooms").value;
  const bathrooms = document.getElementById("bathrooms").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const yearBuilt = document.getElementById("year-built").value;

  // Tampilkan nilai input ke console (bisa dikembangkan lebih lanjut)
  console.log("Square Feet:", squareFeet);
  console.log("Bedrooms:", bedrooms);
  console.log("Bathrooms:", bathrooms);
  console.log("Neighborhood:", neighborhood);
  console.log("Year Built:", yearBuilt);

  alert("Prediction feature belum diimplementasikan! 😄");
});
