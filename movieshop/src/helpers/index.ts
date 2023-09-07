import type { IMovie } from "@/models/IMovie";

export const handleImgError = (movie: IMovie) => {
    console.log(movie.name + 'trasig länk');
    movie.imageUrl = 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg';
}