
  document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value;

    const numero = '5564981090252'; 
    const texto = `Olá, meu nome é ${nome}. Gostaria de saber mais sobre: ${servico}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  });
