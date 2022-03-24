let data;
const firstMovie = document.getElementById("first-movie")
const allMovies = document.getElementById("films")
//allMovies.append(img, movieTitle, movieRuntime, movieFilmInfo,movieShowtime,movieTicketNum)
const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    data = res;
    
}
request()

const deliverable1 = async () =>{
    await request();
    data.forEach((element) => {
    console.log("element", element)
    
    const img = document.getElementById("poster");
    img.setAttribute('src', element.poster)
    const movieTitle = document.getElementById("title")
    movieTitle.innerText = element.title;
    const movieRuntime = document.getElementById("runtime")
    movieRuntime.innerText = element.runtime;
    const movieFilmInfo = document.getElementById("film-info")
    movieFilmInfo.innerText = element.description;
    const movieShowtime = document.getElementById("showtime")
    movieShowtime.innerText = element.showtime;
    
   // const movieBuyTicket = document. getElementById("buy-ticket")
    //movieBuyTicket.innerText = 
    firstMovie.append(img, movieTitle, movieRuntime, movieFilmInfo,movieShowtime,movieTicketNum)
    

    })
}
deliverable1()
    const deliverable2 = async () =>{
        await request();
        data.forEach((element) => {
        console.log("element", element)

        const img = document.getElementById("poster");
    img.setAttribute('src', element.poster)
    const movieTitle = document.getElementById("title")
    movieTitle.innerText = element.title;
    const movieRuntime = document.getElementById("runtime")
    movieRuntime.innerText = element.runtime;
    const movieFilmInfo = document.getElementById("film-info")
    movieFilmInfo.innerText = element.description;
    const movieShowtime = document.getElementById("showtime")
    movieShowtime.innerText = element.showtime;
    const movieTicketNum = document.getElementById("ticket-num")
    movieTicketNum.innerText = element.capacity - element.ticket_num;
        
})
allMovies.append(img, movieTitle, movieRuntime, movieFilmInfo,movieShowtime,movieTicketNum)
    
}
deliverable2()











