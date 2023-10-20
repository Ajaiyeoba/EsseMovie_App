const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d5a553fa52193a73303ddb7b160aaccf&page=1'
// const API_KEY = 'd5a553fa52193a73303ddb7b160aaccf'
const IMG_PATH = 'https://api.themoviedb.org/3/collection/{collection_id}/images?api_key=d5a553fa52193a73303ddb7b160aaccf'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d5a553fa52193a73303ddb7b160aaccf&query='
const form = document.getElementById('form')
const search = document.getElementById('search')

//  HTML attributes

const backdrop = document.getElementsByClassName('movie-img')
const title = document.getElementsByClassName("movie-title")
 const rating = document.getElementsByClassName("movie-rating")
const overview = document.getElementsByClassName("movie-overview")

// Movie Info
// const backdrop_path = document.getElementsByClassName("movie-img")
// const poster_path = document.getElementsByClassName("")
// const vote_average = document.getElementsByClassName("")
// const release_date = document.getElementsByClassName("")


// async function fetchData() {
//     let response = await fetch(API_URL);
//     let data = await response.json();
//     console.log(data.results); // This will work correctly
// }

// fetchData();

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    let result = data.results
    // For Carousel
    console.log(result[0])

    for (let i = 0; i< 1; i++){
        let item = result[i]
        let div = document.createElement('div')
        div.classList.add('movie-img')
        let collection_id = item.id
        let  IMG_PATH = `https://api.themoviedb.org/3/collection/${collection_id}/images?api_key=d5a553fa52193a73303ddb7b160aaccf`
        div.style.backgroundImage = `url(${IMG_PATH})`
        let h2 = document.createElement('h2')
        h2.classList.add('movie-title')
        h2.innerText = item.title
        let h6 = document.createElement('h6')
        h6.classList.add('movie-rating')
        h6.innerText = item.vote_average
        let h5 = document.createElement('h5')
        h5.classList.add('movie-overview')
        h5.innerText = item.overview
        let btn = document.createElement('button')
        btn.innerText = 'Watch'
        div.append(h2)
        div.append(h6)
        div.append(h5)
        div.append(btn)
        document.querySelector('.movie-slider').append(div)

    }

    function showMovies(movies) {
        main.innerHTML = ''
    
        movies.forEach((movie) => {
            const { title, poster_path, vote_average, overview } = movie
    
            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')
    
            movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
              <h3>Overview</h3>
              ${overview}
            </div>
            `
            main.appendChild(movieEl)
        })
    }
    

    // For the Movie ITSELF

    

    // <div class="movie-img"   >
    //             <h2 class="movie-title"> The Equalizer 3</h2>
    //             <h6 class="movie-rating">7.3/10</h6>
    //             <h5 class="movie-overview">Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.</h5>
    //             <button class="">Watch <img src="" alt=""></button>
    //         </div>

  })




//   const movieSlider = document.getElementById('movie-slider');
  // Loop through the array and create HTML elements for each piece of data
//   data.forEach(item => {
//       const itemElement = document.createElement('div');
//       itemElement.innerHTML = `
//       <div class="movie-img" > ${data.backdrop_path}
//           <h2 class="movie-title">${data.title}</h2>
//           <h6 class="movie-rating">ID: ${data.rating}</h6 >
//           <h5 class="movie-overview">Description: ${data.overview}</h5>
//           </div>
//       `;
//       movieSlider.appendChild(itemElement);
//   });


// CHATGTP VERSION
// async function fetchData() {
//     try {
//         let response = await fetch(API_URL);
//         let data = await response.json();
//         console.log(data.results); // This will work correctly
//         const movieSlider = document.getElementsByClassName('movie-slider');
//         // Loop through the array and create HTML elements for each piece of data
//         data.results.forEach(item => {
//             const itemElement = document.createElement('div');
//             itemElement.innerHTML = `
//                 <div class="movie-img" >
//                     <img src="${item.backdrop_path}" alt="${item.title}">
//                     <h2 class="movie-title">${item.title}</h2>
//                     <h6 class="movie-rating">ID: ${item.id}</h6>
//                     <h5 class="movie-overview">Description: ${item.overview}</h5>
//                 </div>
//             `;
//             movieSlider.appendChild(itemElement);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();


//   .catch(error => console.error('Error:', error));

// Correct: using async/await to handle asynchronous code.
// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data); // This will work correctly
// }
// fetchData();

//   BLUSECRIPTS CLASS
// fetch(API_URL )
// .then(getMovies => getMovies.json())
// .then(response => {
    // let data = response.page() 
    // // backdrop.innerText = data.backdrop_path
    // backdrop.style.background = data.backdrop_path
    // title.innerText = data.title
// })
// .catch(error => console.error('Error:', error));


// OTHER SOURCES
// getMovies(API_URL)
// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()
//     showMovies(data.results)
// }
// function showMovies(movies) {
//   const movieSlider =   document.getElementsByClassName("movie-slider")
//         movies.forEach((movie ) =>  { 
//       const {  title, poster_path, rating , overview,  backdrop_path}  = movie }
      
//        if  (index === 0 ) {
//             return `
//             <div class="movie-slider"> 
//             <div class="movie-img"  ${backdrop_path}>
//             <h2> ${title} </h2>
//             <h6> ${rating} </h6>
//             <h5> ${overview} </h5>
//             </div>
//             </div>
//             `;
            // main.appendChild()
//  }) 
// }


 





// SEARCH BTN

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})