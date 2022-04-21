const calculate = document.getElementById('botao-calcular');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        
        let imc = weight /(height * height).toFixed(2);
        console.log (imc)

        if (imc < 18.5){
            imc = 'abaixo do peso'
        }
        else if (imc > 18.5 && imc < 24.99){
            imc = 'no seu peso ideal'
        }
        else if (imc >= 25 && imc < 29.99){
            imc = 'sobrepeso'
        }
        else if (imc >= 30 && imc < 34.99){
            imc = 'com Obesidade grau 1'
        }
        else if (imc >= 35 && imc < 39.99){
            imc = 'com Obesidade grau 2'
        }
        else if (imc >= 40){
            imc = 'com Obesidade grau 3'
        }
        
        result.textContent = name +", você está " + imc;
    }   
    else {
        alert ('Valores em branco');
        result.textContent = 'Preencha todos os campos';
    }
}

calculate.addEventListener ('click', imc);