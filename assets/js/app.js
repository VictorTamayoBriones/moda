    var btnProbar = document.querySelector('#probar');
    var datos = document.querySelectorAll('#dato');
    var resultado = document.querySelector('.resultado');

    btnProbar.addEventListener('click', ()=>{
        for(var i = 0; i<datos.length; i++){
            
            for(var x = i + 1; x<datos.length; x++){

                if(datos[i].value == datos[x].value){
                    console.log("La moda es: " + datos[i].value);
                    var moda = datos[i].value;
                    console.log(moda);
                    resultado.style.display = 'block';
                    resultado.innerHTML = "<p>La moda es: " + moda + "</p>";
                }

            }
        }
    });