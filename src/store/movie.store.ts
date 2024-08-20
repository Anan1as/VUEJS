import type { Movie } from "@/model/movie.model";
import HTTP from "@/api/client-http";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as Movie[],
        selectedMovie: null as Movie | null
    }),
    actions: {
        async getMovies(Search: string = 'movies') {
            try {
                const response = await HTTP.get('', {
                    params: {
                        s: Search,
                    }
                });
                this.listMovies = response.data.Search;
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        },
        async getSpecificMovies(MovieId: string) {
            try {
                this.selectedMovie = null;
                const response = await HTTP.get('', {
                    params: {
                        i: MovieId
                    }
                });
                this.selectedMovie = response.data;
            } catch (error) {
                console.error("Error fetching specific movie:", error);
            }
        }        
    }
});