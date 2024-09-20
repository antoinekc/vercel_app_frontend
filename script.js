
fetch('https://vercel-app-backend-gamma.vercel.app')
.then(response => response.json())
 .then(data => {
    console.log('Year received from backend:', data.year);
   document.querySelector('#year').textContent = data.year;
 }); 