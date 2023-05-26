<template>
    <div class="container">
        <div v-if="bird" class="row">
            <div class="col">
                <div class="card">
                    <h1 class="card-header">Detalles</h1>
                    <div class="card-body">
                        <img :src="bird.images.main" class="card-img-top" alt="Bird Image" />
                        <p>{{ bird.name.spanish }}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h2>Descripción:</h2>
                        <p class="card-text">{{ bird.iucn.description }}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h2>Habitat:</h2>
                        <p class="card-text">{{ bird.habitat }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">Loading...</div>
    </div>
</template>
  
<script>
import { getDetails } from "../service/bird.service";

export default {
    name: "BirdDetail",
    props: {
        id: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            bird: null,
        };
    },
    async mounted() {
        const result = await getDetails(this.id);
        this.bird = result;
    },
};
</script>
  
<style></style>
  
  
  