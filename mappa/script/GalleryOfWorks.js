// Define an array of works, each with title, genre, year, image URL, and link URL properties 
const works = [
  { title: "Jujutsu Kaisen", 
    genre: "Action", 
    year: 2020, 
    imageURL: "../images/gallery/Jujutsu Kaisen.jpg", 
    linkURL: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen"},
  { title: "Kakegurui", 
    genre: "Drama", 
    year: 2017, 
    imageURL: "../images/gallery/Kakegurui.jpg", 
    linkURL: "https://myanimelist.net/anime/34933/Kakegurui"},
  { title: "Chainsaw Man", 
    genre: "Gore", 
    year: 2022, 
    imageURL: "../images/gallery/Chainsaw Man.jpg", 
    linkURL: "https://myanimelist.net/anime/44511/Chainsaw_Man"},
  { title: "Yuri!!! on Ice", 
    genre: "Sports", 
    year: 2016, 
    imageURL: "../images/gallery/Yuri!!! on Ice.jpg", 
    linkURL: "https://myanimelist.net/anime/32995/Yuri_on_Ice"},
  { title: "Banana Fish", 
    genre: "Action", 
    year: 2018, 
    imageURL: "../images/gallery/Banana Fish.jpg", 
    linkURL: "https://myanimelist.net/anime/36649/Banana_Fish"},
  { title: "Dororo", 
    genre: "Gore", 
    year: 2019, 
    imageURL: "../images/gallery/Dororo.jpg", 
    linkURL: "https://myanimelist.net/anime/37520/Dororo"},
  { title: "Hell's Paradise", 
    genre: "Action", 
    year: 2023, 
    imageURL: "../images/gallery/Jigokuraku.jpg", 
    linkURL: "https://myanimelist.net/anime/46569/Jigokuraku"},
  { title: "Hajime no Ippo: Rising", 
    genre: "Sports", 
    year: 2013, 
    imageURL: "../images/gallery/HajimeNoIppo.jpg", 
    linkURL: "https://myanimelist.net/anime/19647/Hajime_no_Ippo__Rising"},
  { title: "God of Highschool", 
    genre: "Action", 
    year: 2020, 
    imageURL: "../images/gallery/GodOfHighschool.jpg", 
    linkURL: "https://myanimelist.net/anime/41353/The_God_of_High_School"},
  { title: "Terror in Resonance", 
    genre: "Mystery", 
    year: 2014, 
    imageURL: "../images/gallery/ZankyounoTerror.jpg", 
    linkURL: "https://myanimelist.net/anime/23283/Zankyou_no_Terror"},
  { title: "Kids on the Slope", 
    genre: "Drama", 
    year: 2012, 
    imageURL: "../images/gallery/sakamichi.jpg", 
    linkURL: "https://myanimelist.net/anime/12531/Sakamichi_no_Apollon"},
  { title: "Dorohedoro", 
    genre: "Action", 
    year: 2020, 
    imageURL: "../images/gallery/dorohedoro.jpg", 
    linkURL: "https://myanimelist.net/anime/38668/Dorohedoro"},
  { title: "Zombie Land Saga Revenge", 
    genre: "Comedy", 
    year: 2021, 
    imageURL: "../images/gallery/zombielandsagarevenge.jpg", 
    linkURL: "https://myanimelist.net/anime/40174/Zombieland_Saga_Revenge"},
  { title: "Dance Dance Danseur", 
    genre: "Drama", 
    year: 2022, 
    imageURL: "../images/gallery/dancedancedanseur.jpg", 
    linkURL: "https://myanimelist.net/anime/48702/Dance_Dance_Danseur"},
  { title: "Campfire Cooking in Another World with My Absurd Skill", 
    genre: "Comedy", 
    year: 2023, 
    imageURL: "../images/gallery/campfire.jpg", 
    linkURL: "https://myanimelist.net/anime/53446/Tondemo_Skill_de_Isekai_Hourou_Meshi"},
  { title: "Inuyashiki: Last Hero", 
    genre: "Action", 
    year: 2017, 
    imageURL: "../images/gallery/inuyashiki.jpg", 
    linkURL: "https://myanimelist.net/anime/34542/Inuyashiki"},
  { title: "The Idaten Deities Know Only Peace", 
    genre: "Comedy", 
    year: 2021, 
    imageURL: "../images/gallery/heionsedai.jpg", 
    linkURL: "https://myanimelist.net/anime/42625/Heion_Sedai_no_Idaten-tachi"},
  { title: "Altair: A Record of Battles", 
    genre: "Drama", 
    year: 2017, 
    imageURL: "../images/gallery/shoukokunoaltair.jpg", 
    linkURL: "https://myanimelist.net/anime/34547/Shoukoku_no_Altair"},
  { title: "Re-Main", 
    genre: "Sports", 
    year: 2021, 
    imageURL: "../images/gallery/re-main.jpg", 
    linkURL: "https://myanimelist.net/anime/48406/Re-Main"},
  { title: "Takt. Op Destiny", 
    genre: "Action", 
    year: 2021, 
    imageURL: "../images/gallery/taktop.jpg", 
    linkURL: "https://myanimelist.net/anime/48556/Takt_Op_Destiny"}
];

// Function to filter works based on input
function filterWorks() {
  // Get the filter input value and convert it to lowercase
  const filterInput = document.getElementById("filterInput").value.toLowerCase();
  // Return the works that include the filter input in their title or genre
  return works.filter(work => work.title.toLowerCase().includes(filterInput) || work.genre.toLowerCase().includes(filterInput));
}

// Function to sort works based on select option
function sortWorks(filteredWorks) {
  // Get the sort option value 
  const sortOption = document.getElementById("sortSelect").value;
  // Return the filtered works sorted by the sort option
  return filteredWorks.sort((a, b) => (a[sortOption] > b[sortOption]) ? 1 : -1);
}

// Function to display works
function displayWorks() {
  // Filter the works
  let filteredWorks = filterWorks();
  // Sort the filtered works
  let sortedWorks = sortWorks(filteredWorks);
  // Get the gallery element
  const gallery = document.getElementById("gallery");
  // Clear the gallery
  gallery.innerHTML = "";

  // For each work in the sorted works
  sortedWorks.forEach(work => {
    // Create a new div element for the work
    const workElement = document.createElement("div");
    // Add the "work" class to the work element
    workElement.classList.add("work");
    // Set the innerHTML of the work element
    workElement.innerHTML = `
      <a href="${work.linkURL}" style="text-decoration: none; color: inherit;">
        <img class="thumbnail" src="${work.imageURL}" alt="${work.title}" style="max-width: 100%; cursor: pointer;">
        <h3>${work.title}</h3>
        <p>${work.genre}</p>
        <p>Release Year: ${work.year}</p>
      </a>
    `;
    // Append the work element to the gallery
    gallery.appendChild(workElement);
  });
}

// Add event listeners to filter input and sort select
// When the filter input changes, call the displayWorks function
document.getElementById("filterInput").addEventListener("input", displayWorks);
// When the sort select changes, call the displayWorks function
document.getElementById("sortSelect").addEventListener("change", displayWorks);

// Display the works when the page loads
displayWorks();