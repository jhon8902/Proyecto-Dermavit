document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Cerrar cualquier respuesta abierta que no sea la seleccionada
    document.querySelectorAll(".faq-answer").forEach(otherAnswer => {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("open");
      }
    });

    // Alternar la respuesta seleccionada
    answer.classList.toggle("open");
  });
});



  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
      // Aquí puedes agregar el código para mostrar/ocultar el contenido relacionado.
    });
  });

