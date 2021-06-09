function solucao(ano) {
	anoCopa = 2014
    anoOlimpiadas = 2016

    diferencaAnosCopa = ano - anoCopa
    diferencaAnosOlimpiadas = ano - anoOlimpiadas

    if(diferencaAnosCopa % 4 === 0){
    console.log("COPA")
    } else if (diferencaAnosOlimpiadas % 4 === 0){
    console.log("JOGOS")
    } else {
    console.log("MEH")
    }   
}


