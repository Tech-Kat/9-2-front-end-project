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
/**https://api.jikan.moe/v4/anime?start_date=2020 */

// form.addEventListener("submit", (event) => {
// event.preventDefault()
const baseUrl = "https://api.jikan.moe/v4/anime?type";
let typeMovie = [];
let typeTv = [];

fetch(baseUrl)
  .then((response) => response.json())
  .then((animeData) => {
getData(animeData)
    // getGenre(animeData.);
    console.log(animeData)
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomImg = animeData.data[getRandomInt(24)];
    console.log(randomImg);
    const tagImg = document.createElement("img");
    tagImg.setAttribute("src", `${randomImg.images.jpg.large_image_url}`);
    imgContainer.append(tagImg);
    // console.log(tagImg);
    // console.log(animeData);
  })
  .catch((err) => {
    console.log(err);
    
  });

// function getGenre(animeData){
  // for(let a of animeData.data) {
  //   const option = document.createElement("option");
  //   option.setAttribute("value", a.type)
  //   option.textContent = a.type

  //   selectType.append(option)


  // }

// }
//  selectType.addEventListener("change", e => {
//   e.preventDefault();
//   imgContainer.innerHTML = ""

//   fetch(baseUrl)
//   .then((resp) => resp.json())
//   .then((animeData) => {
//     for(let n of animeData.data) {
//     if (e.target.value === "movie") {

//       const movieInfo = document.createElement("p")
//       movieInfo.innerHTML = `${n.title} <br> ${n.rating} <br> ${n.duration} <br> ${n.synopsis}`
//       imgContainer.append(movieInfo)
// // console.log(movieInfo)
//     } 
//       if (e.target.value === "tv") {

//       const tvSelect = document.createElement("p")
//       tvSelect.innerHTML = `${n.title} <br> ${n.rating} <br> ${n.duration} <br> ${n.synopsis}`
//       imgContainer.append(tvSelect)
      
//   } 
//     }
    
//   })
//  })



function getData(animeData) {
  // Loop to iterate through data to get all the movies and tv types in its own individual objects
selectType.addEventListener("change", (e) => {
  e.preventDefault()
  imgContainer.innerHTML = ""
  console.log(e.target.value)



  for (let movie of animeData.data) {

    if (e.target.value === "movie" && movie.type === "Movie") {
      const pmovie = document.createElement("p")
     
      pmovie.innerHTML = ` ${movie.title} 
           ${movie.rating}
           ${movie.duration}
           ${movie.synopsis} ` + "<br><br>"
      imgContainer.append(pmovie)
      console.log(pmovie)
      // 
    }
   
      if (e.target.value === "tv" && movie.type === "TV") {
              const ptv = document.createElement("p")
             
              ptv.innerHTML = ` ${movie.title} 
                   ${movie.rating}
                   ${movie.duration}
                   ${movie.synopsis} ` + "<br><br>"
              imgContainer.append(ptv)
              console.log(ptv)
          }
  
  }

// for (let tv of animeData.data) {

//   if (tv.type === "TV") {
//       const ptv = document.createElement("p")
     
//       ptv.innerHTML = ` ${tv.title} 
//            ${tv.rating}
//            ${tv.duration}
//            ${tv.synopsis} ` + "<br><br>"
//       imgContainer.append(ptv)
//       console.log(ptv)
//   }
// }
    



  })
}
  // return [typeMovie, typeTv] 
  
// }

//create for loop iterate thru whether its movie or tv and return result... create and append to elements

// const liMovie = document.querySelector(".type option ");
// console.log(liMovie);
// liMovie.addEventListener("click", (event) => {
//   event.preventDefault();
//   typeInfo.style.setProperty("display", "none");
     
//     console.log(animeData);
  // for (let movies of typeMovie) {
  //   if (movies === typeMovie) {

//       movie.setAttribute("src", `${getData.typeMovie}`);
//       movie.textContent = typeMovie
//       imgContainer.append(movie);
//     }
//   }
//     console.log(typeMovie);
// });

// const liTv = document.querySelector(".type option");
// liTv.addEventListener("click", (event) => {
//   event.preventDefault();
//   typeInfo.style.setProperty("display", "none");

//   for (let tvs of typeTv) {
//     if (tvs === typeTv) {
//         // const tvStuff = animeData.data[getData]
//       tv.setAttribute("src", `${getData.typeTv}`);
//       tv.textContent = typeTv
//       imgContainer.append(tv);
//     }
//   }
//   console.log(tv);
//   console.log(movie)
//   console.log(typeTv)
// });



// for(let s of select){
//   s.addEventListener("change", e => {
//     e.preventDefault()
//     imgContainer.innerHTML=""
//     console.log(e.target.value)
//   if (e.target.value === "movie"){
//     typeInfo.append(typeMovie)
//   } else {
//     if(e.target.value === "tv"){
//       typeInfo.append(typeTv)
//     }
//   }
//   })
// }