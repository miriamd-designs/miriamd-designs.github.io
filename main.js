jQuery(document).ready(function($) {


	function filtrarGaleria(claseAMostrar) {
		console.log('Ahora estoy dentro de la funcion filtrarGaleria');
		console.log('Oculto todos los elementos de mi galería con $(".item-galeria").hide();');
		$('.item-galeria').hide();
		console.log('dentro de la funcion filtrarGaleria mi VARIABLE(cajita) se llama claseAMostar (este nombre puede ser lo que yo quiera) y contiene el valor de la VARIABLE(cajita) que antes se llamaba(elementoAmostrar)');
		$(claseAMostrar).show();
	}


	
	$('[data-filtro]').click(function(event) { 
		console.log( 'el evento que retorna es :');
		console.log( event );
		console.log('estoy evitando que el evento del link se ejecute con event.preventDefault();');
		event.preventDefault();
		console.log('mi evento se ejecuto en el link siguiente:');
		console.log(event.target);
		console.log('estoy buscando el elemento a mostrar dentro del link al que le hice click con $(event.target).data("option-value");')
		console.log('el valor de mi elemento a mostrar lo estoy guardando en una VARIABLE(una cajita) que en este caso se llama: elementoAmostrar')
		var elementoAmostrar = $(event.target).data('option-value');
		console.log('y me esta devoviendo este valor que se encuentra en la VARIABLE(cajita) elementoAmostrar: ' + elementoAmostrar);

		console.log('finalmente llamo a la funcion que oculta todos los elementos y luego muestra los que corresponden a la clase que está en la VARIABLE(cajita) elementoAmostrar')
		filtrarGaleria(elementoAmostrar);
	});


});




function mostrarMasGaleria() {
		var visible = $('.fresco:visible').length - 1;
		var totalImagenes = $('.fresco').length - 1;


		var visiblesTotal = visible + 3;

		if (visiblesTotal == totalImagenes) {
			$('.clase-comun').hide();
		}
	}

