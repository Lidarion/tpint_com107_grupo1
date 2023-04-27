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