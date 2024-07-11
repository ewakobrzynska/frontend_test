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
                        <button class="block__action-button" @mousemove="handleMouseMove" @mouseleave="resetGradient" @click="handleTileChange('zastap')">
                            <b>ZASTĄP</b>
                        </button>
                        <button class="block__action-button" @mousemove="handleMouseMove" @mouseleave="resetGradient" @click="handleTileChange('doklej')">          
                            <b>DOKLEJ</b>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="block">
                    <div class="block__title">BLOK Z DŁUGĄ NAZWĄ, KTÓRA SAMA SIĘ PRZYTNIE</div>
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
import EventBus from '@/EventBus'; 

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
        },
        handleMouseMove(event) {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        },
        resetGradient(event) {
            const button = event.currentTarget;
            button.style.setProperty('--x', '50%');
            button.style.setProperty('--y', '50%');
        },    
        resetContentBlock() {
          this.contentList = [];
        }
     },
    mounted() {
        EventBus.on('resetSettings', () => {
            this.resetContentBlock();
        });
     }
}   

</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: $main-bg-color;
  color: $text-color;
  min-height: 100vh;
}

.main-header {
  text-align: center;
  margin-bottom: 5vh;
  padding-bottom: 1rem;
  line-height: 1.5;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300; 
}

.main-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 0.5px;
  background-color: $text-color;
}

.column-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 98vw;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300; 
  @media (max-width: 960px) {
    justify-content: center;
  }
}

.column {
  flex: 2;
  min-width: 9rem; 
  
  @media (max-width: 960px) {
    margin:0 -0.6rem;
    &:nth-child(3) {
      margin-top: 2rem;
    }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-family: 'Open Sans', sans-serif;

}

.block__radio-buttons {
  display: flex;
  flex-direction: column;
}

.block__radio-button {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.block__radio-button input[type="radio"] {
  appearance: none;
  background-color: $main-bg-color;
  border: 2px solid $text-color;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  position: relative;
  outline: none;
  margin-right: 1rem;
}

.block__radio-button input[type="radio"]:checked::before {
  content: '';
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  background-color: $text-color;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.block__radio-button--selected {
  font-weight: bold;
}

.block__tile {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
}

.block__action-button {
  background-color: $main-bg-color;
  border: ridge $button-border-color;
  color: $text-color;
  padding: 1rem 3.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  height: 3rem;

  @media (max-width: 960px) {
    margin-bottom: 1rem;
    width: 100%;
  }

  &:hover {
    --x: 50%;
    --y: 50%;
    background-image: radial-gradient(circle at var(--x) var(--y), $accent-color, $hover-color);
    color: $text-color;
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