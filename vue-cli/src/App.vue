<template>
    <div class="container">
        <div class="header">
        <app-header />
        </div>
        
        <div class="bodyContent">
            
            <h1> 
                <router-view></router-view>
            </h1>

        </div>
        
        <app-footer class="footer"/>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Adventures from './components/Pages/Adventures.vue';
    import Gear from './components/Pages/Gear.vue';
    import Team from './components/Pages/AboutUs.vue';

    export default {
        components: {
            'app-header': Header,
            Adventures,
            Gear,
            'app-footer': Footer
        }
    }
</script>

<style scoped>
    .container{
        height: 100%;
        width: 100%;
    }
 
  @media(min-height: 850px){
      .bodyContent{
          height: auto;
          
      }
  }
    .bodyContent{
        background-color: #D6D5D1;
        display: flex;
        width: 100%;
        height: 850px;
        top: 200px;
        bottom: 150px;
        align-items: center;
        justify-content: center;

    }

    .header{
        background-color: #A6B170;
        position: fixed;
        top:0;
        width: 100%;
        border: 1px solid grey;
        box-shadow: 2px;
        box-shadow: 1px 1px 1px 1px #888888;

    }

 
    .footer{
        align-self: center;
        display: flex;
        border: 1px solid green;
        border-radius: 5px;
        bottom:0;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #A6B170;
        
    }


</style>
