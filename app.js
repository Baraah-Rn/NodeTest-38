import express from 'express';
import bodyParser from "body-parser";
import usersRoutes from "./routes/moviesRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/movies', usersRoutes);



app.listen(PORT, ()=>{
    console.log(`The app is listing to port: http://localhost:${PORT}/movies`);
});

export default app