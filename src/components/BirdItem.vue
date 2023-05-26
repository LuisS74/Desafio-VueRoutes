<template>
    <div @click="showDetails(bird)">
      {{ bird.name.spanish }}
    </div>
  </template>
  
  <script>
  export default {
    name: "BirdItem",
    props: {
      bird: {
        type: Object,
        default: null,
      },
    },
    methods: {
      showDetails(bird) {
        const birdId = bird.uid;
        this.$router.push({
          name: "bird_details",
          params: {
            id: birdId,
          },
        });
      },
    },
  };
  </script>
  
  <style>
  </style>