let idade = 18
let condicao = "habilitado"

idade=parseInt(prompt("qual sua idade ?"));
condicao=prompt("voce e habilitado ou não ?")

if(idade>18 && condicao == "habilitado"){
        alert("pode dirigir")
}else{
    alert("não pode dirigir")
}