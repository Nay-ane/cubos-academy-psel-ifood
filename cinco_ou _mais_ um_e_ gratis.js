function solucao(precos) {
    total = 0
    maisBarato = precos[0]
    for(preco of precos){
        total += preco
        if(maisBarato > preco){
            maisBarato = preco
        }
    }
    if(precos.length >= 5){
        total -= maisBarato
    }
    console.log(total)
}

