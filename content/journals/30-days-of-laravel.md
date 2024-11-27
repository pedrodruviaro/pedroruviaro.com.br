---
date: "2024-11-23"
tag: "php"
---

Esse é um resumo sobre tudo que estou aprendendo no curso "30 days to learn laravel", do Laracast.

<!--more-->

# 30 dias para aprender Laravel

> Aqui vou documentar tudo que ando aprendendo no curso. Como referência, nunca mexi muito com PHP ou POO. Fiz um estudo de revisão e aprendizado de alguns conceitos chave antes de conhecer o framework.

[Página do curso](https://laracasts.com/series/30-days-to-learn-laravel-11)

---

## 01 - Hello, Laravel

[Documentação](https://laravel.com/)

- Tooling
  - [Laravel Herd](https://herd.laravel.com/)
    - $ cd /Herd
    - $ laravel nem example
    - cuidar com a configuração openssl (windows, principalmente) <- fiquei um bom tempo aqui

## 02 - First Route and View

- rotas -> routes/web.php
- views -> resources/views/\*.blade.php

```php
Route::get('/contact', function () {
    return view("contact");
});
```

Se fossemos criar uma API, o retorno é parseado para json, ex:

```php
Route::get('/contact', function () {
    return ['1', '2'];
});
```

## 03 - Create a layout file using Laravel Components

- Usados dentro de templates blade
- componentes são criados dentro de resources/views/Components
- são referenciados com o prefixo x- e usados como tags html

```
<!-- layout.blade.php -->
<x-layout></x-layout>
```

- componentes podem ter slots, que são acessados via _blade helpers_

```php
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>

    {{ $slot }}
</body>
```

- {{ $slot }} é compilado para <?php echo $slot; ?>

- Passando atributos html (default) aos componentes

- Passando variáveis aos componentes

```php
<a {{ $attributes }}>{{ $slot; }}</a>

// <x-nav-link style="color: red" href="/">Home</x-nav-link>
```

```php
<a href="{{ $myVar }}">{{ $slot; }}</a>

// <x-nav-link myVar="/">Home</x-nav-link>
```

## 04 - Using TailwindCSS

- [Componentes prontos](https://tailwindui.com/components)

- Usando **named slots**

```php
// layout
<h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ $heading }}</h1>
```

- usando na home com x-slot:

```php
<x-layout heading="Home">
    <x-slot:heading>
        Home page
    </x-slot:heading>

    <h1>Hello from Home</h1>
</x-layout>
```

## 05 - Styling the currently active navigation link

- Definindo props nos componentes
- Props viram variáveis dentro do template -> podem ser modificadas ou avaliadas dentro de @php no arquivo do componente

```php
@props(['active' => false])

<a {{ $attributes }} class="{{ $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }}  rounded-md px-3 py-2 text-sm font-medium" aria-current="{{ $active ? 'page' : 'false' }}">{{ $slot }}</a>
```

- Para passar o valor, se não for string, usamos a mesma sintaxe de bind do Vue

```php
<x-nav-link href="/" :active="request()->is('/')">Home</x-nav-link>
```

- Criando um link que pode ser um botão:

```php
@props(['active' => false, 'type' => 'a'])

@php
    $baseClasses = 'rounded-md px-3 py-2 text-sm font-medium';
    $activeClasses = $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    $classes = "$baseClasses $activeClasses";
@endphp

@if ($type === 'a')
    <a {{ $attributes->merge(['class' => $classes]) }}
        aria-current="{{ $active ? 'page' : 'false' }}">{{ $slot }}</a>
@else
    <button {{ $attributes->merge(['class' => $classes]) }}
        aria-current="{{ $active ? 'page' : 'false' }}">{{ $slot }}</button>
@endif
```

- ['class' => $classes] faz o merge das classes
- A função merge() no Laravel permite combinar os atributos passados ao componente com os atributos padrão definidos dentro do próprio componente.

- Adicionando uma validação para a prop apenas receber 'a' ou 'button'

```php
@props(['active' => false, 'type' => 'a'])

@php
    if (!in_array($type, ['a', 'button'])) {
        throw new \InvalidArgumentException("Invalid type '{$type}'. Allowed values are 'a' or 'button'.");
    }

    $baseClasses = 'rounded-md px-3 py-2 text-sm font-medium';
    $activeClasses = $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    $classes = "$baseClasses $activeClasses";
@endphp

@if ($type === 'a')
    <a {{ $attributes->merge(['class' => $classes]) }}
        aria-current="{{ $active ? 'page' : 'false' }}">{{ $slot }}</a>
@else
    <button {{ $attributes->merge(['class' => $classes]) }}
        aria-current="{{ $active ? 'page' : 'false' }}">{{ $slot }}</button>
@endif
```

## 06 - View Data and Route Wildcards

- Chaves do array viram variáveis no template

```php
// $jobs
Route::get('/jobs', function () {
    return view('jobs', ['jobs' => []]);
});
```

- No template, usamos a diretiva do blade

```php
    @foreach ($jobs as $job)
        <li><strong>{{ $job['title'] }}:</strong> Pays {{ $job['salary'] }} per year!</li>
    @endforeach
```

- **Route Wildcards**

```php
Route::get('/jobs/{id}', function ($id) {
    dd($id);
    // return view("");
});
```

-- dd => dump and die (exibe em tela e encerra a rota)

## 07 Autoloading, Namespaces, and Models

- Models => data layer. Represente a parte da regra de negócio

- Namespace => é uma forma de organizar o código para evitar colisão

```php
// app/Models/Job.php

<?php

namespace App\Models;

class Job {
    public static function all (): array {
        return [
            [
                'id' => 1,
                'title' => 'Director',
                'salary' => '$50,000'
            ],
            [
                'id' => 2,
                'title' => 'Programmer',
                'salary' => '$10,000'
            ],
            [
                'id' => 3,
                'title' => 'Teacher',
                'salary' => '$40,000'
            ]
        ];
    }
};
```

- Tratando erros (404)

```php
public static function find(int $id): array {
    $job = Arr::first(Job::all(), fn ($job) =>  $job['id'] == $id);

    if (!$job) {
        abort(404);
    }

    return $job;
}
```

- o erro de `abort` é capturado pelo laravel e uma tela de erro é exibida com o código de erro

## 08 Introduction to Migrations

> $ php artisan -> lista os comandos disponíveis

- DB GUI -> https://tableplus.com/

- Migrations -> ações que queremos fazer no banco de dados

  - é uma forma de estruturada e controlada de gerenciar alterações no esquema de um banco de dados ao longo do tempo.

- Criando uma Migration

  - $ php artisan make:migration

  - para rodar a nova migration

  - $ php artisan migrate

## 09 -
