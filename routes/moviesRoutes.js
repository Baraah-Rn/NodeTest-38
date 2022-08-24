import express from 'express';
const router = express.Router();
import { createMovies, readMovies, readMoviesById, deleteMoviesById } from '../controller/moviesController.js';


router.get('/',readMovies);

router.post('/', createMovies);

router.get('/:id',readMoviesById );

router.delete('/:id',deleteMoviesById )


export default router;