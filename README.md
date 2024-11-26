# Javascript
Atividade Prática Integrada: Desenvolvendo uma Aplicação Simples em JavaScript.

# Atividade Prática Integrada: Desenvolvendo uma Aplicação Simples em JavaScript

Nesta atividade, você criará uma aplicação simples para consolidar os conceitos abordados recentemente, incluindo **estruturas de controle**, **tipos de variáveis** e **funções**. O objetivo é aplicar esses conceitos de forma prática e criativa.

---

## 📋 Descrição da Aplicação

### **Calculadora de Média**

A aplicação permitirá que o usuário insira notas de alunos, calcule a média e exiba o resultado de forma dinâmica. Para isso, você utilizará funções para modularizar o código e estruturas de controle para validar as entradas.

---

## 🚀 Passo a Passo

### **1. Estrutura HTML**
1. Crie um formulário HTML com:
   - Campos de entrada para as notas (utilize `<input type="number">`).
   - Um botão para acionar o cálculo da média.
2. Adicione uma área na página para exibir o resultado (pode ser um `<div>` ou `<p>`).

Exemplo básico:
```html
<form id="form-notas">
    <input type="number" placeholder="Digite uma nota" />
    <button type="button" id="calcular">Calcular Média</button>
</form>
<div id="resultado"></div>
