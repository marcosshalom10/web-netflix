"use strict";

var fila = document.querySelector('.contenedor-carousel');
var cursos = document.querySelectorAll('.curso');
var flechaIzquierda = document.getElementById('flecha-izquierda');
var flechaDerecha = document.getElementById('flecha-derecha'); // FLECHA DERECHA

flechaDerecha.addEventListener('click', function () {
  fila.scrollLeft += fila.offsetWidth;
  var indicadorActivo = document.querySelector('.indicadores .activo');

  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
}); // FLECHA IZQUIERDA

flechaIzquierda.addEventListener('click', function () {
  fila.scrollLeft -= fila.offsetWidth;
  var indicadorActivo = document.querySelector('.indicadores .activo');

  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
}); // PAGINACIÓN

var numeroPaginas = Math.ceil(cursos.length / 5);

var _loop = function _loop(i) {
  var indicador = document.createElement('button');

  if (i === 0) {
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', function (e) {
    fila.scrollLeft = i * fila.offsetWidth;
    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });
};

for (var i = 0; i < numeroPaginas; i++) {
  _loop(i);
} // HOVER 


cursos.forEach(function (curso) {
  curso.addEventListener('mouseenter', function (e) {
    var elemento = e.currentTarget;
    setTimeout(function () {
      cursos.forEach(function (curso) {
        return curso.classList.remove('hover');
      });
      elemento.classList.add('hover');
    }, 300);
  });
});
fila.addEventListener('mouseleave', function () {
  cursos.forEach(function (curso) {
    return curso.classList.remove('hover');
  });
}); // RANDOM

$(".carousel").html($(".carousel .curso").sort(function () {
  return Math.random() - 0.5;
}));