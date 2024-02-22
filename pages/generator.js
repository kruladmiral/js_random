

// forms
function hideAll() {
document.getElementById("places").style.display="none";
document.getElementById("names").style.display="none";
document.getElementById("emails").style.display="none";
document.getElementById("texts").style.display="none";
document.getElementById("passwords").style.display="none";
}
function showForm(form) {
    hideAll();
    document.getElementById(form).style.display="block";
}
// button functions
    function returnFake(input) {
    document.getElementById('result').innerHTML += faker[input]() + '\n'    }
    function clearElement(element) {
    document.getElementById(element).innerHTML = '';
}
function fakeDomain(input) {
    document.getElementById('result').innerHTML += faker.domainEmail(input) + '\n'    
}
function copy () {
    const copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
function useName (a) {
    document.getElementById('result').innerHTML += faker.userNameEmail(a) + '\n'
}
function generateName(a) {
    let gender = "";
    a === true ? gender = 'female' : gender = 'male';
    document.getElementById('result').innerHTML += faker.names(gender) + '\n'
}
function generateFullName(a) {
    let gender = "";
    a === true ? gender = 'female' : gender = 'male';
    document.getElementById('result').innerHTML += faker.fullnames(gender) + '\n'
}
// password generator
function createPassword (a) {
    if (a < 8 | a > 24 ) {
alert('Please select a number between 8 and 24 included.');
return;
    }
const isSpecialChar = document.getElementById('specialchars').checked;
const isUpperCase = document.getElementById('uppercase').checked;
const isNumbers = document.getElementById('number').checked;
const passwordLenght = a;

    return generatePassword(passwordLenght, isSpecialChar, isUpperCase, isNumbers);
}

function generatePassword (passwordLenght, specialChars, upperCase, numbers) {
    let random = Math.floor(Math.random() * 4) + 2;
    let word  = faker.adjective(passwordLenght - random);
    let wordArray = word.split('');
    
    if (specialChars === true) {
        for (let i = word.length; i < passwordLenght; i ++) {
        const chars = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];
        wordArray.push(chars[selectRandomChar()]);
        }
    }
    if (upperCase === true) {
        wordArray[0] = wordArray[0].toUpperCase();
    }
    if (wordArray.length < passwordLenght) {
        const charSet ='abcdefghijklmnopqrstuvwxyz';

        for (let i = wordArray.length; i < passwordLenght; i ++) {
            let random = Math.floor(Math.random()*24);
            wordArray.push(charSet.substring(random,random+1))
        }
    }
    if (numbers === true) {
        wordArray[passwordLenght-1] = selectRandomChar();
    }
    
    function selectRandomChar () {
        let random = Math.floor(Math.random() * 9);
        return random;
    }
    
    document.getElementById('result').innerHTML += wordArray.join('') + '\n';

    }


    
