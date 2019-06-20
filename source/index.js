function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
$(".item").text(findGetParameter("item"));
$(".descricao").text(findGetParameter("descricao"));
$(".lote").text(findGetParameter("lote"));
$(".qtd").text(findGetParameter("quantidade"));
$(".local").text(findGetParameter("local"));

const id = findGetParameter("id");

if(id == 0){
    const alert =  document.querySelector(".alert");
    alert.style.visibility = "visible";

}

function verification(){
    if(id == 1){    
    const link = document.querySelector(".btnLarge");
        link.href="item-pedido.html?id=1&item=19896412990027&descricao=SAB.LIMA DA PERSIA 90GR CX144&lote=Z4236&local=R0801&quantidade=14";
    }
}
if(id == 1 ){
    const back = document.querySelector(".inback");
    const all = document.querySelector(".NavTable");
    back.href="pedido-dois.html";
    all.style.color = "#ff0000";

}
