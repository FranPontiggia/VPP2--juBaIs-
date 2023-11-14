
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

    