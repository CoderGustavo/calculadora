
function verificarValor(){
    if(document.querySelector("#conta").value === "LIGADO" || document.querySelector("#conta").value === "DESLIGADO" || document.querySelector("#conta").value === ""){
        document.querySelector(".apagar").style.display = 'none';
    }else{
        document.querySelector(".apagar").style.display = 'block';
    }
}

verificarValor()

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
                default:
                    if(document.querySelector("#conta").value === "LIGADO"){
                        if(this.className.indexOf("operador") != -1){
                        }else{
                            document.querySelector("#conta").value = "";
                            document.querySelector("#conta").value += this.innerHTML.trim();
                        }
                    }else if(document.querySelector("#conta").value === "DESLIGADO"){
                        alert("calculadora desligada!");
                    }else if(document.querySelector("#conta").value === ""){
                        if(this.className.indexOf("operador") != -1){
                        }else{
                            document.querySelector("#conta").value += this.innerHTML.trim();
                        }
                    }else{
                        document.querySelector("#conta").value += this.innerHTML.trim();
                    }
                break;
            }
        }
        verificarValor();   
    });
});

document.querySelector(".apagar").addEventListener("click", function(){
    let valor = document.querySelector("#conta").value;
    let res = valor.slice(0, -1);
    document.querySelector("#conta").value = res;
    if(res === ""){
        document.querySelector(".apagar").style.display = 'none';
    }
});

document.querySelector(".power").addEventListener("click", function(){
    if(this.style.backgroundColor === "green"){
        document.querySelector(".display").style.borderColor = "green";
    }else{
        document.querySelector(".display").style.borderColor = "red";
    }
});