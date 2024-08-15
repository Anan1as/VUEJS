<template>
    <div class="container-movies d-middle p-100">
        <CardMovieComponent 
            v-for="movie in listMovies" 
            :key="movie.imdbID"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
            :poster="movie.Poster"
        />
    </div>
</template>

<script setup lang="ts">
    import  { onMounted, ref } from 'vue'
    import HTTP from '@/api/client-http'
    import type { ApiResponse } from '@/model/movie.model'
    import CardMovieComponent from '@/components/movies/CardMovie.vue'

    const listMovies = ref<Movie[]>([])

    onMounted(() => {
        fetchMovies()
    })

    const fetchMovies = async () => {
        const response: ApiResponse = await HTTP.get('', {
            params: {
                s: 'movies',
            }
        })

        listMovies.value = response.data.Search;
        
    }
</script>

<style scoped lang="scss">
    .container-movies {
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
    }
</style>