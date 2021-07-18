var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var searchPhrase = searchInput.value;
  execute(searchPhrase);

  //   var previousSearches = JSON.parse(localStorage.getItem("searches"));
  //   previousSearches.push(searchPhrase);

  //   localStorage.setItem("seaches", JSON.stringify(previousSearches));
});

function loadClient() {
  gapi.client.setApiKey("YAIzaSyC4kDwWv8x8zYaJ0sF-ijugwtjp3S1wlcQ");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("AIzaSyC4kDwWv8x8zYaJ0sF-ijugwtjp3S1wlcQ");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute(search) {
  return gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 25,
      q: search,
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}

function handleClientLoad() {
  gapi.load("client:auth2", function () {
    gapi.auth2.init({
      client_id:
        "624001377429-hjju337cp0o6rgcatmoiq3dr6429f8kq.apps.googleusercontent.com",
    });
  });
}

// localStorage.setItem("satpal", "sunny");

// var satpal = localStorage.getItem("satpal") // sunny

// var students = [{name: "Viktoria"}];

// localStorage.setItem("students", JSON.stringify(students))

// var studentsFromLocalStorage = JSON.parse(localStorage.getItem("students"));

// console.log("The name of the first student in the array is: " + studentsFromLocalStorage[0].name)
