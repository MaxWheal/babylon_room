<template>
  <div>
    <h1>Babylon Examples</h1>
    <canvas></canvas>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SceneBuilder as SceneBuilder } from "@/SceneBuilder";

export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
    const canvas = document.querySelector("canvas")!;
    new SceneBuilder(canvas);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding:0;
  margin:0;
  background-color: rgb(36, 36, 36);  
  background-size: cover;
  background-position:center;
}
#app {
  width:100%;
  height:100%; 
  display:flex;
  justify-content: center;
  align-items: center; 
  margin-top:4rem;
}
div {
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
}

h1 {
  color: white;
  background: none;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
}

canvas {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  box-shadow: 8px 8px 10px -6px #000000;
}
</style>