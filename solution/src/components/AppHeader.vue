<template>
    <header>
        <div class="header-left">
            <div class="logo">
                <a href="/">
                    <img src="@/assets/html5-logo.png" alt="Logo HTML55">
                </a>
            </div>
        </div>
        <div class="header-right">
            <div class="header-title">
                Zadanie rekrutacyjne<br>
                Ewa Kobrzyńska
            </div>
        </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>
  
  <style scoped>
 header {
    background-color: #0B0D11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.header-left {
    display: flex;
    align-items: center;
}

.header-right {
    flex: 1;
    text-align: right;
}

/* Logo style */
.logo img {
    max-height: 50px;
    border-radius: 50%;
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
}

.logo img:hover {
    filter: grayscale(0%);
}

.header-title {
    font-size: 1.2rem;
    color: white;
}
  </style>
  