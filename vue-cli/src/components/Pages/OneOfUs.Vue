<template>
    <div  class="person">
        <img :src="image">
        <p class="headline"> {{name}}</p>
        <p> {{bio}} </p>
    </div>
</template>

<script>
export default {
    props: ['name', 'bio', 'image']
    
    }
</script>

<style scoped>
    img{
        border-radius: 50%;
        height: 125px;
        width: 125px;
        box-shadow: 1px 1px gray;
    }
</style>
