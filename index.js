const app = require("express")();
const PORT = 8080;

app.get('/genres', (req, res) => {
    res.status(200).send(genres);
})

const genres = ["Anime", "Emotional", "Hardcore", "Experimental Rock", "Folk Punk", "Gothic Rock", "Grunge", "Hardcore Punk", "Hard Rock", "Indie Rock", "Novelty", "Parody Music", "Stand-up Comedy", "Vaudeville", "Lo-fi"];


app.listen(
    PORT,
    () => console.log(`Server is live at http://localhost:${PORT}`)
);

export default app;