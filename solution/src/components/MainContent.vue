<template>
    <main class="main-content">
        <h1 class="main-header">Nagłówek H1</h1>
        <div class="column">
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK PIERWSZY</div>
                    <div class="radio-buttons">
                        <label><input type="radio" name="option" value="first" @change="handleOptionChange"> Opcja 1</label>
                        <label><input type="radio" name="option" value="second" @change="handleOptionChange"> Opcja 2</label>
                        <label><input type="radio" name="option" value="random" @change="handleOptionChange"> Opcja losowa</label>
                    </div>
                </div>
            </div>
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK DRUGI</div>
                    <div class="tile">
                        <button class="action-button" :class="{ active: selectedTileAction === 'zastap' }" @click="handleTileChange('zastap')">ZASTĄP</button>
                        <button class="action-button" :class="{ active: selectedTileAction === 'doklej' }" @click="handleTileChange('doklej')">DOKLEJ</button>
                    </div>
                </div>
            </div>
            <div class="column-item">
                <div class="block">
                    <div class="block-title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SIĘ SAMA ODPOWIEDNIO PRZYTNIE</div>
                    <div class="content-block">
                        <p v-for="(content, index) in contentList" :key="index">{{ content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import contentData from '@/assets/content.json';

export default {
    name: 'MainContent',
    data() {
        return {
            selectedOption: '',
            selectedTileAction: '',
            contentList: []
        };
    },
    methods: {
        handleOptionChange(event) {
            this.selectedOption = event.target.value;
        },
        handleTileChange(action) {
            this.selectedTileAction = action;
            this.updateContentBlock(action);
        },
        updateContentBlock(action) {
            if (this.selectedOption) {
                let selectedContent = '';

                switch (this.selectedOption) {
                    case 'first':
                        selectedContent = contentData[0].text;
                        break;
                    case 'second':
                        selectedContent = contentData[1].text;
                        break;
                    case 'random':
                        selectedContent = this.getRandomContent();
                        break;
                    default:
                        break;
                }

                if (action === 'zastap') {
                    this.contentList = [selectedContent];
                } else if (action === 'doklej') {
                    if (!this.contentList.includes(selectedContent)) {
                        this.contentList.push(selectedContent);
                        this.contentList.sort(); 
                    } else {
                        alert('Wybrana treść jest już dostępna w bloku.');
                    }
                }
            } else {
                alert('Wybierz opcję.');
            }
        },
        getRandomContent() {
            const unusedContents = contentData.filter(item => !this.contentList.includes(item.text));
            if (unusedContents.length === 0) {
                alert('Nie ma więcej unikalnych treści do dodania.');
                return '';
            }
            const randomIndex = Math.floor(Math.random() * unusedContents.length);
            return unusedContents[randomIndex].text;
        }
    }
}
</script>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 20px;
    background-color: #2A2D36;
    color: white;
    height: 100vh;
}

.main-header {
    text-align: center;
    margin-bottom: 40px;
    text-decoration: underline;
    position: relative;
}

.column {
    display: flex; 
    flex: 1; 
}

.column-item {
    flex: 1; 
    margin-right: 20px;
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
    flex-direction: row; 
    justify-content: space-between; 
}

.action-button {
    background-color: #2A2D36;
    border: 1px solid #ccc;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.action-button:hover {
    background-color:#E44D27;
}

.block-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: bold;
}

.content-block {
    padding: 10px;
    min-height: 200px;
}
</style>
