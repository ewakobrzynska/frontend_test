<template>
    <main class="main-content">
        <div class="column">
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK PIERWSZY</div>
                    <div class="radio-buttons">
                        <label><input type="radio" name="option" value="first"> Opcja 1</label>
                        <label><input type="radio" name="option" value="second"> Opcja 2</label>
                        <label><input type="radio" name="option" value="random"> Opcja losowa</label>
                    </div>
                </div>
            </div>
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK DRUGI</div>
                    <div class="tile">
                        <label><input type="radio" name="tile" value="zastap"> Zastąp</label>
                        <label><input type="radio" name="tile" value="doklej"> Doklej</label>
                    </div>
                </div>
            </div>
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SIĘ SAMA ODPOWIEDNIO PRZYTNIE</div>
                    <div class="content-block">      
                    </div>
                </div>
            </div>
        </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'MainContent',
  }
  </script>
  
  <style scoped>
  .main-content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #2A2D36;
}

.column {
    flex: 1;
    padding: 10px;
}

.column-item {
    flex: 1;
    margin-right: 20px;
}

.block {
    margin-bottom: 20px;
}

/* Style dla ostatniej kolumny */
.column-item:last-child .block-title {
    /* Stylizacja bloku z długą nazwą */
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.content-block {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 200px;
}

.radio-buttons {
    display: flex;
    flex-direction: column;
}

.radio-buttons label {
    margin-bottom: 10px;
}

.tile {
    display: flex;
    flex-direction: column;
}

.tile label {
    margin-bottom: 10px;
}

.block-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.content-block {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 200px;
}
  </style>
  