var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
    event.defaultPrevented();

    var searchPhrase = searchInput.value;

    var previousSearches = JSON.parse(localStorage.getItem("searches"));
    previousSearches.push(searchPhrase);

    localStorage.setItem("seaches", JSON.stringify(previousSearches));
})




// localStorage.setItem("satpal", "sunny");


// var satpal = localStorage.getItem("satpal") // sunny

// var students = [{name: "Viktoria"}];

// localStorage.setItem("students", JSON.stringify(students))


// var studentsFromLocalStorage = JSON.parse(localStorage.getItem("students"));

// console.log("The name of the first student in the array is: " + studentsFromLocalStorage[0].name)