fetch('https://render-lfvp.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))