function ggg (){
    const divTabela = document.getElementById("divTabela");
    divTabela.innerHTML = `<div> <h1> OLÁ HUMANO </h1> </div> <div><img src="/OIP2.jpg" alt=""></div> <button onclick="ggg()">Tempo bom</button><button onclick="zzz()">Tempo ruim</button><button onclick="troca()">Tabuada</button><button onclick="troca2()">Login</button>`;
    
}
function zzz (){
    const divTabela = document.getElementById("divTabela");
    divTabela.innerHTML = `<div> <h1> OLÁ HUMANO </h1> </div> <div><img src="/OIP.jpg" alt=""></div> <button onclick="ggg()">Tempo bom</button><button onclick="zzz()">Tempo ruim</button><button onclick="troca()">Tabuada</button><button onclick="troca2()">Login</button>`;
    
}

function troca (){
    window.location.href = "http://localhost:3000/tabuada.html";

}
function troca2 (){
    window.location.href = "http://localhost:3000/index.html";

}
function troca3 (){
    window.location.href = "http://localhost:3000/login.html";

}
function troca4 (){
    window.location.href = "http://localhost:3000/signup.html";

}

// function show(){
//     const impdivtudo = document.getElementById("divtudo");
//     const inputnumero1 = document.getElementById("numero1");
//     const numeros = parseFloat(inputnumero1.value);
//     impdivtudo.innerHTML = `<div> <h1> TABUADA DO ${numeros}</h1> <p>${numeros} x 1 = ${numeros * 1}</p> <p>${numeros} x 2 = ${numeros * 2}</p><p>${numeros} x 3 = ${numeros * 3}</p><p>${numeros} x 4 = ${numeros * 4}</p><p>${numeros} x 5 = ${numeros * 5}</p><p>${numeros} x 6 = ${numeros * 6}</p><p>${numeros} x 7 = ${numeros * 7}</p><p>${numeros} x 8 = ${numeros * 8}</p><p>${numeros} x 9 = ${numeros * 9}</p><p>${numeros} x 10 = ${numeros * 10}</p> <p></p><p>Digite outro numero</p> <p><label for="numero1">Insira um numero</label><input id="numero1" type="text"><button onclick="show()" type="submit">Enviar</button></p></div>`

// }
function show() {
    
    const impdivtudo = document.getElementById("divtudo");
    const outdivnada = document.getElementById("divnada");
    const inputnumero1 = document.getElementById("numero1");
    const inputnumero2 = document.getElementById("numero2");
    const numeros = parseFloat(inputnumero1.value);
    const numeros2 = parseFloat(inputnumero2.value);
    
    if (isNaN(numeros) || isNaN(numeros2)) {
        outdivnada.innerHTML = "Não é um número";
    } else {
        let conteudo = "";
        for (let index = 0; index <numeros2; index++) {
            conteudo += `${numeros} x ${index + 1} = ${numeros * (index + 1)}<br>`;
        }
        outdivnada.innerHTML = conteudo;
    }
}
