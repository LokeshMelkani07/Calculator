// Calculator
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        let audi = document.getElementById('audio');
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
        audi.play();
        setTimeout(() => {
            audi.pause();
        }, 800);

        setTimeout(() => {
            e.target.style.backgroundColor = 'blueviolet';
            e.target.style.color = 'black';
        }, 500);


        console.log('button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            screen.value = '';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'CE') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;

        }
        else if (buttonText == '!') {
            screen.value = 'The factorial is ' + factorialize(screenValue);
        }
        else if (buttonText == 'sin') {
            let n = Math.sin(screenValue);
            screen.value = 'The sin value is ' + n.toFixed(2);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}