const form = document.querySelector("form");
const main = document.querySelector("main");
const movie = document.querySelector(".movie");
const tv = document.querySelector(".tv")
const heading = document.querySelector(".heading");
const footer = document.querySelector("footer");
const typeInfo = document.querySelector(".type-Info")
const select = document.querySelectorAll("select")
const imgContainer = document.querySelector(".img-container");
const buttonType = document.querySelector(".button-type");
const selectType = document.querySelector(".select-type")

const baseUrl = "https://api.jikan.moe/v4/anime?type";
let typeMovie = [];
let typeTv = [];

fetch(baseUrl)
  .then((response) => response.json())
  .then((animeData) => {
getData(animeData)
    
    console.log(animeData)
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomImg = animeData.data[getRandomInt(24)];
    console.log(randomImg);
    const tagImg = document.createElement("img");
    tagImg.setAttribute("src", `${randomImg.images.jpg.large_image_url}`);
    imgContainer.append(tagImg);
   
  })
  .catch((err) => {
    console.log(err);
    
  });




function getData(animeData) {
  // Loop to iterate through data to get all the movies and tv types in its own individual objects
selectType.addEventListener("change", (e) => {
  e.preventDefault()
  imgContainer.innerHTML = ""
  console.log(e.target.value)



  for (let movie of animeData.data) {

    if (e.target.value === "movie" && movie.type === "Movie") {
      const pmovie = document.createElement("p")
     
      pmovie.innerHTML = ` <strong>${movie.title}:</strong> <br>
           ${movie.rating} <br>
           ${movie.duration} <br>
           ${movie.synopsis} ` + "<br><br>"
      imgContainer.append(pmovie)
      console.log(pmovie)
      // 
    }
   
      if (e.target.value === "tv" && movie.type === "TV") {
              const ptv = document.createElement("p")
             
              ptv.innerHTML = ` ${movie.title}:
                   ${movie.rating}
                   ${movie.duration}
                   ${movie.synopsis} ` + "<br><br>"
              imgContainer.append(ptv)
              console.log(ptv)
          }
  
  }


    



  })
}
  
