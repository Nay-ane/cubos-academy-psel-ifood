function solucao(obj) {
    if(acessoFilme(obj)) {
        valorEntrada(obj)
    }
	
}

function acessoFilme(obj){
    if (!obj.temIngresso || (obj.idade < obj.censura && !obj.estaComPais)){
        console.log("ACESSO NEGADO")
        return false
    }
    return true
}

function valorEntrada(obj){
    if(obj.idade < 18 || obj.temCarteirinha){
        console.log("MEIA")
    } else {
        console.log("INTEIRA")
    }
}

