
$(document).ready(function(){

        //modal//

        $('[data-modal=consultation]').on('click', function() {
          $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modal__close').on('click', function(){
          $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
        });


        function validateForm(form){
          $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 2        
              },
              phone: "required",
              email: {
                required: true,
                email: true
              }
            },
/*             messages: {
              name: {
                required: "Please, enter your name",
              },
              phone: "Please, enter your phone",
              email: {
                required: "Please, enter your e-mail",
              }
            } */
          });
        };
        validateForm('#consultation-form');
        validateForm('#consultation form');
        validateForm('#order form');
        
        $('[name=phone]').mask('+9(99)999-99-99');

        $('form').submit(function(e){
          e.preventDefault();
          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
          });
          return false;
        });

        //scrol pageup//

        $("#down").click(function(){
          //Необходимо прокрутить в конец страницы
          var height=$('html').height();
          $('html').animate({"scrollTop":height},('slow'));
          });

});


