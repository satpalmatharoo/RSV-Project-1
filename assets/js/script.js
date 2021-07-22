var API_KEY = "6f42252eb8msh67e41ddac877ed0p1b148bjsn0467aff798de";
var API_KEY = "3acbd305d4msh03e14d06885506fp122efcjsn2469dafac0e2";

function getquote() {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6f42252eb8msh67e41ddac877ed0p1b148bjsn0467aff798de",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("text").innerHTML = response.content;
      document.getElementById("creator").innerHTML =
        "- " + response.originator.name + " -";
    })
    .catch((err) => {
      console.error(err);
    });
}
// wikipediaapi

var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");

searchForm.addEventListener("click", function (event) {
  event.preventDefault();

  var searchPhrase = searchInput.value;
  console.log(searchPhrase);
  fetch(
    "https://wiki-scraper.p.rapidapi.com/?article=" +
      searchPhrase +
      "&par=4&lan=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3acbd305d4msh03e14d06885506fp122efcjsn2469dafac0e2",
        "x-rapidapi-host": "wiki-scraper.p.rapidapi.com",
      },
    }
  )
    .then((r) => r.text())
    .then((response) => {
      console.log(response);
      localStorage.setItem("search", searchPhrase);
      localStorage.setItem("search-results", response);

      document.getElementById("search").innerHTML = searchPhrase;
      document.getElementById("search-results").innerHTML = response;
    })
    .catch((err) => {
      console.error(err);
    });
});
document.getElementById("search").innerHTML = localStorage.getItem("search");
document.getElementById("search-results").innerHTML =
  localStorage.getItem("search-results");
