---
date: "2025-02-25"
tag: "css"
---

<!--more-->

# Criando grids responsivos de maneira simples

Ao criar layouts responsivos com `CSS grid`, é comum definirmos valores diferentes para a quantidade de colunas utilizando media-queries.

```css
.grid-example {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
}

@media (min-width: 48rem) {
  .grid-example {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .grid-example {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Esse método gera uma certa repetição de código, além de precisarmos chutar os valores corretos para tudo ficar da forma certa.

Uma alternativa é utilizar `repeat` com `auto-fit` e a função `min()` para tornar o grid flexível sem precisar desse trabalho extra.

O `auto-fit` ajusta automaticamente o número de colunas, expandindo ou encolhendo os elementos conforme o espaço disponível.

Utilizando o exemplo abaixo, `minmax(min(20rem, 100%), 1fr)` garante que cada coluna tenha no mínimo _20rem_, mas sem ultrapassar _100%_ da largura do container.

```css
.grid-example {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
}
```

Em outras palavras, a função `min()` escolhe qual o menor valor e utiliza como largura. Se a tela for menor e não couber um elemento de _20rem_, sua largura será de _100%_.
