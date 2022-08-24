import { v4 as uuidv4 } from 'uuid';


export let movies = [  {
    id :"96fcd35e-ef0a-4d8e-80b4-44819dc2ac07",
   title :"Inception",
   director :"Christopher Nolan",
   releaseDate : "2010-07-16"
},
{
   id : "1a4b76cc-e80a-49d2-a468-2a2cc3f71bd1",
  title :"Inception2",
  director :"Christopher Nolan",
  releaseDate : "2014-07-16"
}];



export const readMovies = (req, res) => {
    res.send( movies)
}

export const createMovies = (req, res) => {
    if (invalidReq(req,res)) {
        res.status(400);
        return;
    };
    const moviesId = uuidv4();

    const newMovie = {
        id: moviesId,
        title :req.body.title,
        director :req.body.director,
        releaseDate : req.body.releaseDate
    };
    movies.push(newMovie);
    res.status(200);
    res.send(`The movie with title  ${newMovie.title} has been created successfully.
    The Move's ID is ${newMovie.id}`);
}

export const readMoviesById = (req, res) => {
    const { id } = req.params;
    const foundMovies=  movies.find(movie => movie.id === id);

    if (!foundMovies) {
        res.status(404);
        res.send(`there is no movie with this id : ${id}`);
        return;
    }
    res.send(foundMovies)
};

export const deleteMoviesById = (req, res) => {
    const { id } = req.params;
    const deleteMovie = movies.find(movie => movie.id === id);

    if (!deleteMovie) {
        res.status(404);
        res.send(`Delete failed, there is no movie with this id : ${id}`);
        return;
    };
    movies.splice( movies.indexOf(deleteMovie), 1);
    res.status(200)
    res.send(`The movie with id: ${id} has been deleted`)

};


function invalidReq(req,res) {
    
 if(typeof req.body.title == "undefined"){
    res.status(400);
    res.send('invalid request, Title is missing');
    return;
}else if(typeof req.body.director == 'undefined'){
    res.status(400);
    res.send('invalid request, Director is missing');
    return;
}else if (typeof req.body.releaseDate == 'undefined'){
    res.status(400);
    res.send('invalid request, releaseDate is missing');
    return;
}

}


export default  movies;