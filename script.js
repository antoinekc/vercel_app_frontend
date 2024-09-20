
fetch('https://vercel-app-backend-gamma.vercel.app')
.then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 }); 