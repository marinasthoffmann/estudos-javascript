function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://mail.google.com/mail/u/0/#inbox");
    window.location.href = "https://mail.google.com/mail/u/0/#inbox";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui"
}

function load(){
    alert ("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1+n2;
}

var validar=0;
function validaIdade(idade){
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
  }

var idade = prompt("Qual sua idade?")
console.log(validar)
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count<=5){
    console.log(count);
    alert (count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");}
    else{
        alert("menor de idade");
    };
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert (frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert (fruta.cor);
*/

//var lista = ["maçã","pêra","laranja"];

//alert(lista[1]);
//lista.pop();
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome="Marina Hoffmann";
//var idade=27;
//var idade2=10;
//var frase="Internacional é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log (nome);
//console.log(idade+idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Internacional", "Grêmio"))