'use strict';

$(document).ready(()=>{
    var contador1=0;    
    var textoAnimal=document.getElementById('textoAnimal');    
    var conteo=(()=>{
        setTimeout(()=>{
            $('.indicacion').show(2000);
        }, 3500);
    })

    function Metodo(){       
    if(contador1==0){
        $('#imagenAnimal').show(1500);        
        $('#imagenPlantae').hide(1500);
        $('#imagenFungi').hide(1500);
        $('#imagenMonera').hide(1500);
        $('#imagenProtista').hide(1500);
        conteo();
        contador1=1;
    }else{
        $('#imagenAnimal').hide(1500);
        $('#imagenPlantae').hide(1500);
        $('#imagenFungi').hide(1500);
        $('#imagenMonera').hide(1500);
        $('#imagenProtista').hide(1500);
        contador1=0;     
        } 
    }
    textoAnimal.addEventListener('click', Metodo, true);

$('#imagenAnimal').hover(()=>{
    $('#div1').show(800);
}, function(){
    $('#imagenAnimal').hide(1500);
    $('#div1').hide(800);
})

var contador2=0;
var textoPlantae=document.getElementById('textoPlantae');

function Metodo2(){    
    if(contador2==0){
    $('#imagenPlantae').show(1500);
    $('#imagenAnimal').hide(1500);    
    $('#imagenFungi').hide(1500);
    $('#imagenMonera').hide(1500);
    $('#imagenProtista').hide(1500);
    conteo();
    contador2=1;
    }else{
    $('#imagenPlantae').hide(1500);
    $('#imagenAnimal').hide(1500);    
    $('#imagenFungi').hide(1500);
    $('#imagenMonera').hide(1500);
    $('#imagenProtista').hide(1500);
    contador2=0;
    }
}
textoPlantae.addEventListener('click', Metodo2, true);

$('#imagenPlantae').hover(()=>{
    $('#div2').show(800);
}, function(){
    $('#imagenPlantae').hide(1500);
    $('#div2').hide(500);
})   

var contador3=0;
var textoFungi=document.getElementById('textoFungi');

function Metodo3(){
    if(contador3==0){
    $('#imagenFungi').show(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);    
    $('#imagenMonera').hide(1500);
    $('#imagenProtista').hide(1500);
    conteo();
    contador3=1;
    }else{
    $('#imagenFungi').hide(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);    
    $('#imagenMonera').hide(1500);
    $('#imagenProtista').hide(1500);        
    contador3=0;
    }
}
textoFungi.addEventListener('click', Metodo3, true);

$('#imagenFungi').hover(()=>{
    $('#div3').show(800);
}, function(){
    $('#imagenFungi').hide(1500);
    $('#div3').hide(500);
})

var contador4=0;
var textoMonera=document.getElementById('textoMonera');

function Metodo4(){
    if(contador4==0){
    $('#imagenMonera').show(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);
    $('#imagenFungi').hide(1500);    
    $('#imagenProtista').hide(1500);
    conteo();
    contador4=1;
    }else{
    $('#imagenMonera').hide(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);
    $('#imagenFungi').hide(1500);    
    $('#imagenProtista').hide(1500);    
    contador4=0;    
    }
}
textoMonera.addEventListener('click', Metodo4, true);


$('#imagenMonera').hover(()=>{
    $('#div4').show(800);
}, function(){
    $('#imagenMonera').hide(1500);
    $('#div4').hide(500);
})

var contador5=0;
var textoProtista=document.getElementById('textoProtista');

function Metodo5(){
    if(contador5==0){
    $('#imagenProtista').show(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);
    $('#imagenFungi').hide(1500);
    $('#imagenMonera').hide(1500);    
    conteo();
    contador5=1;
    }else{
    $('#imagenProtista').hide(1500);
    $('#imagenAnimal').hide(1500);
    $('#imagenPlantae').hide(1500);
    $('#imagenFungi').hide(1500);
    $('#imagenMonera').hide(1500);            
    contador5=0;
    }
}
textoProtista.addEventListener('click', Metodo5, true);

$('#imagenProtista').hover(()=>{
    $('#div5').show(800);
}, function(){
    $('#imagenProtista').hide(1500);
    $('#div5').hide(500);
})
})

/* var ciencia=document.getElementById('ciencia');
var ciencia2=document.getElementsByClassName('.ciencia');

function metodo20(){    
        ciencia.innerHTML=(ciencia2);
} */
