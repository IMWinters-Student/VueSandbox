<template>
    <div >
        <p class="headline"> 
        Upcoming Adventures:
        </p>
        <ul>
            <li v-for="adventure in nextAdventures"> {{adventure.Event}} leaving on: {{adventure.Date}} </li>
        </ul>
    </div>
</template>

<script>
export default {
   data: function(){
       return{
           nextAdventures:{ 
               1:{Event:"Twitney", Date: "July 6, 2019"},
               2:{Event: "Escape the Rat Race", Date: "SOOON"}
           }
           
       }
   }
    }
</script>

<style scoped>
    .headline{
        position: fixed;
        left: 50px;
        top: 100px;
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
