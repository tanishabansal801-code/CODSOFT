import { useState } from "react";

import movies from "./data/movies";

import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";


function App() {


const [search, setSearch] = useState("");

const [category, setCategory] = useState("");

const [favourites, setFavourites] = useState([]);



/* AI Recommendation Logic */

function recommend(type){

setCategory(type);

}



/* Favourite Function */

function addFavourite(movie){

setFavourites([...favourites, movie]);

alert(movie.title + " added to favourites ❤️");

}




/* Filtering Movies */

const filteredMovies = movies.filter((movie)=>{


const searchMatch =

movie.title
.toLowerCase()
.includes(search.toLowerCase());



const categoryMatch =

category === "" ||

movie.genre
.toLowerCase()
.includes(category.toLowerCase())

||

movie.mood
.toLowerCase()
.includes(category.toLowerCase());



return searchMatch && categoryMatch;


});




return (

<div>



<Navbar setSearch={setSearch}/>




<section className="hero">


<h1>
🎬 CineAI
</h1>


<h2>
AI Movie Recommendation System
</h2>


<p>
Discover movies based on your mood and interests
</p>


</section>




<div className="buttons">


<button onClick={()=>recommend("")}>
🎥 All Movies
</button>


<button onClick={()=>recommend("Action")}>
🔥 Action
</button>


<button onClick={()=>recommend("Romance")}>
❤️ Romance
</button>


<button onClick={()=>recommend("Comedy")}>
😂 Comedy
</button>


<button onClick={()=>recommend("Drama")}>
🎭 Drama
</button>


<button onClick={()=>recommend("Adventure")}>
🌍 Adventure
</button>


<button onClick={()=>recommend("Sci-Fi")}>
🚀 Sci-Fi
</button>


<button onClick={()=>recommend("Thriller")}>
🖤 Thriller
</button>


</div>





<h2 className="title">

Recommended For You ✨

</h2>




<div className="movie-container">


{

filteredMovies.length > 0 ?


filteredMovies.map((movie)=>(


<MovieCard

key={movie.id}

movie={movie}

addFavourite={addFavourite}

/>


))


:

<h2>
No movies found 😢
</h2>


}



</div>




{

favourites.length > 0 &&

<section className="favourite">


<h2>
Your Favourite Movies ❤️
</h2>


{

favourites.map((movie)=>(

<p key={movie.id}>
⭐ {movie.title}
</p>

))

}


</section>


}



</div>


);


}


export default App;