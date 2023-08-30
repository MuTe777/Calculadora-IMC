const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso/(altura*altura)).toFixed(2);

        let classificacao = "";
        
        if (valorImc < 18.5){
            classificacao = 'abaixo do peso.';
            calcular.textContent = 'Calcular novamente'
        }else if (valorImc < 25){
            classificacao = 'você está no peso ideal.';
            calcular.textContent = 'Calcular novamente'
        }else if (valorImc < 30){
            classificacao = 'você está levemente acima do peso.';
            calcular.textContent = 'Calcular novamente'
        }else if (valorImc < 35){
            classificacao = 'você está com obesidade grau I.';
            calcular.textContent = 'Calcular novamente'
        }else if (valorImc < 40){
            classificacao = 'você está com obesidade grau II';
            calcular.textContent = 'Calcular novamente'
        }else if (valorImc >= 40) {
            classificacao = 'você está com obesidade grau III';
            calcular.textContent = 'Calcular novamente'
        }else{
            resultado.textContent = 'Preencha todos os campos!'
        }
        

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }
    


}

//teste de adição de estilos pelo JS
calcular.addEventListener('click', imc);
document.querySelector("#calcular").onclick = function(){
    const resultadoEstilo = document.querySelector("#resultado")

    resultadoEstilo.style.backgroundColor = "black" ;
    resultadoEstilo.style.display = "flex";
    resultadoEstilo.style.marginTop = "20px";
    resultadoEstilo.style.alignItems = "center";
    resultadoEstilo.style.width = "300px";
    resultadoEstilo.style.height = "150px";
    resultadoEstilo.style.borderRadius = "5px";
    resultadoEstilo.style.fontSize = "1.5rem";
    resultadoEstilo.style.boxShadow = "0px 0px 10px black";
    resultadoEstilo.style.color = "#ffbb00";
    resultadoEstilo.style.padding = "20px";
    resultadoEstilo.style.boxSizing = "border-box";
    resultadoEstilo.style.userSelect = "none";

}