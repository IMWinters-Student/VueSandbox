<template>
    <div>
        Our Team:
        <ul>
            <li v-for="teamMember in team"> {{teamMember.Name}} from {{teamMember.From}} </li>
        </ul>
    </div>
</template>

<script>
export default {
   data: function(){
       return{
           team:{ 
               1:{Name:"Harry W.", From: "Grass Valley, CA"},
               2:{Name: "Isaac W.", From: "Grass Valley, CA"}
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
