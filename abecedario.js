function solucao(letra, palavras) {
    cont = 0
    for(palavra of palavras){
        if(palavra[0] !== letra){
            cont++
        }
    }
    console.log(cont)
}

