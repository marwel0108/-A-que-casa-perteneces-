
const LimpiarRespuestas = (pregunta, contenedorPregunta, respuestas, contador, Preguntas, index) => {
    pregunta = Preguntas[index];
    contenedorPregunta.textContent = pregunta.pregunta;
    respuestas = pregunta.respuestas;
    contador = 0;

    return [pregunta, contenedorPregunta, respuestas, contador];
}

export {
    LimpiarRespuestas
};