const text = document.querySelector("textarea");

function handleClick(elementId, event) {
  document.getElementById(elementId).addEventListener("click", event)
}

handleClick("upper-case", () => {
  text.value = text.value.toUpperCase()
})

handleClick("lower-case", () => {
  text.value = text.value.toLowerCase();
})

handleClick("proper-case", () => {
  let allWords = text.value.split(" ");

  for (let i = 0; i < allWords.length; i++) {
    const currentWord = allWords[i];
    allWords[i] = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
  }
  text.value = allWords.join(" ");
})

handleClick("sentence-case", () => {
  const allSentences = text.value.split(/([!?.] )/); // regex checking for a !, ? or . followed by a space.

  text.value = allSentences
    .map(sentence => {
      return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
    })
    .join("");
})

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

handleClick("save-text-file", () => {
  download("text.txt", text.value);
})



// OLD CODE

// const upper = document.getElementById("upper-case");
// const lower = document.getElementById("lower-case");
// const proper = document.getElementById("proper-case");
// const sentence = document.getElementById("sentence-case");
// const text = document.querySelector("textarea");

// upper.addEventListener("click", () => {
//   text.value = text.value.toUpperCase();
// })


// lower.addEventListener("click", () => {
//   text.value = text.value.toLowerCase();
// })


// proper.addEventListener("click", () => {
//   let allWords = text.value.split(" ");
//
//   for (let i = 0; i < allWords.length; i++) {
//     const currentWord = allWords[i];
//     allWords[i] = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
//   }
//
//   text.value = allWords.join(" ");
// })


// sentence.addEventListener("click", () => {
//   const allSentences = text.value.split(". ");
//
//   for (let i = 0; i < allSentences.length; i++) {
//     const currentSentence = allSentences[i];
//     allSentences[i] = currentSentence[0].toUpperCase() + currentSentence.slice(1).toLowerCase();
//   }
//
//   text.value = allSentences.join(". ");
// })
