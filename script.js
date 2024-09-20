const takePictureButton = document.getElementById('take-picture');
const gallery = document.getElementById('gallery');
const map = document.getElementById('map');

function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
    ", Longitude: " + position.coords.longitude);
}

function takePicture() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play(); 



      const captureButton = document.createElement('button');
      captureButton.textContent = 'Capturar';
      captureButton.onclick = () => {

    
      };
      document.body.appendChild(captureButton);
    })
    .catch(err => {
      console.error("Erro ao acessar a câmera:", err);
    });
}


takePictureButton.addEventListener('click', takePicture);


getLocation();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker  registrado com sucesso:', registration);
        })
        .catch(error => {
          console.error('Erro ao registrar o Service Worker:', error); 
  
        });
    });
  }