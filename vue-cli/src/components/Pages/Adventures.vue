<template>
    <div>
        Upcoming Adventures Here:
        <ul>
            <li v-for="adventure in nextAdventures"> {{adventure.Event}} Leaving on {{adventure.Date}} </li>
        </ul>
    </div>
</template>

<script>
export default {
   data: function(){
       return{
           nextAdventures:{ 
               1:{Event:"Twitney", Date: "July 6, 2019"},
               2:{Event: "Marble Mountains", Date: "June ?"}
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
