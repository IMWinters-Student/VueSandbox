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
    }
</style>
