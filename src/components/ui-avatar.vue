<template>
    <div class="avatar">
        <div class="indicator" :class="state"></div>
        <p v-if="!image" :title="label">{{ icon }}</p>
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
    .avatar {
        font-size: 2.2em;
        text-align: center;
        line-height: 75px;
        width: 75px;
        height: 75px;
        margin: 10px;
        border-radius: 50%;
        color: white;
        background-color: grey;
        position: relative;
    }

    .indicator, .default {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 15px;
        height: 15px;
        border: 2px solid white;
        border-radius: 50%;
        background-color: red;
    }

    .online {
        background-color: rgb(0, 153, 255);
    }

    .available {
        background-color: aquamarine;
    }

    .dnd {
        background-color: coral;
    }
</style>
