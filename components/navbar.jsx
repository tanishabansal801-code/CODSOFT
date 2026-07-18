function Navbar({setSearch}){


return(

<nav>


<h1>
CineAI
</h1>


<input

type="text"

placeholder="Search movie..."

onChange={(e)=>
setSearch(e.target.value)
}

/>


</nav>


)

}


export default Navbar;