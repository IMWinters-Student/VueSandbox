<template>
    <div>
        Our Team:
        <ul >
            <one-of-us v-for="(teamMember, index) in team" :name="teamMember.name" :image="teamMember.image" :bio="teamMember.bio" :key="index"/>
        </ul>
    </div>
</template>

<script>
import OneOfUs from './OneOfUs.vue';
import Isaac from '../../assets/21b7e24f-5357-4e98-8dc0-727fa0a0a489.jpg'

export default {
    components: {
            OneOfUs
        },
   data: function(){
              
       return{
           team:{ 
               1:{name:"Harry W.", bio: "From Grass Valley, CA", image:""},
               2:{name: "Isaac W.", bio: "Please just give me some food...", image: Isaac}
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
