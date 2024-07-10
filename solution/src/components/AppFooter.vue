<template>
    <footer>
        <div class="footer-left">
            <div class="text">CSS<br>IS<br>AWESOME</div>
            <div class="rotate-box"></div>
        </div>
        <div class="footer-center">
            <div class="text">nabthat</div>
        </div>
        <div class="footer-right">
            <div class="dropdown">
                <button @click="toggleMenu">POKAŻ</button>
                <div class="popup-menu" :class="{ show: showMenu }">
                    <ul>
                        <li><a href="#" @click="restoreDefaults">Zresetuj ustawienia</a></li>
                        <li><a href="#" @click="addName">Pokaz dane osobowe</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      showMenu: false,
      originalTitle: "Zadanie <b>rekrutacyjne</b>",
      nameAdded: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    restoreDefaults() {
      document.querySelector('.header-title').innerHTML = this.originalTitle;
      this.nameAdded = false;
      this.closeMenu();
    },
    addName() {
      if (!this.nameAdded) {
        document.querySelector('.header-title').innerHTML += 'Ewa Kobrzyńska';
        this.nameAdded = true;
      }
      this.closeMenu();
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
  mounted() {
    this.originalTitle = document.querySelector('.header-title').innerHTML;
  }
}
</script>

<style scoped>
footer {
    background-color: #15161A;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.footer-left {
    flex: 1;
    display: inline-block;
    position: relative;
    padding: 5px;
    font-family: Arial, sans-serif;
    width: 100px;
    height: 100px;
    transition: border-color 0.3s;
    color: #A4A8B1;
}
.footer-left .rotate-box {
    position: absolute;
    width: 70px;
    height: 70px;
    border: 2px solid;
    box-sizing: border-box;
}
.footer-left:hover .rotate-box {
    animation: rotate 1s linear infinite;
    border: 2px solid #E78302
}

.footer-center {
    flex: 1;
}

.footer-center .text {
    display: flex;
    align-items: center;
    color: #272A2F;
}

.footer-center .text::before,
.footer-center .text::after {
    content: '';
    flex: 10px;
    border-bottom: 1px solid #272A2F;
    margin: 0 4px;
    width: 5px;
}

.footer-right {
    flex: 1;
    text-align: right;
}

.dropdown {
    position: relative;
    display: inline-block;
    width: 165px;
    height: 30px;
}

.dropdown button {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
}
.dropdown button::after {
    content: '❯';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.popup-menu {
    display: none;
    position: absolute;
    bottom: 100%;
    right: 0;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    width: 165px;
}

.popup-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.popup-menu li {
    padding: 10px 15px;
    text-align: left;
}

.popup-menu li a {
    text-decoration: none;
    color: #333;
    display: block;
}

.popup-menu li a::before {
    content: '❯';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.popup-menu li a:hover {
    background-color: #ddd;
}

.popup-menu.show {
    display: block;
}

/* Styles for rotating box */
.rotate-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #E78302;
    box-sizing: border-box;
}

@keyframes rotate {
    from {
        transform: rotateY(0deg);
        transform: rotateX(0deg);
    }
    to {
        transform: rotateY(180deg);
        transform: rotateX(180deg);
    }
}
</style>
