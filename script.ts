// 1. Write a ts program to find length of a string.
var Question1: () => void = () => {
  let userString: string | null = prompt("Please Enter String");
  let output1 = document.getElementById("output1") as HTMLDivElement | null;
  if (output1 && userString) {
    output1.innerHTML = `length of a string ${userString} is : ${userString.length}`;
  }
};

//2. Write a ts program to copy one string to another string.
var Question2: () => void = () => {
  let userString: string | null = prompt("Please Enter String");
  let output2 = document.getElementById("output2") as HTMLDivElement | null;
  if (output2 && userString) {
    output2.innerHTML = `Original string is ${userString} :  and copy string is ${userString.slice()}`;
  }
};

//3. Write a ts program to concatenate two strings.
var Question3: () => void = () => {
  let userString1: string | null = prompt("Please Enter String");
  let userString2: string | null = prompt("Please Enter String");
  let output3 = document.getElementById("output3") as HTMLDivElement | null;
  if (output3 && userString1 && userString2) {
    output3.innerHTML = `concatenate ${userString1} and ${userString2} is : ${userString1.concat(
      userString2
    )}`;
  }
};
//4. Write a ts program to compare two strings.
var Question4: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let userString2: string | null = prompt("Please Enter 2nd String");
  let output4 = document.getElementById("output4") as HTMLDivElement | null;
  if (output4 && userString1 && userString2) {
    output4.innerHTML = `compare string 1 ${userString1} to string 2 ${userString2} is :
     ${userString1.localeCompare(userString2) == 0 ? "true" : "false"}`;
  }
};
// 5. Write a ts program to convert lowercase string to uppercase.
var Question5: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output5 = document.getElementById("output5") as HTMLDivElement | null;
  if (output5 && userString1) {
    output5.innerHTML = `lowercase ${userString1} : uppercase ${userString1.toUpperCase()} `;
  }
};
//6. Write a ts program to convert uppercase string to lowercase.
var Question6: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output6 = document.getElementById("output6") as HTMLDivElement | null;
  if (output6 && userString1) {
    output6.innerHTML = `uppercase ${userString1} : lowercase ${userString1.toLowerCase()} `;
  }
};
// 7. Write a ts program to toggle case of each character of a string.
var Question7: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output7 = document.getElementById("output7") as HTMLDivElement | null;
  if (output7 && userString1) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString1[i].toLowerCase()) {
        newString = newString + userString1[i].toUpperCase();
      } else {
        newString = newString + userString1[i].toLowerCase();
      }
      output7.innerHTML = `toggle case ${userString1} : ${newString} `;
    }
  }
};
//8. Write a ts program to find total number of alphabets,
//  digits or special character in a string.
var Question8: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output8 = document.getElementById("output8") as HTMLDivElement | null;
  if (output8 && userString1) {
    let alphabets: number = 0;
    let digits: number = 0;
    let character: number = 0;
    console.log(userString1.length);
    for (let i = 0; i <= userString1.length; i++) {
      if (
        (userString1[i] >= "a" && userString1[i] <= "z") ||
        (userString1[i] >= "A" && userString1[i] <= "Z")
      ) {
        alphabets++;
      } else if (userString1[i] >= "0" && userString1 <= "9") {
        digits++;
      } else {
        character++;
      }
      output8.innerHTML = `String is : ${userString1}
        total number of alphabets is : ${alphabets}<br>
        total number of digits is : ${alphabets}<br>
        total number of special character is : ${character}`;
    }
  }
};
// 9. Write a ts program to count total number of vowels and consonants in a string.
var Question9: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output9 = document.getElementById("output9") as HTMLDivElement | null;
  if (output9 && userString1) {
    userString1 = userString1.toLowerCase();
    let vowels: number = 0;
    let consonants: number = 0;
    for (let i = 0; i <= userString1.length; i++) {
      if (
        userString1[i] == "a" ||
        userString1[i] == "e" ||
        userString1[i] == "i" ||
        userString1[i] == "o" ||
        userString1[i] == "u"
      ) {
        vowels++;
      } else if (userString1[i] >= "a" && userString1[i] <= "z") {
        consonants++;
      }
      output9.innerHTML = `String is : ${userString1}<br>
        total number of vowels is : ${vowels}<br>
        total number of consonants is : ${consonants}`;
    }
  }
};
// 10. Write a ts program to count total number of words in a string.
var Question10: () => void = () => {
  let userString1: string | null = prompt("Please Enter 1st String");
  let output10 = document.getElementById("output10") as HTMLDivElement | null;
  if (output10 && userString1) {
    userString1 = userString1.toLowerCase();
    let words: number = 0;
    for (let i = 0; i <= userString1.length - 1; i++) {
      if (userString1.split(" ")[i]) {
        words++;
      }
      output10.innerHTML = `userString1ing is : ${userString1}<br>
        total number of words is : ${words}<br>`;
    }
  }
};
// 11. Write a ts program to find reverse of a string.
var Question11: () => void = () => {
  let userString: string | null = prompt("Please Enter String");
  let output11 = document.getElementById("output11") as HTMLDivElement | null;
  if (output11 && userString) {
    output11.innerHTML = `reverse of a string ${userString} is : ${userString
      .split("")
      .reverse()
      .join("")}`;
  }
};
// 12. Write a ts program to check whether a string is palindrome or not.
var Question12: () => void = () => {
  let userString: string | null = prompt("Please Enter String");
  let output12 = document.getElementById("output12") as HTMLDivElement | null;
  if (output12 && userString) {
    if (userString.split("").reverse().join("") == userString) {
      output12.innerHTML = `string ${userString} is palindrome : ${userString
        .split("")
        .reverse()
        .join("")}`;
    } else {
      output12.innerHTML = `string ${userString} is not palindrome : ${userString
        .split("")
        .reverse()
        .join("")}`;
    }
  }
};
// 13. Write a ts program to reverse order of words in a given string
var Question13: () => void = () => {
  let userString: string | null = prompt("Please Enter String");
  let output13 = document.getElementById("output13") as HTMLDivElement | null;
  if (output13 && userString) {
    output13.innerHTML = `reverse of words ${userString} is : ${userString
      .split(" ")
      .reverse()
      .join(" ")}`;
  }
};
// 14. Write a ts program to find first occurrence of a character in a given string.
var Question14: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output14 = document.getElementById("output14") as HTMLDivElement | null;
  if (output14 && userString1 && userString2) {
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        output14.innerHTML = `character ${userString2}  is first occurrence at location : ${[
          i + 1,
        ]}`;
        break;
      }
    }
  }
};
// 15. Write a ts program to find last occurrence of a character in a given string.
var Question15: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output15 = document.getElementById("output15") as HTMLDivElement | null;
  if (output15 && userString1 && userString2) {
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        output15.innerHTML = `character ${userString2}  is last occurrence at location : ${[
          i + 1,
        ]}`;
      }
    }
  }
};
// 16. Write a ts program to search all occurrences of a character in given string.
var Question16: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output16 = document.getElementById("output16") as HTMLDivElement | null;
  if (output16 && userString1 && userString2) {
    let occurrence: number = 0;
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        occurrence++;
      }
      output16.innerHTML = `all occurrences of a character ${userString2}  is  : ${occurrence}`;
    }
  }
};
// 17. Write a ts program to count occurrences of a character in given string.
var Question17: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output17 = document.getElementById("output17") as HTMLDivElement | null;
  if (output17 && userString1 && userString2) {
    let occurrence: number = 0;
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1.charAt(i) == userString2) {
        occurrence++;
      }
      output17.innerHTML = `count occurrences of a character ${userString2}  is  : ${occurrence}`;
    }
  }
};
// 18. Write a ts program to find highest frequency character in a string.
var Question18: () => void = () => {
  var str: string | null = prompt("Please Enter String");
  if (str) {
    let char: string = "";
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) < str.lastIndexOf(str[i])) {
        char = str[i];
        console.log("Char", char);
        break;
      }
    }
    let output = <HTMLElement>document.getElementById("output18");
    output.innerHTML +=
      " User Input string :" + str + "<br> Higher frequency character: " + char;
  }
};
// 19. Write a ts program to find lowest frequency character in a string.
var Question19: () => void = () => {
  var str: string | null = prompt("Please Enter String");
  if (str) {
    let char: string = "";
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) >= str.lastIndexOf(str[i])) {
        char += str[i];
      }
    }
    let output = <HTMLElement>document.getElementById("output19");
    output.innerHTML =
      " User Input string :" + str + "<br> Lower frequency character: " + char;
  }
};
// 20. Write a ts program to count frequency of each character in a string.
var Question20: () => void = () => {
  var str: string | null = prompt("Please Enter String");
  let obj = {};
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] += 1;
      }
    }
    let output = <HTMLElement>document.getElementById("output20");
    output.innerHTML +=
      " User Input string :" +
      str +
      "<br> frequency of each character: " +
      JSON.stringify(obj);
  }
};
// 21. Write a ts program to remove first occurrence of a character from string.
var Question21: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output21 = document.getElementById("output21") as HTMLDivElement | null;
  if (output21 && userString1 && userString2) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        newString = userString1.replace(userString1[i], "");
      }
      output21.innerHTML = `remove first occurrence of a character ${userString2}  is : ${newString}`;
    }
  }
};
// 22. Write a ts program to remove last occurrence of a character from string.
var Question22: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output22 = document.getElementById("output22") as HTMLDivElement | null;
  if (output22 && userString1 && userString2) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        newString = userString1.replace(userString1[i], "");
      }
      output22.innerHTML = `all occurrences of a character ${userString2}  is  : ${newString}`;
    }
  }
};
// 23. Write a ts program to remove all occurrences of a character from string.
var Question23: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output23 = document.getElementById("output23") as HTMLDivElement | null;
  if (output23 && userString1 && userString2) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        newString = userString1.split(userString1[i]).join("");
      }
      output23.innerHTML = ` remove all occurrences of a character ${userString2}  is  : ${newString}`;
    }
  }
};
// 24. Write a ts program to remove all repeated characters from a given string.
var Question24: () => void = () => {
  var str: string | null = prompt("Please Enter String");
  if (str) {
    let result: string = "";
    result = str
      .split("")
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join("");
    let output = <HTMLElement>document.getElementById("output24");
    output.innerHTML =
      " User Input string :" +
      str +
      "<br> Remove all repeated characters : " +
      result;
  }
};
// 25. Write a ts program to replace first occurrence of a character with another in a string.
var Question25: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let userString3: string | null = prompt("Enter character to be replaced");
  let output25 = document.getElementById("output25") as HTMLDivElement | null;
  if (output25 && userString1 && userString2 && userString3) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        newString = userString1.replace(userString1[i], userString3);
      }
      output25.innerHTML = `replace first occurrence of a character ${userString2}  is :${newString}`;
    }
  }
};
// 26. Write a ts program to replace last occurrence of a character with another in a string.
var Question26: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let userString3: string | null = prompt("Enter character to be replaced");
  let output26 = document.getElementById("output26") as HTMLDivElement | null;
  if (output26 && userString1 && userString2 && userString3) {
    let newString: any;
    let index1;
    index1 = userString1.lastIndexOf(userString2).toString();
    console.log(index1);
    console.log(userString1[index1]);
    newString = userString1.replace(userString1[index1], userString3);
    console.log(newString);
    output26.innerHTML = `replace last occurrence of a character ${userString2}  is :${newString}`;
  }
};
//27. Write a ts program to replace all occurrences of a character with another in a string.
var Question27: () => void = () => {
  let userString1: any | null = prompt("Enter the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let userString3: string | null = prompt("Enter character to be replaced");
  let output27 = document.getElementById("output27") as HTMLDivElement | null;
  if (output27 && userString1 && userString2 && userString3) {
    let newString: string = "";
    for (let i = 0; i <= userString1.length; i++) {
      if (userString1[i] == userString2) {
        newString = userString1.replaceAll(userString1[i], userString3);
      }
      output27.innerHTML = `replace all occurrences of a character ${userString2} is :
  ${newString}`;
    }
  }
};
// 28. Write a ts program to find first occurrence of a word in a given string.
var Question28: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output28 = document.getElementById("output28") as HTMLDivElement | null;
  if (output28 && userString1 && userString2) {
    let str: number = 0;
    str = userString1.indexOf(userString2);
    output28.innerHTML = `first occurrence of a word ${userString1} is : at location ${str}`;
  }
};
// 29. Write a ts program to find last occurrence of a word in a given string.
var Question29: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output29 = document.getElementById("output29") as HTMLDivElement | null;
  if (output29 && userString1 && userString2) {
    let str: number = 0;
    str = userString1.lastIndexOf(userString2);
    output29.innerHTML = `last occurrence of a word ${userString1} is : at location ${str}`;
  }
};
// 30. Write a ts program to search all occurrences of a word in given string.
var Question30: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output30 = document.getElementById("output30") as HTMLDivElement | null;
  let count: number = 1;
  if (userString1 && userString2 && output30) {
    for (let i = 0; i < userString1.length; i++) {
      if (userString2[i] == userString1[i]) count++;
    }
    output30.innerHTML = `search all occurrences of a word ${userString2} is : ${count}`;
  }
};

//31. Write a ts program to count occurrences of a word in a given string.
var Question31: () => void = () => {
  let userString1: string | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter word to be searched");
  let output31 = document.getElementById("output31") as HTMLDivElement | null;
  if (output31 && userString1 && userString2) {
    let occurrence: number = 0;
    for (let i = 0; i <= userString1.length; i++) {
      if (userString2 == userString1.split(" ")[i]) occurrence++;
      output31.innerHTML = `count occurrences of a word ${userString2}  is  : ${occurrence}`;
    }
  }
};

// 32. Write a ts program to remove first occurrence of a word from string.
var Question32: () => void = () => {
  let userString1: any | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter word to be searched");
  let output32 = document.getElementById("output32") as HTMLDivElement | null;
  if (output32 && userString1 && userString2) {
    userString1 = userString1.split(" ");
    userString1.splice(userString1.indexOf(userString2), 1);
    output32.innerHTML = `remove first occurrence of word  ${userString2}  is : ${userString1.join(
      " "
    )}`;
  }
};

//33. Write a ts program to remove last occurrence of a word from string.
var Question33: () => void = () => {
  var userString1: any | null = prompt("Enter  the string");
  var userString2: string | null = prompt("Enter word to be searched");
  var output33 = document.getElementById("output33") as HTMLDivElement | null;
  if (output33 && userString1 && userString2) {
    userString1 = userString1.split(" ");
    userString1.splice(userString1.lastIndexOf(userString2), 1);
    output33.innerHTML = `remove last occurrence of word  ${userString2}  is : ${userString1.join(
      " "
    )}`;
  }
};
// 34. Write a ts program to remove all occurrences of a character from string.
var Question34: () => void = () => {
  let userString1: any | null = prompt("Enter  the string");
  let userString2: string | null = prompt("Enter character to be searched");
  let output34 = document.getElementById("output34") as HTMLDivElement | null;
  if (output34 && userString1 && userString2) {
    var uniqueList = userString1.replaceAll(userString2, "");
    output34.innerHTML = ` remove all occurrences of a word ${userString2}  is  : ${uniqueList}`;
  }
};

//35. Write a ts program to trim leading white space characters from given string.
var Question35: () => void = () => {
  let userString1: string | null = prompt("Please Enter String");
  let output35 = document.getElementById("output35") as HTMLDivElement | null;
  if (output35 && userString1) {
    output35.innerHTML = `trim leading white space : ${userString1.trimStart()} `;
  }
};

//36. Write a ts program to trim trailing  white space characters from given string.
var Question36: () => void = () => {
  let userString1: string | null = prompt("Please Enter String");
  let output36 = document.getElementById("output36") as HTMLDivElement | null;
  if (output36 && userString1) {
    output36.innerHTML = `trim trailing white space : ${userString1.trimEnd()} `;
  }
};

//37. Write a ts program to trim both leading and trailing white space characters from given string.
var Question37: () => void = () => {
  let userString1: string | null = prompt("Please Enter String");
  let output37 = document.getElementById("output37") as HTMLDivElement | null;
  if (output37 && userString1) {
    output37.innerHTML = `trim both leading and trailing white space: ${userString1.trim()} `;
  }
};

// 38. Write a ts program to remove all extra blank spaces from given string.
var Question37: () => void = () => {
  let userString1: string | null = prompt("Please Enter String");
  let output38 = document.getElementById("output38") as HTMLDivElement | null;
  if (output38 && userString1) {
    output38.innerHTML = `remove all extra blank spaces: ${userString1.trim()} `;
  }
};