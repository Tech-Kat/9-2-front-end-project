const form = document.querySelector(".form-container")
const main = document.querySelector("main")
const placeholder = document.querySelector(".placeholder")
const article = document.querySelector("article")
const userSearch = document.querySelector(".input")
const resultsContainer = document.querySelector(".results-container")
const baseUrl = `https:api.jikan.moe/v4/anime?title`


    // const clearButton = document.getElementById("clear")
    // clearButton.addEventListener("click", () => {
    //     function deleteResults(deletePrevious) {
    //         deletePrevious.remove();
    //     }
    // })

    



fetch(baseUrl)
    .then((response) => response.json())
    .then((animeData) => {
        // console.log(animeData)
        const data = animeData.data
        console.log(data)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    placeholder.style.setProperty("display", "none");
    resultsContainer.innerHTML = ""
    const userSearch = event.target.userSearch.value;
    // console.log(animeItem)
        // console.log(userSearch)
        // console.log(animeData.data[6].titles[0])
        // console.log(animeData)
        // console.log(animeData[0][0].title)

    for(let i=0; i< data.length; i++){
        // console.log(data[i].title)
        if(data[i].title.toLowerCase() === userSearch.toLowerCase()){
            const animeItem = document.createElement("p")

        animeItem.classList.add("anime-item")

        animeItem.innerHTML = `${data[i].title}` 
        const aTag = document.createElement("a")
        aTag.innerHTML = `${data[i].trailer.url}`
        aTag.setAttribute("href", data[i].trailer.url)
         
        const imgTag = document.createElement("img")
        imgTag.setAttribute("src", data[i].images.jpg.large_image_url)

        console.log(data[i].title)
console.log(data[i].trailer.url)
        resultsContainer.append(imgTag, animeItem, aTag)
        
        form.reset()
        }
    }


// function setList(animeData){
//     for(let anime of animeData){
        
//         const text = document.createTextNode(anime.title)

//         animeItem.appendChild(text)

//     }
// }
});
    });
 
// function setList(animeData){
//     for(let anime of animeData){
//         const animeItem = document.createElement("li")

//         animeItem.classList.add("anime-item")

//         const text = document.createTextNode(anime.title)

//         animeItem.appendChild(text)

//         setList.appendChild(animeItem)
//     }
// }
// userSearch.addEventListener("input", (event) => {
    // declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    // let value = event.target.value
    //chck if input exists and if input is larger thn 0
//     if(value && value.trim().length > 0){
//         value = value.trim().toLowerCase()
//         setList(anime.filter(anime => {
//             return anime.title.includes(value)
//         }))
//     } else {
// return `Please try again`
//     }

// });
    // const ul = document.createElement("ul");
    // ul.classList.add("results-list");
    // article.append(ul);
    //for the image tag position
    
 