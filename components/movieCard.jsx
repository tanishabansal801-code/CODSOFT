function MovieCard({ movie, addFavourite }) {


return (

<div className="card">


<img

src={movie.image}

alt={movie.title}

/>



<div className="content">


<h2>
{movie.title}
</h2>



<p>
{movie.description}
</p>



<h3>
⭐ {movie.rating}
</h3>



<p>

🎬 {movie.genre}

&nbsp; | &nbsp;

📅 {movie.year}

</p>




<button

onClick={()=>addFavourite(movie)}

>

❤️ Add Favourite

</button>



</div>


</div>

);


}


export default MovieCard;