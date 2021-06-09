function solucao(tempo, distancia) {
	if (tempo < 5){
        calcularViagemCurta()
    } else if (tempo >= 5 && tempo <= 60){
        calcularViagemMedia(tempo, distancia)
    } else {
        calcularViagemLonga(distancia)
    }
    valorCorridaCentavos(valorCorrida)

}

function calcularViagemCurta(){
   valorCorrida = 6

   return valorCorrida
}

function calcularViagemMedia(tempo, distancia){
    valorMinuto = 1 * tempo
    valorKm = distancia * 0.50
    valorCorrida =  valorMinuto + valorKm

    return valorCorrida
}

function calcularViagemLonga(distancia){
    if(distancia < 100){
        valorCorrida = 2 * distancia
    } else {
        valorCorrida = 1.50 * distancia
    }

    return valorCorrida
}

function valorCorridaCentavos(){
    valorEmCentavos = valorCorrida * 100
    console.log(valorEmCentavos)
}

