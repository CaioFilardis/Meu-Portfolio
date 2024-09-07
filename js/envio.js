document.getElementById("whatsappForm").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos input
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `Olá, me chamo ${fullname},\n
    ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de telefone do destinatário (substitua pelo número desejado)
    const phoneNumber = "5521995291891"; // Exemplo: +55 11 99999-9999

    // Cria a URL do WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abre a URL em uma nova aba
    window.open(whatsappUrl, '_blank');
};