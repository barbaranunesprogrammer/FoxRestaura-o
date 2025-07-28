# Fox Restauração 🦊

Landing page desenvolvida para a "Fox Restauração", uma empresa especializada em serviços de restauração veicular. O site apresenta a empresa, seus serviços e um carrossel de imagens para demonstrar a qualidade do trabalho.

[![Deploy with Vercel](https://vercel.com/button)](https://fox-restauracao.vercel.app/)

## 🚀 Demonstração ao Vivo

Você pode ver o site em funcionamento no novo link da Vercel:
**[Acessar a Fox Restauração](https://fox-restauracao.vercel.app/)**

## 📸 Screenshot

![Screenshot da página inicial da Fox Restauração](https://raw.githubusercontent.com/barbaranunesprogrammer/FoxRestaura-o/main/assets/img/background/Fox.png)



## ✨ Funcionalidades

- **Design Responsivo:** O site se adapta a diferentes tamanhos de tela, como desktops, tablets e celulares.
- **Carrossel de Imagens:** Utiliza a biblioteca Swiper.js para exibir um slider com exemplos de trabalhos realizados.
- **Contato Rápido:** Botões de WhatsApp e Instagram para facilitar o contato e engajamento.
- **Seções Informativas:** Apresenta a empresa e seus diferenciais de forma clara e objetiva.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura e semântica do conteúdo.
- **CSS3:** Para estilização, layout (Flexbox) e responsividade.
- **JavaScript:** Para a interatividade do carrossel de imagens.
- **[Swiper.js](https://swiperjs.com/):** Biblioteca para criar o carrossel de imagens.

## ⚙️ Como Executar o Projeto Localmente

Para visualizar o projeto em sua máquina local, siga estes passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/barbaranunesprogrammer/FoxRestaura-o.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd FoxRestaura-o
   ```

3. **Abra o arquivo `index.html` no seu navegador:**
   Você pode simplesmente clicar duas vezes no arquivo `index.html` ou abri-lo a partir do seu editor de código.

## 👩‍💻 Autora

**Bárbara Nunes**
- GitHub: [@barbaranunesprogrammer](https://github.com/barbaranunesprogrammer)
- LinkedIn: [barbaranunesprogrammer](https://www.linkedin.com/in/barbaranunesprogrammer)

---

## 🔄 Refatoração e Melhorias do CSS

O arquivo `style.css` passou por uma refatoração com o objetivo de modernizar o código, melhorar a organização, a manutenibilidade e a consistência visual.

### Principais Mudanças

As alterações focaram em seguir as melhores práticas de desenvolvimento web, resultando em um código mais limpo e eficiente.

#### 1. Organização e Redução de Redundância

-   **Consolidação de Estilos:** Estilos que se repetiam em várias seções (`.portfolio`, `.testimonials`, `.contact`, etc.) foram agrupados em uma regra base. Agora, apenas as diferenças específicas de cada seção são declaradas, o que reduz a duplicação de código e facilita futuras manutenções.

-   **Correção de Regras Duplicadas:** Havia uma definição duplicada para a classe `.section-title`. A duplicata foi removida, mantendo a versão mais completa e corrigindo a inconsistência.

#### 2. Consistência de Componentes (Botões)

-   **Padronização:** O botão com a classe `.botao_portfolio` foi renomeado para `.btn-portfolio` para seguir uma convenção de nomenclatura mais clara e moderna (lembre-se de atualizar o HTML).
-   **Melhora na Experiência do Usuário (UX):** Foi adicionado um efeito `:hover` ao `.btn-portfolio`, similar aos outros botões do site, para fornecer feedback visual ao usuário.

### Resumo dos Benefícios

-   **Código Mais Limpo:** Menos linhas e menos repetição.
-   **Manutenção Facilitada:** Alterar o estilo de uma seção agora é mais simples e seguro.
-   **Melhor Performance:** Arquivos CSS menores podem ser carregados e interpretados mais rapidamente pelo navegador.
-   **Experiência do Usuário Consistente:** Elementos interativos, como botões, agora se comportam de maneira semelhante.
