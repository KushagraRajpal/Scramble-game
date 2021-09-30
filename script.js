const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql', 'rust', 'mysql', '.net']


const creatNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    // console.log(ranNum);
    let newTempSwords = sWords[ranNum];
    // console.log(newTempSwords.split(""))
    return newTempSwords;
}
 const scrambleWords = (arr) =>{
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
 }
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = creatNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML = `Guess the words: ${randWords}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            // console.log('correct');
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML = `Start Again`;
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else{
            // console.log('incorrect');
            msg.innerHTML = `Sorry Bose, It's ${newWords} . Plz try again` ;
            btn.innerHTML = 'Start Again';
            guess.classList.toggle('hidden');
            guess.value = "";
            play = false
        }
    }
})
