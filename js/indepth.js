var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="eb9e0a21-b911-430e-9591-57d10d52a9e2";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();


$("#indepth_tarjeta_pais").css({
	"width":ventana_ancho+"px",
	"height":ventana_alto+"px"
});

$.getJSON( urlIndepth+"js/data.json", function( data ) {
	var data1=data[Object.keys(data)[0]];
	
	
	
	if(ventana_ancho<700){
		for (var key in data) {
		    var value = data[key];
		    var div= '<div class="indepth_tabla_paises_item" pais="'+key+'"><div class="indepth_logo_pais"><img src="images/Banderas_circulos/'+normalize(value['nombre']).replace(/\s/g,"-").toUpperCase()+'.png"></div><div class="indepth_tabla_pais_nombre"><div class="indepth_tabla_pais_nombre_in">'+value['nombre']+'</div></div></div>';
		    
		    $("#indepth_tabla_paises_cont").append(div);
		}
		
		$(document).on("click",".indepth_tabla_paises_item",function(){
			var pais_tabla=$(this).attr("pais");
			
			console.log(data[pais_tabla]);
			
			llenar_datos_movil((data[pais_tabla]));
			$("#indepth_tarjeta_pais").css("display","table");
		});
		
		$(document).on("click",".indepth_tarjeta_x",function(){
			$("#indepth_tarjeta_pais").css("display","none");
		});
		
		
		
		
	}else{
		llenar_datos(data1);
	
		$(document).on("mouseover", "circle",function(){
			var data2=data[$(this).parent().attr("id")];
			llenar_datos(data2);
		});
	}
	
	
	
});

var llenar_datos_movil = function(datos){
	var data_img="images/banderas_cuadradas/"+normalize(datos["nombre"]).replace(/\s/g,"-").toUpperCase()+".png";
	$("#indepth_tarjeta_pais_nombre").html(datos["nombre"]);
	$("#indepth_tarjeta_pais_logo img").attr("src",data_img);
	
	$("#tarjeta_actos .indepth_actos_text").html(datos["actos"]);
	$("#tarjeta_dinero .indepth_actos_text").html(datos["dinero"]);
	
	if(datos["t_in"]){
		var involucrados=datos["involucrados"];
		console.log(involucrados.length)
		if(involucrados.length>2){
			$(".indepth_inv_cont").addClass("inv4");
			$(".indepth_inv_cont").removeClass("inv2");
		}else{
			$(".indepth_inv_cont").addClass("inv2");
			$(".indepth_inv_cont").removeClass("inv4");
		}
		
		$(".indepth_inv_cont").html("");
		
		
		$.each(involucrados, function( i, item ) {
			var div='<div class="indepth_inv_item"><img src="images/circulo/'+normalize(item).replace(/\s/g,"-").toUpperCase()+'.png"  ><div class="indepth_inv_text">'+item+'</div></div>';
			
			$(".indepth_inv_cont").append(div);
		});
		
		
	}else{
		$(".indepth_inv_cont").html(datos["involucrados"][0]);
	
	}
};

var llenar_datos = function(datos){
	var data_img="images/Banderas_circulos/"+normalize(datos["nombre"]).replace(/\s/g,"-").toUpperCase()+".png";
	$("#indepth_pais_text").html(datos["nombre"]);
	$("#indepth_pais_logo img").attr("src",data_img);
	
	$("#actos_text").html(datos["actos"]);
	$("#dinero_text").html(datos["dinero"]);
	
	if(datos["t_in"]){
		var involucrados=datos["involucrados"];
		console.log(involucrados.length)
		if(involucrados.length>2){
			$(".indepth_inv_cont").addClass("inv4");
			$(".indepth_inv_cont").removeClass("inv2");
		}else{
			$(".indepth_inv_cont").addClass("inv2");
			$(".indepth_inv_cont").removeClass("inv4");
		}
		
		$(".indepth_inv_cont").html("");
		
		
		$.each(involucrados, function( i, item ) {
			var div='<div class="indepth_inv_item"><img src="images/circulo/'+normalize(item).replace(/\s/g,"-").toUpperCase()+'.png"  ><div class="indepth_inv_text">'+item+'</div></div>';
			
			$(".indepth_inv_cont").append(div);
		});
		
		
	}else{
		$(".indepth_inv_cont").html(datos["involucrados"][0]);
	
	}
}

$(document).on("click", "#indepth_cover" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	var ventana_alto = $(window).height();
	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    	$('#indepth_cover').css("height",(ventana_alto)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");


	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	indepth_preloadImgs();
	 ventana_alto = $(window).height();
	 ventana_ancho = $(window).width();
    	$('#indepth_cover').css("height",(ventana_alto)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	 ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})

var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }      
      return ret.join( '' );
  }
 
})();