<template>
    <div class="containerMovieSelected" v-if="store.selectedMovie">
        <div>
            <router-link :to="{ name: 'home' }" class="btnReturn"> <- Go back </router-link>
        </div>
        <h1>{{ store.selectedMovie.Title }}</h1>
        <hr>
        <div class="d-middle" style="margin-top: 50px;">
            <div style="margin-left: 5%;">
                <img class="imagePoster" :src="store.selectedMovie.Poster" alt="movie poster" />
            </div>
            <div class="containerDataMovie">
                <div class="dataMovieSpecial">
                    <p>{{ store.selectedMovie.Plot }}</p>
                    <div class="dataMovieInter">
                        <div>
                            <h2>Fecha de publicación</h2>
                            <p>{{ store.selectedMovie.Released }}</p>
                        </div>
                        <div>
                            <h2>Tiempo de video</h2>
                            <p>{{ store.selectedMovie.Runtime }}</p>
                        </div>
                    </div>
                </div>
                <div class="dataMovie">
                    <div>
                        <h2>Director</h2>
                        <p>{{ store.selectedMovie.Director }}</p>
                    </div>
                    <div>
                        <h2>Escritor(es)</h2>
                        <p>{{ store.selectedMovie.Writer }}</p>
                    </div>
                    <div>
                        <h2>Actor(es)</h2>
                        <p>{{ store.selectedMovie.Actors }}</p>
                    </div>
                </div>
                <div class="dataMovie">
                    <div>
                        <h2>Genero</h2>
                        <p>{{ store.selectedMovie.Genre }}</p>
                    </div>
                    <div>
                        <h2>Idioma</h2>
                        <p>{{ store.selectedMovie.Language }}</p>
                    </div>
                    <div>
                        <h2>País</h2>
                        <p>{{ store.selectedMovie.Country }}</p>
                    </div>
                </div>
                <div class="dataMovie">
                    <div>
                        <h2>Rating</h2>
                        <p>{{ store.selectedMovie.imdbRating }}</p>
                    </div>
                    <div>
                        <h2>Votos</h2>
                        <p>{{ store.selectedMovie.imdbVotes }}</p>
                    </div>
                    <div>
                        <h2>Premios</h2>
                        <p>{{ store.selectedMovie.Awards }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Pelicula no encontrada.</p>
    </div>
</template>

<script lang="ts" setup>
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue'
    import { useMoviesStore } from '@/store/movie.store';
    
    const route = useRoute()
    
    onMounted(async () => {
        await fetchMovie()
    });


    const movieId = route.params.id as string
    const store = useMoviesStore()
    const fetchMovie = async () => {
        await store.getSpecificMovies(movieId)
    }
</script>

<style lang="scss" scoped>
    .containerMovieSelected {
        color: $white;
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .imagePoster {
            border-radius: 10px;
        }

        .containerDataMovie {
            margin-left: 200px;
        }

        .dataMovieSpecial {
            background-color: $secondary;
            width: 80%;
            border: solid 1px $primary;
            border-radius: 10px;
            padding: 15px;

            .dataMovieInter {
                display: flex;
                justify-content: space-around;
                margin-top: 10px;
            }
        }

        .dataMovie {
            display: flex;
            width: 80%;
            justify-content: space-around;
            background-color: $secondary;
            border: solid 1px $primary;
            border-radius: 10px;
            padding: 15px;
            margin-top: 10px;
        }
    }

    h1 {
        color: $primary;
    }

    h2 {
        color: $context;
    }

    .btnReturn {
        background-color: $secondary;
        color: $primary;
        border: solid 1px $primary;
        padding: 10px;
        border-radius: 10px;
        position: fixed;
        top: 0px;
        left: 0px;
        margin: 10px;
    }
</style>