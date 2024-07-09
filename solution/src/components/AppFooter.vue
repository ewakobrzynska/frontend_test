<template>
    <footer>
        <div class="footer-left">
            <div class="text">CSS<br>IS<br>AWESOME</div>
        </div>
        <div class="footer-center">
            <div class="text">nabthat</div>
        </div>
        <div class="footer-right">
            <div class="dropdown">
                <button id="showMenu">Menu Pokaż</button>
                <div class="popup-menu" id="popupMenu">
                    <ul>
                        <li><a href="#" id="restoreDefaults">Przywróć ustawienia</a></li>
                        <li><a href="#" id="addName">Dodaj imię i nazwisko</a></li>
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
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
}
</script>

<style scoped>
footer {
    background-color: #15161A;
    border-top: 1px solid #ccc;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
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
    border: 2px solid black; 
    transition: border-color 0.3s; 
    color: #A4A8B1;
}

.footer-left:hover {
    border-color: orange;
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

/* Style dla menu rozwijanego */
.dropdown {
    position: relative;
    display: inline-block;
}

.popup-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
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
}

.popup-menu li a:hover {
    background-color: #ddd;
}

/* Pokazywanie menu po kliknięciu */
.show {
    display: block;
}
</style>
