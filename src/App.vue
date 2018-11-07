<template>
  <div>
    <ui-avatar 
      label="Joshua Ollendick" 
      image="https://c1.staticflickr.com/3/2813/33763063240_a966c3449e_q.jpg"
      state="available" 
      color="lightgreen"></ui-avatar>
  </div>
  
</template>

<script>
  import Avatar from './components/ui-avatar.vue';

  export default {
    components: {
      uiAvatar: Avatar
    }
  }
</script>

<style>
</style>
