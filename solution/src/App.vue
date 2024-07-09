<template>
  <div id="app">
    <AppHeader />
    <MainContent />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import MainContent from './components/MainContent.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainContent,
    AppFooter,
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, .app {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    overflow-x: hidden; 
}
/* Media query for responsiveness */
@media (max-width: 768px) {
    .column {
        flex-direction: column;
    }

    .column-item {
        margin-right: 0;
        margin-bottom: 20px;
    }

    .popup-menu {
        right: 10px;
        left: 10px;
    }
}
</style>
