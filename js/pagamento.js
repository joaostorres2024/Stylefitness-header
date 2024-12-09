// Função para formatar a hora no formato HH:MM:SS
function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
  
    // Adiciona zero à esquerda se o número for menor que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    sec = sec < 10 ? '0' + sec : sec;
  
    return `${hours}:${minutes}:${sec}`;
  }
  
  // Contagem regressiva a partir de 10 minutos (600 segundos)
  let timeLeft = 10 * 60; // 10 minutos em segundos
  
  // Função para atualizar o relógio
  function updateClock() {
    if (timeLeft > 0) {
      // Formata o tempo restante
      const timeString = formatTime(timeLeft);
  
      // Atualiza o conteúdo do span com a hora
      document.getElementById('relogio').textContent = timeString;
  
      // Diminui 1 segundo
      timeLeft--;
    } else {
      // Quando o tempo acabar
      document.getElementById('relogio').textContent = "00:00:00";
    }
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);

  
// Função para copiar o value do campo de input
function copiarTexto() {
    const campoTexto = document.getElementById('campoTexto');
  
    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    
    // Atribui o valor do campo de input ao novo input temporário
    tempInput.value = campoTexto.value;
    
    // Seleciona o texto do input temporário
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');
    
    // Remove o input temporário da página
    document.body.removeChild(tempInput);
  
    // Exibe um alerta de confirmação
    alert('Seu QR CODE foi copiado com sucesso!');
  }
  
  // Adiciona um ouvinte de evento no botão para copiar o texto
  document.getElementById('botaoCopiar').addEventListener('click', copiarTexto);
  