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
      // paso 1 valida al 2
      $('.next-btn').eq(0).click(function() {
        // valida paso 1
        if ($('#cotizacion-form')[0].checkValidity()) {
          // Move to step 2
          $('#paso1').addClass('d-none');
          $('#paso2').removeClass('d-none');
          $('.progress-bar').css('width', '66%').attr('aria-valuenow', 66).text('Paso 2 de 3');
        } else {
          // muestra validacion de error
          $('#cotizacion-form')[0].reportValidity();
        }
      });
      
      // paso 2: valida y mueve al paso 1 o 3
      $('.next-btn').eq(1).click(function() {
        // valida paso 2
        if ($('#cotizacion-form')[0].checkValidity()) {
          // mueve a paso 3
          $('#paso2').addClass('d-none');
          $('#paso3').removeClass('d-none');
          $('.progress-bar').css('width', '100%').attr('aria-valuenow', 100).text('Paso 3 de 3');
        } else {
          // muestra validacion de error
          $('#cotizacion-form')[0].reportValidity();
        }
      });
      
      $('.prev-btn').click(function() {
        // de vuelta a paso 1
        $('#paso3').addClass('d-none');
        $('#paso2').addClass('d-none');
        $('#paso1').removeClass('d-none');
        $('.progress-bar').css('width', '33%').attr('aria-valuenow', 33).text('Paso 1 de 3');
      });
    });
    
    