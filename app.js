var main = function(){
	//scrollspy animation
	$('body').scrollspy({ target: ".scrollBtn", offset: 0 });

    $("#learnMore").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
	//prevent default submit
    $('#formSubmit').click(function(e) {
        e.preventDefault();
    });
    //prevent default submit end

    //main view animations
    $('#companyDescription').removeClass("hidden").hide().show("drop", { direction: "left" }, 750);

    $('#formWrapper').removeClass("hidden").hide().show("drop", { direction: "right" }, 750);
    //main view animations end

    //prevent default example-link
    $('.example-link').click(function(e) {
        e.preventDefault();
    });
    //prevent default example-link end
}	

$(document).ready(main);
	