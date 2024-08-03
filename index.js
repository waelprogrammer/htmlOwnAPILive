fetch('https://render-lfvp.onrender.com/students')
      .then(response => response.json())
      .then(data => {
        let select = document.getElementById('select');
        data.forEach(st => {
            let opt = document.createElement('option');
            opt.innerHTML=st.id;
            select.appendChild(opt);    
        });
      })