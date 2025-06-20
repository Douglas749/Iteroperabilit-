<template>
  <div class="barretitre">
    <AppTitle />
    <Search />
    <Notification />
    <Inscription />
  </div>

  <div class="dashboard">
    <h1 class="dashtitle">Tableau de Bord</h1>
    <p class="par">Gérez efficacement les emprunts, retours et membres de votre bibliothèque</p>
  </div>

  <div>
    <dash />
  </div>
  <div>
    <h1 class="secondetitle">Actions Rapide</h1>
  </div>
  <div class="rapide">
    <action/>
  </div>
  <div>
    <h1 class="ka">Catalogue du Livre</h1>
  </div>
  <div class="catalo">
    <cataloge/>
  </div>
</template>
<script>
import AppTitle from './components/appTitle.vue'
import Search from './components/search.vue'
import Inscription from './components/inscription.vue'
import Notification from './components/notification.vue'
import dash from './components/dash.vue'
import action from './components/activitydash.vue'
import cataloge from './components/booklist.vue'

export default {
  components: {
    AppTitle,
    Inscription,
    Notification,
    Search,
    dash,
    action,
    cataloge
    
  }
}
</script>

<style scoped>
  .barretitre {
    display: flex;
    align-items: center;        
    justify-content: space-between; 
    padding: 16px 32px;
    background-color: #f0f0f0;
    gap: 20px;                  
    font-family: sans-serif;
  }

  .dashtitle{
    color: blue;
    margin-left: 30px;
    margin-top: 40px;
  }
  .par{
    margin-left: 30px;
  }
  .secondetitle{
    color: rgb(11, 98, 205);
    margin-left: 30px;
  }
  .rapide{
    margin-left: 30px;
    background-color: rgb(232, 243, 245);
    padding: 20px 50px;
  }
  .ka{
    color: blue;
    margin-left: 30px;
  }
</style>


