
function verificarValor(){
    if(document.querySelector("#conta").value === "LIGADO" || document.querySelector("#conta").value === "DESLIGADO" || document.querySelector("#conta").value === ""){
        document.querySelector(".apagar").style.display = 'none';
    }else{
        document.querySelector(".apagar").style.display = 'block';
    }
}

function apagar(){
    let valor = document.querySelector("#conta").value;
    let res = valor.slice(0, -1);
    document.querySelector("#conta").value = res;
    if(res === ""){
        document.querySelector(".apagar").style.display = 'none';
    }
}

function ultimoCaracter(){
    return document.querySelector("#conta").value.charAt(document.querySelector("#conta").value.length - 1);
}
verificarValor();

document.querySelectorAll(".botao").forEach(item => {
    item.addEventListener("click", function() {
        if(document.querySelector("#conta").value.length >= 24){
            if(this.innerHTML.trim() == '<i class="fas fa-power-off"></i>'){
                document.querySelector("#conta").value = "DESLIGADO";
                this.style.backgroundColor = "red";
            }else{
                alert('máx. caracter');
            }
        }else{
            switch(this.innerHTML.trim()){
                case '<i class="fas fa-power-off"></i>':
                    if(document.querySelector("#conta").value != "DESLIGADO"){
                        document.querySelector("#conta").value = "DESLIGADO";
                        this.style.backgroundColor = "red";
                    }else{
                        document.querySelector("#conta").value = "LIGADO";
                        this.style.backgroundColor = "green";
                    }
                break;
                case 'CE':
                    if(document.querySelector("#conta").value != "DESLIGADO"){
                        document.querySelector("#conta").value = "";
                    }else{
                        alert("calculadora desligada!");
                    }
                break;
                case '=':
                    alert('deu enter!');
                break;
                default:
                    if(document.querySelector("#conta").value === "LIGADO"){
                        if(this.className.indexOf("operador") != -1){
                        }else{
                            document.querySelector("#conta").value = "";
                            document.querySelector("#conta").value += this.innerHTML.trim();
                        }
                    }else if(document.querySelector("#conta").value === "DESLIGADO"){
                        alert("calculadora desligada!");
                    }else{
                        if(ultimoCaracter() >= 0 && ultimoCaracter() <=9){
                            if(this.innerHTML.trim() >= 0 && this.innerHTML.trim() <=9){
                                document.querySelector("#conta").value += this.innerHTML.trim();
                            }else{
                                if(ultimoCaracter() != ""){
                                    document.querySelector("#conta").value += this.innerHTML.trim();
                                }
                            }
                        }
                    }
                break;
            }
        }
        verificarValor();
    });
});

document.querySelector(".apagar").addEventListener("click", function(){
    apagar();
});


document.querySelector(".power").addEventListener("click", function(){
    if(this.style.backgroundColor === "green"){
        document.querySelector(".display").style.borderColor = "green";
    }else{
        document.querySelector(".display").style.borderColor = "red";
    }
});

document.addEventListener("keyup", function(a){
    if(document.querySelector("#conta").value != "DESLIGADO"){
        if(a.key >= 0 && a.key <=9){
            if(document.querySelector("#conta").value === "LIGADO"){
                document.querySelector("#conta").value = a.key;
            }else{
                document.querySelector("#conta").value += a.key;
            }
        }
        switch(a.key){
            case "Backspace":
                if(document.querySelector("#conta").value != "LIGADO" && document.querySelector("#conta").value != "DESLIGADO"){
                    apagar();
                }
            break;
            case "/":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case "*":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case "-":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case "+":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case ",":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case "%":
                if(ultimoCaracter() >= 0 && ultimoCaracter() <=9 && ultimoCaracter() != ""){
                    document.querySelector("#conta").value += a.key;
                }
            break;
            case "=":
                alert('deu enter!');
            break;
        }
        verificarValor();
    }else{
        alert("calculadora desligada!"); 
    }
});