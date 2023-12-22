<script>
    function formatarCEP(event) {
      // Obtém o valor atual do input
      let cep = event.target.value;

      // Remove caracteres não numéricos
      cep = cep.replace(/\D/g, '');

      // Adiciona os pontos e o traço nas posições corretas
      if (cep.length > 1) {
        cep = cep.substring(0, 2) + '.' + cep.substring(2);
      }

      if (cep.length > 5) {
        cep = cep.substring(0, 6) + '-' + cep.substring(6);
      }

      // Atualiza o valor do input
      event.target.value = cep;
    }

    // Impede a entrada de caracteres não numéricos
    document.getElementById('cepInput').addEventListener('keydown', function (e) {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];

      if (allowedKeys.includes(e.key)) {
        // Se a tecla pressionada for Backspace, apaga todo o conteúdo
        if (e.key === 'Backspace') {
          document.getElementById('cepInput').value = '';
        }
      } else if (isNaN(parseInt(e.key, 10))) {
        // Impede a entrada de caracteres não numéricos
        e.preventDefault();
      }
    });
  </script>