const baseUrl = "https://api.jikan.moe/v4/anime"
/**https://api.jikan.moe/v4/anime?start_date=2020 */

fetch(baseUrl)
.then((response) => response.json()) 
.then((wy) => console.log(wy))
.catch((err) => console.log(err));

