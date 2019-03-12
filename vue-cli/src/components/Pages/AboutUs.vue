<template>
    <div>
        Our Team:
        <ul >
            <one-of-us v-for="(teamMember, index) in team" :name="teamMember.name" :img="teamMember.img" :bio="teamMember.bio" :key="index"/>
        </ul>
    </div>
</template>

<script>
import OneOfUs from './OneOfUs.vue'

export default {
    components: {
            OneOfUs
        },
   data: function(){       
       return{
           team:{ 
               1:{name:"Harry W.", bio: "Grass Valley, CA", img:""},
               2:{name: "Isaac W.", bio: "Grass Valley, CA", img:""}
           }
           
       }
   }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }
    li {
        
        border-radius: 5px;
        padding: 4px;
        margin-top: 3px;
        margin-bottom: 3px;
        box-shadow: 2px 2px 2px grey;
        text-decoration: none;
    }
</style>
