
  // JavaScript para manejar el menú desplegable y el botón de enviar a WhatsApp
  document.addEventListener('DOMContentLoaded', function() {
    // Obtén elementos del DOM
    var cuotasSelect = document.getElementById('cuotasSelect');
    var enviarWhatsappBtn = document.getElementById('enviarWhatsapp');

    // Acción al hacer clic en "Enviar a WhatsApp"
    enviarWhatsappBtn.addEventListener('click', function() {
      var selectedCuotas = cuotasSelect.options[cuotasSelect.selectedIndex].text;

      if (selectedCuotas) {
        var numeroWhatsapp = "2983541686";
        var mensaje = "¡Quiero comprar la Pava Eléctrica en " + selectedCuotas + "!";
        var url = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + encodeURIComponent(mensaje);
        window.location.href = url;
      } else {
        alert("Por favor, selecciona una opción de cuotas antes de enviar a WhatsApp.");
      }
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