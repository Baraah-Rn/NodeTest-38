import app from '../app.js';
import supertest from "supertest";
import { movies} from "../controller/moviesController";


const request = supertest(app);


describe("Get /movies", () => {
    describe("check if we can GET the movies list ", () => {
        it("server will respond with a 200 status code", async () => {
            const response = await request.get("/movies");
            expect(response.statusCode).toBe(200);
        });
    });
});

describe("POST /movies", () => {
    describe("check if the movies's title director and releaseDate  are valid", () => {
        it("server will respond with a 200 status code", async () => {
            const response = await request.post("/movies").send({ 
                title: "movie1", 
                director: "John Doe", 
                releaseDate: "2020-09-28" })

            expect(response.statusCode).toBe(200);
        });
    });
    describe("check if the movie's title is undefined ", () => {
        it("server will respond with a 400 status code", async () => {
            const response = await request.post("/movies").send({ title: "" })
            expect(response.statusCode).toBe(400);
        });
    });
    describe("check if the movie's director is undefined ", () => {
        it("server will respond with a 400 status code", async () => {
            const response = await request.post("/movies").send({ director: "" })
            expect(response.statusCode).toBe(400);
        });
    });
    describe("check if the movie's releaseDate is undefined ", () => {
        it("server will respond with a 400 status code", async () => {
            const response = await request.post("/movies").send({ releaseDate: "" })
            expect(response.statusCode).toBe(400);
        });
    });

});


describe("Delete /movies/:id", () => {
    describe("check if the movie's Id is exist to be delete  ", () => {
        it("server will respond with a 200 status code", async () => {
            
            const response = await request.delete(`/movies/${ movies[0].id}`);

            const res ={}
            expect(response.statusCode).toBe(200);
            expect (response.body).toEqual(res);
        });
    });
    describe("check if the movie's Id isn't exist to be deleted ", () => {
        it("server will respond with a 200 status code", async () => {
            const response = await request.delete("/movies/:id");
            expect(response.statusCode).toBe(404);
        });
    });
});



describe("Get /movies/:id", () => {
    describe("check if the movie's Id is exist to be viewed  ", () => {
        it("server will respond with a 200 status code", async () => {
            
            const response = await request.get(`/movies/${ movies[0].id}`)

            const res ={
                id : `${ movies[0].id}`,
                title:`${ movies[0].title}`, 
                director: `${ movies[0].director}`,
                releaseDate: `${ movies[0].releaseDate}`
            }

            expect (response.body).toEqual(res);
            expect(response.statusCode).toBe(200);
        });
    });
    describe("check if the movie's Id isn't exist to be deleted ", () => {
        it("server will respond with a 200 status code", async () => {
            const response = await request.get("/movies/:id");
            expect(response.statusCode).toBe(404);
        });
    });
});


