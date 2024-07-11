<template>
    <header class="header">
        <div class="header__left">
            <div class="logo">
                <a href="/">
                    <img src="@/assets/html5-logo.png" alt="Logo HTML55">
                </a>
            </div>
        </div>
        <div class="header__right">
            <div class="header__title">
                Zadanie <b>rekrutacyjne</b><br>
            </div>
        </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>
  
  <style lang="scss" scoped>
@import '@/styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
body {
  font-family: 'Open Sans', sans-serif;
}
  .header {
    background-color: #0B0D11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
    height: 6rem; 
    
  
    @media (max-width: 960px) {
      padding: 1rem; 
      height: auto; 
      align-items: center;
    }
  
    &__left {
      display: flex;
  
      .logo {
        img {
          max-height: 3.125rem; 
          border-radius: 50%;
          filter: grayscale(100%);
          transition: filter 0.3s ease-in-out;
  
          @media (max-width: 960px) {
            max-height: 2.5rem;
          }
  
          &:hover {
            filter: grayscale(0%);
          }
        }
      }
    }
  
    &__right {
      flex: 1;
      text-align: right;
  
      .header__title {
        font-size: 1.25rem; 
        color: white;
        margin-bottom: 0.5rem;
  
        @media (max-width: 960px) {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }
  
        b {
          font-weight: bold;
        }
      }
    }
  }
  </style>
  