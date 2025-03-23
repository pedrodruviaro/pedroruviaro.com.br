---
date: "2025-03-26"
tag: "acessibilidade"
---

<!--more-->

# Acessibilidade e Notificações: Como usar _role="alert"_ corretamente

Acessibilidade é um tópico extremamente delicado e difícil de fazer do jeito certo. Recentemente tenho pensando mais sobre o assunto em tudo que desenvolvo para a web.

Em um projeto recente usando Laravel (+ Alpine.js), precisei implementar um componente de mensagem (a famosa “flash message”) e tentei garantir que fosse o mais acessível possível. A solução está mostrada no código da imagem.

Para quem utiliza leitores de tela, uma notificação visual pode passar despercebida se não houver uma forma de anunciá-la corretamente. É aí que entra role="alert".

Esse atributo ARIA garante que mensagens importantes sejam lidas automaticamente assim que aparecem na tela, sem que o usuário precise interagir com elas. Isso é especialmente útil para feedbacks de formulários, notificações de erro e qualquer outro aviso que precise de atenção imediata. No momento em que o elemento com role="alert" é adicionado ao DOM, seu conteúdo é detectado e anunciado pelo leitor de tela.

Mas é importante usá-lo com cuidado. Como essas mensagens são lidas imediatamente, não faz sentido aplicá-las a conteúdos que não exigem uma resposta do usuário ou que possam ser ignorados. Além disso, o texto precisa estar disponível assim que o elemento for renderizado, pois leitores de tela podem não captar mudanças dinâmicas depois disso.

```php
@if (session()->has('success'))
    <div x-data="{ flash: true }">
        <div x-show="flash"
            class="relative mb-10 rounded-lg text-lg text-green-800 border border-green-400 bg-green-100 px-4 py-3"
            role="alert">
            <strong class="font-bold">Success!</strong>
            <div>{{ session('success') }}</div>

            <div class="right-2 top-0 absolute">
                <button @click="flash = false" aria-label=”Close message”>&times;</button>
            </div>
        </div>
    </div>
@endif
```

Foi a melhor saída? Sinceramente, não sei. Pesquisando mais sobre os atributos ARIA, percebi o quanto o tópico é extenso e complexo de se aplicar.
