<template>
    <div>
        <h3>Our Team:</h3>
        <ul >
            <one-of-us v-for="(teamMember, index) in team" :name="teamMember.name" :image="teamMember.image" :bio="teamMember.bio" :key="index"/>
        </ul>
    </div>
</template>

<script>
import OneOfUs from './OneOfUs.vue';
import {mapGetters} from 'vuex';

export default {
    components: {
            OneOfUs
        },
    computed:{ 
        ...mapGetters([
            'DoubleX'
            ])
    },

    data: function(){
              
       return{
           team:{ 
               1:{name:"Harry W.", bio: "From Grass Valley, CA. Also very tall and loves long walks on the beach and low maintinance pets.", image:""},
               2:{name: "Isaac W.", bio: "Please just give me some food...", image: this.$store.state.IsaacImage}
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
