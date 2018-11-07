<template>
  <div>
    <ui-avatar 
      :label="label"
      :image="image"
      :state="state"
      :color="color"
      ></ui-avatar>
  </div>
  
</template>

<script>
  import Avatar from './components/ui-avatar.vue';

  export default {
    data() {
      return {
        label: "Joshua Ollendick",
        image: "https://c1.staticflickr.com/3/2813/33763063240_a966c3449e_q.jpg",
        state: "available",
        color: "lightgreen"
      }
    },
    components: {
      uiAvatar: Avatar
    }
  }
</script>

<style>
</style>
