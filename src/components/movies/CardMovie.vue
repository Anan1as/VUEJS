<template>
    <div class="card-movie">
        <h3 class="title-card"> {{ props.title }} </h3>
        <img :src="props.poster" :alt="props.title">
        <p>
            <span>Año</span>
            {{ props.year }}
        </p>
        <p>
            <span>Tipo</span>
            {{ props.type }}
        </p>

        <router-link :to="{ name: 'movie-details', params: {id: props.id} }">Ver detalles</router-link>
    </div>
</template>

<script setup lang="ts">
    interface IProps {
        title: string;
        poster: string;
        year: string;
        type: string;
        id: string;
    }

    const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
    .card-movie {
        height: 100%;
        width: 300px;
        background: $secondary;
        padding: 10px;
        text-align: center;
        border: 2px solid $primary;
        border-radius: 10px;

        .title-card {
            color: $white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            color: $white;
            span {
                color: $primary;
                font-weight: bold;
            }
        }

        img {
            width: 90%;
            height: 300px;
            object-fit: scale-down;
            border-radius: 10px;
        }
    }
</style>