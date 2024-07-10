<template>
    <main class="main-content">
        <h1 class="main-header">Nagłówek H1</h1>
        <div class="column-container">
            <div class="column">
                <div class="block">
                    <div class="block__title">BLOK PIERWSZY</div>
                    <div class="block__radio-buttons">
                        <label :class="{ 'block__radio-button--selected': selectedOption === 'first' }" class="block__radio-button">
                            <input type="radio" name="option" value="first" @change="handleOptionChange" aria-label="Opcja pierwsza"> Opcja pierwsza
                        </label>
                        <label :class="{ 'block__radio-button--selected': selectedOption === 'second' }" class="block__radio-button">
                            <input type="radio" name="option" value="second" @change="handleOptionChange" aria-label="Opcja druga"> Opcja druga
                        </label>
                        <label :class="{ 'block__radio-button--selected': selectedOption === 'random' }" class="block__radio-button">
                            <input type="radio" name="option" value="random" @change="handleOptionChange" aria-label="Opcja losowa"> Opcja losowa
                        </label>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="block">
                    <div class="block__title">BLOK DRUGI</div>
                    <div class="block__tile">
                        <button class="block__action-button" @click="handleTileChange('zastap')">
                            <b>ZASTĄP</b>
                        </button>
                        <button class="block__action-button" @click="handleTileChange('doklej')">
                            <b>DOKLEJ</b>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="block">
                    <div class="block__title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SIĘ SAMA ODPOWIEDNIO PRZYTNIE</div>
                    <div class="block__content">
                        <p>{{ contentList.join(' ') }}</p>
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

<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #2A2D36;
  color: white;
  min-height: 100vh;
}

.main-header {
  text-align: center;
  margin-bottom: 5vh;
  text-decoration: underline solid white 1px;
}

.column-container {
  display: flex;
  justify-content: space-between;
  max-width: 98vw;
  width: 100%;
  @media (max-width: 60rem) {
    flex-direction: column;
    align-items: center;
  }
}

.column {
  flex: 1;
  margin-right: 1.25rem;
  @media (max-width: 60rem) {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
}

.block {
  padding: 1.25rem;
}

.block__title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15%;
  text-align: center;
}

.block__radio-buttons {
  display: flex;
  flex-direction: column;
}

.block__radio-button {
  margin-bottom: 0.625rem;
}

.block__radio-button--selected {
  font-weight: bold;
}

.block__tile {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.block__action-button {
  background-color: #2A2D36;
  border: ridge white;
  color: #A3A8B7;
  padding: 1rem 3.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  height: 3rem;
  &:hover {
    background-image: linear-gradient(135deg, #e78302, #ffab3c);
    color: white;
  }
}

.block__content {
  text-align: center;
  font-weight: lighter;
}

.block__content p {
  margin: 0.3125rem 0;
  color: #888C97;
  white-space: pre-wrap;
}
</style>
