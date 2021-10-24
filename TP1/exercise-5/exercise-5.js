function vowelOrConsonant(letter) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  return vowels.includes(letter.toLowerCase()) ? "vowel" : "consonant" 
}

let letter = window.prompt("Enter a letter:")

console.log(`The letter '${letter}' is a ${vowelOrConsonant(letter)}.`)