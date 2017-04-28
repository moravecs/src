(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Calle Medes 4, Barcelona"; // Venue
    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.RegisterForm();
            fn.Apps();
        },


        // Registration Form
        RegisterForm: function () {
            $("#register-form").submit(function (e) {
                e.preventDefault();
                var name = $("#name").val(),
                    email = $("#email").val(),
                    cp = $("#cp").val(),
                    dataString = 'name=' + name + '&email=' + email + '&cp=' + cp ;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(email) && (name.length > 1) && (cp.length > 1)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#register-form .form-notification').fadeIn(500);
                        }
                    });
                } else {
                    if (!isValidEmail(email)) {
                        $('input#email').addClass('not-valid');
                    } else {
                        $('input#email').removeClass('not-valid');
                    }
                    if (name.length === 0) {
                        $('input#name').addClass('not-valid');
                    } else {
                        $('input#name').removeClass('not-valid');
                    }
                    if (cp.length === 0) {
                        $('input#cp').addClass('not-valid');
                    } else {
                        $('input#cp').removeClass('not-valid');
                    }
                }
                return false;
            });
        },



        // Apps
        Apps: function () {

            // Accordion
            $('.accordion-group').accordion();

            // Go Top
            $('#gotop').click(function () {
                $('html, body').scrollTo($('#header'), 500, {easing:'swing'});
            });

            // Go Top
            $('.navbar-brand').click(function () {
			$(location).attr('href','http://www.graduadoenesoadistancia.com');
			})
        }


    };

    $(document).ready(function () {
        fn.Launch();
		$('#sectoractividad').fancySelect();
		$('#sinivel').fancySelect();
		$('#nivelestudios').fancySelect();

    });

})(jQuery);