// var API_KEY = "AIzaSyC4kDwWv8x8zYaJ0sF-ijugwtjp3S1wlcQ";

function fetchMarvelCharater() {
  return {
    name: "Iron Main",
  };
}
function fetchMarvelCharaterYoutube(charaterName) {
  return {
    url: "http://",
  };
}
function searchForMarvelCharater() {
  fetchMarvelCharater().then((marvelCharater) => {
    fetchMarvelCharaterYoutube(marvelCharater).then((url) => {
      // update ui
    });
  });
}
