const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
const statusTitle = document.getElementById('status');
const tentativa = document.getElementById('tentativa');
const result = document.getElementById('resultado');
const inputValue = document.getElementById('digite');
const btnrestart = document.getElementById('restart');

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function(){
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function(){
        btnrestart.style.display = 'flex';
    },
    clearInput: function(){
        inputValue.value = '';
    },
    updateAttempt: function(value){
        tentativa.innerHTML = value;
    },
    correctAnswear: function(){
        this.showButtonRestart();
        statusTitle.innerHTML = 'Parabéns! Você acertou😉';
        statusTitle.classList.remove('incorrect-answear');
        statusTitle.classList.add('status-correct');
        result.classList.remove('resultado-default');
        result.classList.add('result-correct-answear');
        this.clearInput();
    },
    incorrectAnswear: function(message){
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answear');

        this.clearInput();
    },
};

function restartGame(){
    document.location.reload(true);
}

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e){
    e.preventDefault();

    const kick = inputValue.value;

    if(!kick){
        alert('Digite algum valor');
        return;
    }

    GuessNumber.updateAttempt(++GuessNumber.attemptsNumber);

    if(numberDraw == kick){
        GuessNumber.correctAnswear();
    }else if(numberDraw > kick){
        GuessNumber.incorrectAnswear('O número é maior');
    }else if(numberDraw < kick){
        GuessNumber.incorrectAnswear('O número é menor');
    }

}

