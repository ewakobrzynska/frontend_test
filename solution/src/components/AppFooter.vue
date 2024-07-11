<template>
    <footer class="footer">
      <div class="footer__left">
        <div class="footer__text">
          CSS<br>IS<br>AWESOME
          <div class="footer__rotate-box"></div>
        </div>
      </div>
      <div class="footer__center">
        <div class="footer__text">nabthat</div>
      </div>
      <div class="footer__right">
        <div class="footer__dropdown">
          <button class="footer__button" @click="toggleMenu">POKAŻ<span class="arrow" :class="{ 'arrow--expanded': showMenu } " aria-hidden="true">&#10095;</span></button>
          <div class="footer__popup-menu" :class="{ 'footer__popup-menu--show': showMenu }">
            <ul class="footer__menu-list">
              <li class="footer__menu-item"><a href="#" @click="restoreDefaults"><span>&#10095;</span>ZRESETUJ USTAWIENIA</a></li>
              <li class="footer__menu-item"><a href="#" @click="addName"><span>&#10095;</span>POKAZ DANE OSOBOWE</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import EventBus from '@/EventBus'; 

  export default {
    name: 'AppFooter',
    data() {
      return {
        showMenu: false,
        originalTitle: "Zadanie <b>rekrutacyjne</b><br>",
        nameAdded: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      restoreDefaults() {
        document.querySelector('.header__title').innerHTML = this.originalTitle;
        this.nameAdded = false;
        EventBus.emit('resetSettings'); 
        this.closeMenu();
      },
      addName() {
        if (!this.nameAdded) {
          document.querySelector('.header__title').innerHTML += ' Ewa Kobrzyńska';
          this.nameAdded = true;
        }
        this.closeMenu();
      },
      closeMenu() {
        this.showMenu = false;
      },
    },
    mounted() {
      this.originalTitle = document.querySelector('.header__title').innerHTML;
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '@/styles/variables.scss';
  .footer {
    background-color: #15161A;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
  
    &__left, &__center, &__right {
      flex: 1;
    }
  
    &__left {
      position: relative;
      font-family: 'Open Sans', sans-serif;
      font-weight: 300; 
      transition: border-color 0.3s;
      color: #A4A8B1;
  
      .footer__text {
        position: relative;
        display: inline-block;
  
        &:hover .footer__rotate-box {
          animation: rotate 1s linear infinite;
          border: 0.125rem solid $hover-color;
        }
      }
  
      .footer__rotate-box {
        position: absolute;
        top: 0;
        right:0.3rem;
        width: 100%;
        height: 100%;
        border:0.01rem solid;
        box-sizing: border-box;
      }
    }
  
    &__center {
        justify-content: center;
        display: flex;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300; 

      .footer__text {
        display: flex;
        align-items: center;
        color: #272A2F;
        width: 30%;
  
        &::before,
        &::after {
          content: '';
          flex: 1;
          border-bottom: 0.0625rem solid #272A2F;
          margin: 0.2rem;
        }
      }
    }
  
    &__right {
      text-align: right;
  
      .footer__dropdown {
        position: relative;
        display: inline-block;
  
        .footer__button {
          background-color: transparent;
          border: 0.0625rem solid #A4A8B3;
          color: #A4A8B3;
          padding: 1rem 5rem;
          font-weight: bold;
          cursor: pointer;
          border-radius: 0.25rem;
          font-family: 'Open Sans', sans-serif;
          .arrow {
            margin-left: 1rem;
            display: inline-block;
            transform: rotate(270deg);
            &--expanded ,&:hover .arrow, &:focus .arrow {
              transform: rotate(90deg);
            }
          }
          &:hover{
              color:white;
          }
        }
  
        .footer__popup-menu {
          display: none;
          position: absolute;
          bottom: calc(100% + 1.85rem); 
          right: 0;
          background-color: #f9f9f9;
          z-index: 10;
          width: 100%;
          box-shadow: 0 -1rem 1rem rgba(0, 0, 0, 0.2), 1rem 0 1rem rgba(0, 0, 0, 0.2), -1rem 0 1rem rgba(0, 0, 0, 0.2); 
          &.footer__popup-menu--show {
            display: block;
          }
  
          .footer__menu-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
  
            .footer__menu-item {
              text-align: left;
              margin: 1rem;
  
              a {
                text-decoration: none;
                font-size: 85%;
                color: #333;
                display: block;
                
                &:hover {
                  color: $hover-color;
                }
              }
              a span {
                    margin-right: 0.5rem;
            }
            }
          }
        }
      }
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotateY(0deg) rotateX(0deg);
    }
    to {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }
  
  
  @media (max-width: 960px) {
    .footer {
      align-items: center; 
  
      .footer__center {
        display: none;
      }

      &__right {
        text-align: right;
    
        .footer__dropdown .footer__button {
            padding: 1rem 4rem;
        }
    
        &__button {
          width: 100%;
        }
      }
    }
  }
  </style>
  