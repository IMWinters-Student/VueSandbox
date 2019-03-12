<template>
    <div class="container">
        <div class="header">
        <app-header />
        </div>
        
        <div class="bodyContent">
            <router-view></router-view>
        </div>
        
        <app-footer class="footer"/>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Home from './components/Pages/Home.vue';
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
        background-color: white;
        padding-left: 150px;
        display: flex;
        width: 100%;
        height: 850px;
        align-items: center;
        justify-content: left;

    }

    .header{
        background-color: #A6B170;
        position: fixed;
        top:0;
        width: 99%;
        border: 1px solid grey;
        box-shadow: 2px;
        box-shadow: 1px 1px 1px 1px #888888;

    }

 
    .footer{
        align-self: center;
        display: flex;
        bottom:0;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #A6B170;
        box-shadow: 2px 2px #888888;
        
    }


</style>
