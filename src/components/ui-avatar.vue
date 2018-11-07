<template>
    <div class="avatar">
        <div class="indicator" :class="state"></div>
        <p v-if="!image">{{ icon }}</p>
        <img 
            v-if="image"
            :src="image" 
            :alt="'avatar of' + label"
            >
    </div>
</template>

<script>
    export default {
        props: {
           label: String,
           image: String,
           state: String,
           color: String 
        },
        computed: {
            icon() {
                return this.label.substring(0, 2).toUpperCase();
            }
        }
    }
</script>

<style scoped>

</style>
