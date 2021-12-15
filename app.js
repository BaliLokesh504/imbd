const express = require("express")
const app  = express()
const port = 8000

app.use(express.json())

const registerRouter = require("./src/routes/register")
const loginRouter = require("./src/routes/login")
const addMovieRouter = require("./src/routes/addMovie")
const favouriteGenre = require("./src/routes/favouriteGenre")
const customerRecomendedMovies = require("./src/routes/customerRecomendedMovies")
const moviesList = require("./src/routes/moviesList")
const addVotes = require("./src/routes/addVotes")
const addRevies = require("./src/routes/addRevies")

app.use("/api/v1/user",registerRouter)
app.use("/api/v1/user",loginRouter)
app.use("/api/v1/user",addMovieRouter)
app.use("/api/v1/user",favouriteGenre)
app.use("/api/v1/user",customerRecomendedMovies)
app.use("/api/v1/user",moviesList)
app.use("/api/v1/user",addVotes)
app.use("/api/v1/user",addRevies)

app.listen(port,()=>{
    console.log("connected to port", port)
})