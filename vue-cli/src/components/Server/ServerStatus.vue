<template>
    <div>
        <p>Error 404: Page not found</p>
        <p> {{status}} </p>      
        <button @click="changeStatus" > Change Status </button>
        <hr>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            status: 'Critical'
        }
    },
    methods: {
        changeStatus(){
            this.status = 'Normal';
        }
    },
    computed: {

    }

}
</script>

<style lang="sass">

</style>