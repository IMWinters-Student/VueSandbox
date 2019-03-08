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
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            'app-header': Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style scoped>
    .container{
        height: 100%;
    }
 
  @media(min-height: 850px){
      .bodyContent{
          height: auto;
          
      }
  }
    .bodyContent{

        display: flex;
        width: 100%;
        height: 800px;
        top: 200px;
        bottom: 150px;
        align-items: center;
        justify-content: center;
        border: 2px black;
    }

    .header{
        align-self: center;
        display: flex;
        position: fixed;
        top:0;
        width: 98%;
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: 2px;
        box-shadow: 1px 1px 1px 1px #888888;
        padding: 2px;
        justify-content: center;
        align-items: flex-end;
    }

    .header ul {
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
    .footer{
        align-self: center;
        display: flex;
        position: fixed;
        bottom:0;
        width: 100%;
        height: 150px;
        align-items: center;
        justify-content: center;
        
    }


</style>
