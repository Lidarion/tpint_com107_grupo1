//imagenes de la appi

fetch('https://reqres.in/api/users?page=1&per_page=3')
    .then(response => response.json())
    .then(data => {
      // Mostrar los datos de los directivos en la página
      document.getElementById('director1-img').src = data.data[0].avatar;
      document.getElementById('director1-name').textContent = `${data.data[0].first_name} ${data.data[0].last_name}`;
      document.getElementById('director1-email').textContent = data.data[0].email;
      
      document.getElementById('director2-img').src = data.data[1].avatar;
      document.getElementById('director2-name').textContent = `${data.data[1].first_name} ${data.data[1].last_name}`;
      document.getElementById('director2-email').textContent = data.data[1].email;
      
      document.getElementById('director3-img').src = data.data[2].avatar;
      document.getElementById('director3-name').textContent = `${data.data[2].first_name} ${data.data[2].last_name}`;
      document.getElementById('director3-email').textContent = data.data[2].email;
    });

    //formulario del proceso 
    $(document).ready(function() {

        // Esconder todos los pasos excepto el primero
        $('.form-step').not(':first').hide();
      
        // Botón siguiente
        $('.next-btn').click(function() {
          var parent_fieldset = $(this).parents('.form-step');
          var next_step = true;
          var current_step_valid = true;
      
          // Validar campos del paso actual
          parent_fieldset.find(':required').each(function() {
            if ($(this).val() == '') {
              $(this).addClass('is-invalid');
              next_step = false;
              current_step_valid = false;
            } else {
              $(this).removeClass('is-invalid');
            }
          });
      
          // Si el paso actual es válido, mostrar el siguiente paso
          if (current_step_valid) {
            parent_fieldset.removeClass('active').addClass('activated').next('.form-step').removeClass('disabled').addClass('active');
          }
      
          // Si el siguiente paso no está activo, esconder el botón siguiente
          if (!parent_fieldset.next('.form-step').hasClass('active')) {
            $(this).hide();
          }
      
          // Si el paso actual no es el último, mostrar el botón anterior
          if (!parent_fieldset.is(':last-child')) {
            parent_fieldset.next('.form-step').find('.prev-btn').show();
          }
      
          // Evitar que el formulario se envíe
          if (!next_step) {
            return false;
          }
        });
      
        // Botón anterior
        $('.prev-btn').click(function() {
          $(this).parents('.form-step').removeClass('active').prev('.form-step').addClass('active');
          $('.next-btn').show();
          if ($(this).parents('.form-step').prev('.form-step').is(':first-child')) {
            $(this).hide();
          }
        });
      
        // Validar campos en tiempo real
        $(':input').on('input', function() {
          if ($(this).val() != '') {
            $(this).removeClass('is-invalid');
          }
        });
      
        // Envío de formulario
        $('#cotizacion-form').submit(function(event) {
          event.preventDefault();
      
          // Generar resumen
          var summary = '';
          $('#cotizacion-form').serializeArray().forEach(function(field) {
            summary += '<strong>' + field.name + '</strong>: ' + field.value + '<br>';
          });
      
          // Mostrar resumen
          $('#resumen-cotizacion').html(summary);
      
          // Generar PDF y enviar correo
          // código para generación de PDF y envío de correo
      
          // Mostrar mensaje de respuesta
          $('#respuesta').removeClass('alert-danger').addClass('alert-success').html('La cotización ha sido enviada correctamente.');
        });
      
      });
      window.onload = function() {

        // Esconder todos los pasos excepto el primero
        var form_steps = document.querySelectorAll('.form-step');
        for (var i = 1; i < form_steps.length; i++) {
          form_steps[i].classList.add('disabled');
        }
      
        // Botón siguiente
        var next_buttons = document.querySelectorAll('.next-btn');
        for (var i = 0; i < next_buttons.length; i++) {
          next_buttons[i].addEventListener('click', function() {
            var parent_fieldset = this.parentElement;
            var next_step = true;
            var current_step_valid = true;
      
            // Validar campos del paso actual
            var required_inputs =