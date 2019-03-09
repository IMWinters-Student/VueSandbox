<template>
    <div class="container" >
        <p>CabalerBros</p>
        <p>{{status}}</p>  
        <button @click="changeStatus" class="button"> Change Status </button>
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
            if(this.status == 'Critical'){
            this.status = 'Normal';}
            else{
            this.status = 'Critical';
            }
        }
    },
    computed: {

    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    align-content: center;
    width: 100%;
}
.pUnderline{
    align-self: auto;
    text-decoration: none;

}
.button{
    background-color:brown;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
}
</style>