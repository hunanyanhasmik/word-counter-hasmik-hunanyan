const textInput = document.getElementById("textInput");
const backgroundGeneratorButton = document.getElementById("btn");


// character is a letter

function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

// analyzer function

function analyzerFunc() {
    const text = textInput.value;

    let letters = 0;
    let words = 0;
    let sentences = 0;
    let inWord = false;
    let charsWithoutSpaces = 0;

    const sentenceMarks = ['.', '!', '?', '。', '！', '？', '¿', '¡'];
    const whitespace = [' ', '\n', '\t'];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Count Letters
        if (isLetter(char)) {
            letters++;
        }

        // Count Words 
        if (whitespace.includes(char)) {
            inWord = false;
        } else {
            if (!inWord) {
                words++;
                inWord = true;
            }
        }

        // Count Sentences
        if (sentenceMarks.includes(char)) {
            if (i === 0 || !sentenceMarks.includes(text[i - 1])) {
                sentences++;
            }
        }


        // Count characters without spaces
        if (!whitespace.includes(char)) {
            charsWithoutSpaces++;
        }
    }

    document.getElementById('letters').textContent = letters;
    document.getElementById('words').textContent = words;
    document.getElementById('sentences').textContent = sentences;
    document.getElementById("charsWithSpaces").textContent = text.length;
    document.getElementById("charsWithoutSpaces").textContent = charsWithoutSpaces;
}

// analyzer event

textInput.addEventListener("input", analyzerFunc);

// background generator

function getRandomBackgroundColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


function changeBackgroundColor() {
    const randomColor = getRandomBackgroundColor();
    document.body.style.backgroundColor = randomColor;
}

backgroundGeneratorButton.addEventListener("click", changeBackgroundColor);












