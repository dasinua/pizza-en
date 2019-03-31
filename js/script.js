(function($, undefined){
    $(function(){

    	// carousel
    	$('.carousel').carousel({
	      interval: false, //false
	      pause: 'hover'
    	})

    	// anchors
 		$("#daMenu a").on("click", function(event) {

        event.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 67
        }, 500);

		});

		//fixed menu
		 var headerH = $("#daHeader").height(),
		        navH = $("#daNav").innerHeight();

		    $(document).on("scroll", function() {

		        var documentScroll = $(this).scrollTop();

		        if(documentScroll > headerH) {
		            $("#daNav").addClass("da-fixed");

		            $("#daHeader").css({
		                "paddingTop": navH
		            });
		        } else {
		            $("#daNav").removeClass("da-fixed");
		            $("#daHeader").removeAttr("style");
		        }

		});

        // maskedinput
 		 $(".maskedinput").mask("+7(999) 999-9999");

 		 //mail
	    $("#form1, #form2").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $("#myModal").modal('hide');
	      $("#thanks").modal('show');
	      $("#form1, #form2").trigger("reset");

	    });
	    return false;
	    });

	    cartjs.initialize({
	    emailOrdersTo  : 'dasflancer@gmail.com', // Ваша почта
	    language       : 'russian',            // Язык
	    currency       : 'руб.',               // валюта

	    requireName    : true,      // Спрашивать имя покупателя.
	    requirePhone   : true,      // Спрашивать телефон покупателя.
	    requireEmail   : false,     // Спрашивать почту покупателя.
	    requireAddress : true,     // Спрашивать адрес покупателя.
	  })


	    //fancybox
       $(".fancybox").fancybox();

       // button
       var size = $('.menu-pizza__size');
       var btn = $('.menu-pizza__btn');

       size.on('mousedown', function(){
       		btn.html('Добавлено');
       });
       size.on('mouseout', function(){
       		btn.html('To order');
       });



    });
})(jQuery);
