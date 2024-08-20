<template>
    <div class="container-movies d-middle p-100">
        <CardMovieComponent 
            v-for="movie in store.listMovies" 
            v-if="store.listMovies"
            :id="movie.imdbID"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
            :poster="movie.Poster"
        />
        <div class="d-middle w-100" v-else>
            <p>No hay resultados en la busqueda.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import  { onMounted } from 'vue'
    import CardMovieComponent from '@/components/movies/CardMovie.vue'
    import { useMoviesStore } from "@/store/movie.store"
    

    const store = useMoviesStore()
    onMounted(() => {
        fetchMovies()
    })

    const fetchMovies = async () => {
        await store.getMovies()
    }
</script>

<style scoped lang="scss">
    .container-movies {
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
    }

    p {
        color: $white;
    }
</style>