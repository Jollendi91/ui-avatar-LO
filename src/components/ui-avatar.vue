<template>
    <div class="avatar" :style="{backgroundColor: color}">
        <div 
            class="indicator" 
            v-if="toDisplay"  
            :class="state">
        </div>
        <p 
            class="icon" 
            v-if="!image"  
            :title="label">{{ icon }}
        </p>
        <img 
            class="avatar-image"
            v-if="image"
            :src="image" 
            :alt="'avatar of ' + label">
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
                if(this.label) {
                    return this.label.substring(0, 2).toUpperCase();
                }
            },
            toDisplay() {
                if (this.state && this.state !== 'default') {
                    return true;
                }
                else {
                    return false;
                }
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
        position: relative;
        display: inline-block;
    }

    p{
        margin: 0;
    }

    .avatar-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .indicator {
        position: absolute;
        top: 0;
        right: 0;
        width: 15px;
        height: 15px;
        border: 2px solid white;
        border-radius: 50%;
    }

    .default {
        display: none;
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
