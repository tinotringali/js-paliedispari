'use strict';

const input = prompt("Inserisci una parola");
console.log(input);

function palindromeWord(word){
    let palindrome = '';

    for(let i = word.length - 1; i >= 0; i--){
      palindrome += word[i];
      console.log(palindrome);
    }
    return palindrome;
}

  if(input === palindromeWord(input)){
    console.log(palindromeWord(input));
    alert("E' palindroma");
  }else{
    alert("Non è palindroma");
}