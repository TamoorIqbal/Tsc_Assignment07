// 1. Write a ts program to find length of a string.
var Question1 = function () {
    var userString = prompt("Please Enter String");
    var output1 = document.getElementById("output1");
    if (output1 && userString) {
        output1.innerHTML = "length of a string ".concat(userString, " is : ").concat(userString.length);
    }
};
//2. Write a ts program to copy one string to another string.
var Question2 = function () {
    var userString = prompt("Please Enter String");
    var output2 = document.getElementById("output2");
    if (output2 && userString) {
        output2.innerHTML = "Original string is ".concat(userString, " :  and copy string is ").concat(userString.slice());
    }
};
//3. Write a ts program to concatenate two strings.
var Question3 = function () {
    var userString1 = prompt("Please Enter String");
    var userString2 = prompt("Please Enter String");
    var output3 = document.getElementById("output3");
    if (output3 && userString1 && userString2) {
        output3.innerHTML = "concatenate ".concat(userString1, " and ").concat(userString2, " is : ").concat(userString1.concat(userString2));
    }
};
//4. Write a ts program to compare two strings.
var Question4 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var userString2 = prompt("Please Enter 2nd String");
    var output4 = document.getElementById("output4");
    if (output4 && userString1 && userString2) {
        output4.innerHTML = "compare string 1 ".concat(userString1, " to string 2 ").concat(userString2, " is :\n     ").concat(userString1.localeCompare(userString2) == 0 ? "true" : "false");
    }
};
// 5. Write a ts program to convert lowercase string to uppercase.
var Question5 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output5 = document.getElementById("output5");
    if (output5 && userString1) {
        output5.innerHTML = "lowercase ".concat(userString1, " : uppercase ").concat(userString1.toUpperCase(), " ");
    }
};
//6. Write a ts program to convert uppercase string to lowercase.
var Question6 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output6 = document.getElementById("output6");
    if (output6 && userString1) {
        output6.innerHTML = "uppercase ".concat(userString1, " : lowercase ").concat(userString1.toLowerCase(), " ");
    }
};
// 7. Write a ts program to toggle case of each character of a string.
var Question7 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output7 = document.getElementById("output7");
    if (output7 && userString1) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString1[i].toLowerCase()) {
                newString = newString + userString1[i].toUpperCase();
            }
            else {
                newString = newString + userString1[i].toLowerCase();
            }
            output7.innerHTML = "toggle case ".concat(userString1, " : ").concat(newString, " ");
        }
    }
};
//8. Write a ts program to find total number of alphabets,
//  digits or special character in a string.
var Question8 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output8 = document.getElementById("output8");
    if (output8 && userString1) {
        var alphabets = 0;
        var digits = 0;
        var character = 0;
        console.log(userString1.length);
        for (var i = 0; i <= userString1.length; i++) {
            if ((userString1[i] >= "a" && userString1[i] <= "z") ||
                (userString1[i] >= "A" && userString1[i] <= "Z")) {
                alphabets++;
            }
            else if (userString1[i] >= "0" && userString1 <= "9") {
                digits++;
            }
            else {
                character++;
            }
            output8.innerHTML = "String is : ".concat(userString1, "\n        total number of alphabets is : ").concat(alphabets, "<br>\n        total number of digits is : ").concat(alphabets, "<br>\n        total number of special character is : ").concat(character);
        }
    }
};
// 9. Write a ts program to count total number of vowels and consonants in a string.
var Question9 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output9 = document.getElementById("output9");
    if (output9 && userString1) {
        userString1 = userString1.toLowerCase();
        var vowels = 0;
        var consonants = 0;
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == "a" ||
                userString1[i] == "e" ||
                userString1[i] == "i" ||
                userString1[i] == "o" ||
                userString1[i] == "u") {
                vowels++;
            }
            else if (userString1[i] >= "a" && userString1[i] <= "z") {
                consonants++;
            }
            output9.innerHTML = "String is : ".concat(userString1, "<br>\n        total number of vowels is : ").concat(vowels, "<br>\n        total number of consonants is : ").concat(consonants);
        }
    }
};
// 10. Write a ts program to count total number of words in a string.
var Question10 = function () {
    var userString1 = prompt("Please Enter 1st String");
    var output10 = document.getElementById("output10");
    if (output10 && userString1) {
        userString1 = userString1.toLowerCase();
        var words = 0;
        for (var i = 0; i <= userString1.length - 1; i++) {
            if (userString1.split(" ")[i]) {
                words++;
            }
            output10.innerHTML = "userString1ing is : ".concat(userString1, "<br>\n        total number of words is : ").concat(words, "<br>");
        }
    }
};
// 11. Write a ts program to find reverse of a string.
var Question11 = function () {
    var userString = prompt("Please Enter String");
    var output11 = document.getElementById("output11");
    if (output11 && userString) {
        output11.innerHTML = "reverse of a string ".concat(userString, " is : ").concat(userString
            .split("")
            .reverse()
            .join(""));
    }
};
// 12. Write a ts program to check whether a string is palindrome or not.
var Question12 = function () {
    var userString = prompt("Please Enter String");
    var output12 = document.getElementById("output12");
    if (output12 && userString) {
        if (userString.split("").reverse().join("") == userString) {
            output12.innerHTML = "string ".concat(userString, " is palindrome : ").concat(userString
                .split("")
                .reverse()
                .join(""));
        }
        else {
            output12.innerHTML = "string ".concat(userString, " is not palindrome : ").concat(userString
                .split("")
                .reverse()
                .join(""));
        }
    }
};
// 13. Write a ts program to reverse order of words in a given string
var Question13 = function () {
    var userString = prompt("Please Enter String");
    var output13 = document.getElementById("output13");
    if (output13 && userString) {
        output13.innerHTML = "reverse of words ".concat(userString, " is : ").concat(userString
            .split(" ")
            .reverse()
            .join(" "));
    }
};
// 14. Write a ts program to find first occurrence of a character in a given string.
var Question14 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output14 = document.getElementById("output14");
    if (output14 && userString1 && userString2) {
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                output14.innerHTML = "character ".concat(userString2, "  is first occurrence at location : ").concat([
                    i + 1,
                ]);
                break;
            }
        }
    }
};
// 15. Write a ts program to find last occurrence of a character in a given string.
var Question15 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output15 = document.getElementById("output15");
    if (output15 && userString1 && userString2) {
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                output15.innerHTML = "character ".concat(userString2, "  is last occurrence at location : ").concat([
                    i + 1,
                ]);
            }
        }
    }
};
// 16. Write a ts program to search all occurrences of a character in given string.
var Question16 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output16 = document.getElementById("output16");
    if (output16 && userString1 && userString2) {
        var occurrence = 0;
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                occurrence++;
            }
            output16.innerHTML = "all occurrences of a character ".concat(userString2, "  is  : ").concat(occurrence);
        }
    }
};
// 17. Write a ts program to count occurrences of a character in given string.
var Question17 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output17 = document.getElementById("output17");
    if (output17 && userString1 && userString2) {
        var occurrence = 0;
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1.charAt(i) == userString2) {
                occurrence++;
            }
            output17.innerHTML = "count occurrences of a character ".concat(userString2, "  is  : ").concat(occurrence);
        }
    }
};
// 18. Write a ts program to find highest frequency character in a string.
var Question18 = function () {
    var str = prompt("Please Enter String");
    if (str) {
        var char = "";
        for (var i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) < str.lastIndexOf(str[i])) {
                char = str[i];
                console.log("Char", char);
                break;
            }
        }
        var output = document.getElementById("output18");
        output.innerHTML +=
            " User Input string :" + str + "<br> Higher frequency character: " + char;
    }
};
// 19. Write a ts program to find lowest frequency character in a string.
var Question19 = function () {
    var str = prompt("Please Enter String");
    if (str) {
        var char = "";
        for (var i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) >= str.lastIndexOf(str[i])) {
                char += str[i];
            }
        }
        var output = document.getElementById("output19");
        output.innerHTML =
            " User Input string :" + str + "<br> Lower frequency character: " + char;
    }
};
// 20. Write a ts program to count frequency of each character in a string.
var Question20 = function () {
    var str = prompt("Please Enter String");
    var obj = {};
    if (str) {
        for (var i = 0; i < str.length; i++) {
            if (obj[str[i]] == undefined) {
                obj[str[i]] = 1;
            }
            else {
                obj[str[i]] += 1;
            }
        }
        var output = document.getElementById("output20");
        output.innerHTML +=
            " User Input string :" +
                str +
                "<br> frequency of each character: " +
                JSON.stringify(obj);
    }
};
// 21. Write a ts program to remove first occurrence of a character from string.
var Question21 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output21 = document.getElementById("output21");
    if (output21 && userString1 && userString2) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                newString = userString1.replace(userString1[i], "");
            }
            output21.innerHTML = "remove first occurrence of a character ".concat(userString2, "  is : ").concat(newString);
        }
    }
};
// 22. Write a ts program to remove last occurrence of a character from string.
var Question22 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output22 = document.getElementById("output22");
    if (output22 && userString1 && userString2) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                newString = userString1.replace(userString1[i], "");
            }
            output22.innerHTML = "all occurrences of a character ".concat(userString2, "  is  : ").concat(newString);
        }
    }
};
// 23. Write a ts program to remove all occurrences of a character from string.
var Question23 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output23 = document.getElementById("output23");
    if (output23 && userString1 && userString2) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                newString = userString1.split(userString1[i]).join("");
            }
            output23.innerHTML = " remove all occurrences of a character ".concat(userString2, "  is  : ").concat(newString);
        }
    }
};
// 24. Write a ts program to remove all repeated characters from a given string.
var Question24 = function () {
    var str = prompt("Please Enter String");
    if (str) {
        var result = "";
        result = str
            .split("")
            .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
            .join("");
        var output = document.getElementById("output24");
        output.innerHTML =
            " User Input string :" +
                str +
                "<br> Remove all repeated characters : " +
                result;
    }
};
// 25. Write a ts program to replace first occurrence of a character with another in a string.
var Question25 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var userString3 = prompt("Enter character to be replaced");
    var output25 = document.getElementById("output25");
    if (output25 && userString1 && userString2 && userString3) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                newString = userString1.replace(userString1[i], userString3);
            }
            output25.innerHTML = "replace first occurrence of a character ".concat(userString2, "  is :").concat(newString);
        }
    }
};
// 26. Write a ts program to replace last occurrence of a character with another in a string.
var Question26 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var userString3 = prompt("Enter character to be replaced");
    var output26 = document.getElementById("output26");
    if (output26 && userString1 && userString2 && userString3) {
        var newString = void 0;
        var index1 = void 0;
        index1 = userString1.lastIndexOf(userString2).toString();
        console.log(index1);
        console.log(userString1[index1]);
        newString = userString1.replace(userString1[index1], userString3);
        console.log(newString);
        output26.innerHTML = "replace last occurrence of a character ".concat(userString2, "  is :").concat(newString);
    }
};
//27. Write a ts program to replace all occurrences of a character with another in a string.
var Question27 = function () {
    var userString1 = prompt("Enter the string");
    var userString2 = prompt("Enter character to be searched");
    var userString3 = prompt("Enter character to be replaced");
    var output27 = document.getElementById("output27");
    if (output27 && userString1 && userString2 && userString3) {
        var newString = "";
        for (var i = 0; i <= userString1.length; i++) {
            if (userString1[i] == userString2) {
                newString = userString1.replaceAll(userString1[i], userString3);
            }
            output27.innerHTML = "replace all occurrences of a character ".concat(userString2, " is :\n  ").concat(newString);
        }
    }
};
// 28. Write a ts program to find first occurrence of a word in a given string.
var Question28 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output28 = document.getElementById("output28");
    if (output28 && userString1 && userString2) {
        var str = 0;
        str = userString1.indexOf(userString2);
        output28.innerHTML = "first occurrence of a word ".concat(userString1, " is : at location ").concat(str);
    }
};
// 29. Write a ts program to find last occurrence of a word in a given string.
var Question29 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output29 = document.getElementById("output29");
    if (output29 && userString1 && userString2) {
        var str = 0;
        str = userString1.lastIndexOf(userString2);
        output29.innerHTML = "last occurrence of a word ".concat(userString1, " is : at location ").concat(str);
    }
};
// 30. Write a ts program to search all occurrences of a word in given string.
var Question30 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output30 = document.getElementById("output30");
    var count = 1;
    if (userString1 && userString2 && output30) {
        for (var i = 0; i < userString1.length; i++) {
            if (userString2[i] == userString1[i])
                count++;
        }
        output30.innerHTML = "search all occurrences of a word ".concat(userString2, " is : ").concat(count);
    }
};
//31. Write a ts program to count occurrences of a word in a given string.
var Question31 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter word to be searched");
    var output31 = document.getElementById("output31");
    if (output31 && userString1 && userString2) {
        var occurrence = 0;
        for (var i = 0; i <= userString1.length; i++) {
            if (userString2 == userString1.split(" ")[i])
                occurrence++;
            output31.innerHTML = "count occurrences of a word ".concat(userString2, "  is  : ").concat(occurrence);
        }
    }
};
// 32. Write a ts program to remove first occurrence of a word from string.
var Question32 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter word to be searched");
    var output32 = document.getElementById("output32");
    if (output32 && userString1 && userString2) {
        userString1 = userString1.split(" ");
        userString1.splice(userString1.indexOf(userString2), 1);
        output32.innerHTML = "remove first occurrence of word  ".concat(userString2, "  is : ").concat(userString1.join(" "));
    }
};
//33. Write a ts program to remove last occurrence of a word from string.
var Question33 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter word to be searched");
    var output33 = document.getElementById("output33");
    if (output33 && userString1 && userString2) {
        userString1 = userString1.split(" ");
        userString1.splice(userString1.lastIndexOf(userString2), 1);
        output33.innerHTML = "remove last occurrence of word  ".concat(userString2, "  is : ").concat(userString1.join(" "));
    }
};
// 34. Write a ts program to remove all occurrences of a character from string.
var Question34 = function () {
    var userString1 = prompt("Enter  the string");
    var userString2 = prompt("Enter character to be searched");
    var output34 = document.getElementById("output34");
    if (output34 && userString1 && userString2) {
        var uniqueList = userString1.replaceAll(userString2, "");
        output34.innerHTML = " remove all occurrences of a word ".concat(userString2, "  is  : ").concat(uniqueList);
    }
};
//35. Write a ts program to trim leading white space characters from given string.
var Question35 = function () {
    var userString1 = prompt("Please Enter String");
    var output35 = document.getElementById("output35");
    if (output35 && userString1) {
        output35.innerHTML = "trim leading white space : ".concat(userString1.trimStart(), " ");
    }
};
//36. Write a ts program to trim trailing  white space characters from given string.
var Question36 = function () {
    var userString1 = prompt("Please Enter String");
    var output36 = document.getElementById("output36");
    if (output36 && userString1) {
        output36.innerHTML = "trim trailing white space : ".concat(userString1.trimEnd(), " ");
    }
};
//37. Write a ts program to trim both leading and trailing white space characters from given string.
var Question37 = function () {
    var userString1 = prompt("Please Enter String");
    var output37 = document.getElementById("output37");
    if (output37 && userString1) {
        output37.innerHTML = "trim both leading and trailing white space: ".concat(userString1.trim(), " ");
    }
};
// 38. Write a ts program to remove all extra blank spaces from given string.
var Question37 = function () {
    var userString1 = prompt("Please Enter String");
    var output38 = document.getElementById("output38");
    if (output38 && userString1) {
        output38.innerHTML = "remove all extra blank spaces: ".concat(userString1.trim(), " ");
    }
};
