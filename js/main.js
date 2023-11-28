document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los elementos con la clase 'enviarWhatsapp'
  var enviarWhatsappBtns = document.querySelectorAll('.enviarWhatsapp');

  // Itera sobre cada botón de enviar a WhatsApp
  enviarWhatsappBtns.forEach(function(enviarWhatsappBtn) {
      // Acción al hacer clic en "Enviar a WhatsApp"
      enviarWhatsappBtn.addEventListener('click', function() {
          // Obtén elementos del DOM dentro de cada producto
          var cuotasSelect = enviarWhatsappBtn.closest('.card-body').querySelector('.form-select');

         
          var producto = enviarWhatsappBtn.getAttribute('data-producto');
          var numeroWhatsapp = enviarWhatsappBtn.getAttribute('data-numeroWhatsapp');

          // Obtén el valor seleccionado en el cuadro de selección
          var selectedCuotas = cuotasSelect.options[cuotasSelect.selectedIndex].text;

          if (selectedCuotas) {
              // Crea el mensaje personalizado
              var mensaje = "¡Quiero comprar " + producto + " en " + selectedCuotas + "!";
              // Construye la URL de WhatsApp
              var url = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + encodeURIComponent(mensaje);
              // Redirige a la URL de WhatsApp
              window.location.href = url;
          } else {
              // Muestra un mensaje de alerta si no se selecciona una opción de cuotas
              alert("Por favor, selecciona una opción de cuotas antes de enviar a WhatsApp.");
          }
      });
  });
});


  // Inicializa EmailJS
  (function() {
    // MI clave pública de EmailJS
    emailjs.init('NFZ0f8AnPcq8mlMM-');
  })();

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const btn = document.querySelector('button[type="submit"]');
      btn.value = 'Enviando...';
  
      const serviceID = 'service_ndf8bew';
      const templateID = 'template_ea6raia';
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'ENVIAR MENSAJE';
          document.getElementById('success-message').classList.remove('d-none');
        document.getElementById('error-message').classList.add('d-none'); // Oculta el mensaje de error si estaba visible.
          
          // Restablecer los valores de los campos del formulario
          document.getElementById('user_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('message').value = '';
        })
        .catch((err) => {
          btn.value = 'ENVIAR MENSAJE';
          document.getElementById('success-message').classList.add('d-none'); // Oculta el mensaje de éxito si estaba visible.
          document.getElementById('error-message').classList.remove('d-none');
          alert(JSON.stringify(err));
        });
    });
  };
  
  // Manejar el envío del formulario de filtro
const filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  filterProperties();
});