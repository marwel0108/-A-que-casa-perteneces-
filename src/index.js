import './styles.css';
import { LimpiarRespuestas, Respuesta, Preguntas } from './app'

let contenedorPregunta = document.getElementById('pregunta');
let contenedorRespuesta =  document.getElementById('respuestasContenedor');
let Respuestas = document.getElementsByName('respuestas');
let btn = document.getElementById('btn');
let respuestas = Preguntas[1].respuestas;
let div;

let index = 1;
let pregunta = Preguntas[index].pregunta;
let contador = 0;
let casas = [
    1,
    1,
    1,
    1
];

contenedorPregunta.textContent = pregunta;

const CrearRespuestas = () => {
    respuestas.forEach(respuesta => {
        [div, contador] = Respuesta(respuesta, contador);
        contenedorRespuesta.append(div); 
    });
};

const Reiniciar = () => {
    index = 1;
    contador = 0;
    pregunta = Preguntas[index].pregunta;
    respuestas = Preguntas[index].respuestas;
    contenedorPregunta.textContent = pregunta;
    contenedorRespuesta.innerHTML = '';
    casas.forEach(casa => casa = 1);
    console.log(casas);
    CrearRespuestas();
}


CrearRespuestas();

btn.addEventListener('click', (event) => {

    event.preventDefault();
    if(index < 10) {
        Respuestas.forEach(respuesta => {
            if (respuesta.checked) {
                contador = respuesta.id;
                casas[contador]++;
            }
        })
        index++;
        contenedorRespuesta.innerHTML = '';
        [pregunta, contenedorPregunta, respuestas, contador] = LimpiarRespuestas(pregunta, contenedorPregunta, respuestas, contador, Preguntas, index);
        CrearRespuestas();
    } else if (index === 10) {
        let max = Math.max(casas[0], casas[1], casas[2], casas[3]);

        if (max == casas[0]) {
            alert('Usted pertenece a Gryffindor');
            Reiniciar();
        } else if (max == casas[1]) {
            alert('Usted pertenece a Slytherin');
            Reiniciar();
        } else if (max == casas[2]) {
            alert('Usted pertenece a Hufflepuf');
            Reiniciar();
        } else {
            alert('Usted pertenece a Ravenclaw');
            Reiniciar();
        }
    }
    
})

