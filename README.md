# React Interview Challenge

### Desenvolva uma aplicação em que:

- o usuário pode clicar em qualquer lugar da página.
- deve-se renderizar um pequeno círculo na posição clicada.
- a cada clique, mantém-se os círculos já criados e renderiza-se um novo.
- crie duas funcionalidades para a aplicação:
  - desfazer (undo)
  - refazer (redo)

# Problemas

Quando se usa a propriedade css position:abolute e se redimensiona a tela, os pontos posicionados não se adaptam ao tamanho da tela do navegador, então eu uso o custom hook useSize para saber o tamanho da janela e a função percentage para colocar o ponto na posição certa em relação as dimensões da janela.
