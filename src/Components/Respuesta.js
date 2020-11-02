
const Respuesta = (respuesta, contador) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="radio" id="${contador++}" name="respuestas" value="${respuesta}" > ${respuesta}
    `;
    return [div, contador];
}

export {
    Respuesta
}