$(document).ready(function(){

    $("#js-order-form").validate({

       rules:{

            form_name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            form_email:{
                required: true,
                email: true,
                maxlength: 16,
            },

            form_pass:{
                required: true,
            },
            form_pass2:{
                equalTo: "#passmain",
            },
            msg_send: {
              required: true,
            },
       },
       messages: {

                form_name: {
                  required: "Поле обязательно для заполнения",
                },
                form_email: {
                  required: "Поле обязательно для заполнения",
                  email: "Введите пожалуйста корректный e-mail",
                },
                form_pass:{
                required: "Поле обязательно для заполнения",
                },
                msg_send:{
                required: "Поле обязательно для заполнения",
                },
       },
       focusCleanup: true,
       focusInvalid: false,

      

    });

    

});



$(document).ready(function(){

  $("#js-register-form").validate({

       rules:{

            reg_name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            reg_email:{
                required: true,
                email: true,
                maxlength: 16,
            },
       },
       messages: {

                reg_name: {
                  required: "Поле обязательно для заполнения",
                },
                reg_email: {
                  required: "Поле обязательно для заполнения",
                  email: "Введите пожалуйста корректный e-mail",
                },
       },
       focusCleanup: true,
       focusInvalid: false,

      

    });

    

});
















/* -----------------------------------------------------------------------------

  HAMBURGER ICONS COMPONENT
  
  ----------------------------------------------------------------------------- */
//   (function() {

//     "use strict";

//     var toggles = document.querySelectorAll(".c-hamburger");

//     for (var i = toggles.length - 1; i >= 0; i--) {
//       var toggle = toggles[i];
//       toggleHandler(toggle);
//   };

//   function toggleHandler(toggle) {
//       toggle.addEventListener( "click", function(e) {
//         e.preventDefault();
//         (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   }

// })();
/* -----------------------------------------------------------------------------

 END HAMBURGER ICONS COMPONENT
  
 ----------------------------------------------------------------------------- */




/* -----------------------------------------------------------------------------

 Bootstrap - форма прошла валидацию
  
 ----------------------------------------------------------------------------- */

//  $(function() {
//         //при нажатии на кнопку с id="save"
//         $('#save').click(function() {
//           //переменная formValid
//           var formValid = true;
//           //перебрать все элементы управления input 
//           $('input').each(function() {
//           //найти предков, которые имеют класс .form-group, для установления success/error
//           var formGroup = $(this).parents('.form-group');
//           //найти glyphicon, который предназначен для показа иконки успеха или ошибки
//           var glyphicon = formGroup.find('.form-control-feedback');
//           //для валидации данных используем HTML5 функцию checkValidity
//           if (this.checkValidity()) {
//             //добавить к formGroup класс .has-success, удалить has-error
//             formGroup.addClass('has-success').removeClass('has-error');
//             //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
//             glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
//         } else {
//             //добавить к formGroup класс .has-error, удалить .has-success
//             formGroup.addClass('has-error').removeClass('has-success');
//             //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
//             glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
//             //отметить форму как невалидную 
//             formValid = false;  
//         }
//     });
//         //если форма валидна, то
//         if (formValid) {
//           //сркыть модальное окно
//           $('#myModal').modal('hide');
//           //отобразить сообщение об успехе
//           $('#success-alert').removeClass('hidden');
//       }
//     });
// });

/* -----------------------------------------------------------------------------

 Bootstrap - форма прошла валидацию
  
 ----------------------------------------------------------------------------- */



