<template>
    <div class="container">
      <h1 class="text-center">HOME</h1>
      <div class="row">
        <div class="col-md-4" v-for="bird in birds" :key="bird.uid">
          <div class="card mb-3">
            <img :src="bird.images.main" class="card-img-top" alt="Bird Image" />
            <div class="card-body">
              <h5 class="card-title">{{ bird.name.spanish }}</h5>
              <router-link :to="`/bird-details/${bird.uid}`" class="btn btn-primary">Ver detalles</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { listBirds } from "../service/bird.service";
  
  export default {
    name: "HomePage",
    data() {
      return {
        birds: [],
      };
    },
    async mounted() {
      const result = await listBirds({ limit: 50, offset: 0 });
      this.birds = result;
    },
  };
  </script>
  
  <style>
  </style>
  
  