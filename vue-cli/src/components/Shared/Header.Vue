<template>
    <div class="container"> 
        <h3 class="title">Los Cabalerbros</h3>
           <ul>
                <li >
                    <router-link class="navLink" to="/">Home</router-link>  
                </li>
                <li>
                    <router-link class="navLink" to="/Adventures">Adventures</router-link>  
                </li>
                <li>
                    <router-link class="navLink" to="/Gear">Gear</router-link>  
                </li>
                <li>
                    <router-link class="navLink" to="/AboutUs">About Us</router-link>  
                </li>
            </ul>
    </div>
</template>

<script>
</script>

<style scoped>
    .container{
        display: inline-flex;
        align-items: baseline;
        justify-content: flex-end;
        align-content: flex-end;
        width: 100%;
    }
    .title{
        margin: 15px;
        height: 50px;
        border-radius: 50%;
        width: 155px;
        padding-top: 22px;
        padding-left: 5px;
        background-color: black;
        color: honeydew;
        justify-content: center;
        align-content: center;
        font: italic bold 16px/1.5 Arial;
    }
    ul{
        display: inline-flex ;
        font-size: 20px;
        margin: 5px;
        list-style: none;
        width: 95%;
        justify-content: flex-end;
        margin-right: 25px;
    }
    li{
        padding: 8px;
        background-color:#F2CFB2;
        border-radius: 8px;
        margin: 3px;
    }
    .navLink{
  text-decoration: none;
  color: black
}

    .navLink :visited {
  text-decoration: none;
  color: black
}

</style>
