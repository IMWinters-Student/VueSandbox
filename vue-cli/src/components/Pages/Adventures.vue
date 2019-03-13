<template>
    <div >
        <p class="headline"> 
        Upcoming Adventures:
        </p>
        <ul>
            <li v-for="(adventure, index) in $store.getters.getAdventures" :key="index"> {{adventure.name}} leaving on: {{adventure.departure}} </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
}
</script>

<style scoped>
    .headline{
        position: fixed;
        left: 150px;
        top: 350px;
    }
    ul{
        list-style: none;
    }
    li {
        
        border-radius: 5px;
        border: 1px solid grey;
        padding: 4px;
        margin-top: 3px;
        margin-bottom: 3px;
        box-shadow: 2px 2px 2px grey;
        text-decoration: none;
    }
</style>
