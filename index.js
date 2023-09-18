

function caesarCipher(str, shift) {
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
 
   
      if (/[\a-zA-Z]/.test(char)) {
   
        let isUpperCase = char === char.toUpperCase();
       let alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
       char = String.fromCharCode(((char.charCodeAt(0) - alphabetStart + shift)) + alphabetStart);
     }
 
   
      result += char;
   }
 
   return result;
  
 }
 

 console.log( caesarCipher("SERR CVMMN!", 13));