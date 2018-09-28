import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

//document.getElementById("oneJoke").innerHTML = alljokes.getJokeById(2);

// Day 2
document.getElementById("myButton").addEventListener("click", function() {
document.getElementById("myDiv").innerHTML = jokes.getJokeById(3);
});

//const fetchJoke = (url, cb) => {
   // fetch(url)
       // .then(function (response) {
        //    return response.json();
       // })
       // .then(function (json) {
       //     cb(json);
       // })
      //  .catch(function(error) {
    //        console.log('Error: ' + error);
  //      });
//}

//fetchJoke(' https://studypoints.dk/jokes/api/jokes/period/hour', json => {
//    console.log(json);
//});

