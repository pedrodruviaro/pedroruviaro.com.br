---
date: "2025-03-23"
tag: "acessibilidade"
---

<!--more-->

# Acessibilidade e Notificações: Como usar _role="alert"_ corretamente

Acessibilidade é um tópico extremamente delicado e difícil de fazer do jeito certo. Recentemente, tenho pensando mais sobre o assunto em tudo que desenvolvo para a web.

Para quem utiliza leitores de tela, uma notificação pode passar despercebida se não houver uma forma de anunciá-la corretamente. É aí que entra role="alert" [(Saiba mais na documentação oficial.)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)

Em um projeto recente usando _Laravel_ (e _Alpine.js_), precisei implementar um componente de mensagem (a famosa _“flash message”_) e tentei garantir que fosse o mais acessível possível. A melhor solução que encontrei foi essa do código abaixo:

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

Esse atributo [ARIA](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA) garante que mensagens importantes sejam lidas automaticamente assim que aparecem na tela, sem que o usuário precise interagir com elas. Isso é bastante útil para feedbacks de formulários, notificações de erro/sucesso ou outro aviso que precise de atenção. No momento em que o elemento com `role="alert"` é adicionado ao _DOM_, seu conteúdo é detectado e anunciado pelo leitor de tela.

É importante usá-lo com cuidado. Como essas mensagens são lidas imediatamente, não faz sentido aplicá-las a conteúdos que não exigem uma resposta do usuário ou que possam ser ignorados. Além disso, o texto precisa estar disponível assim que o elemento for renderizado, pois leitores de tela podem não captar mudanças dinâmicas.

Foi a melhor saída? Sinceramente, não sei. Pesquisando mais sobre os atributos _ARIA_, percebi o quanto o tópico é extenso e complexo de se aplicar.
