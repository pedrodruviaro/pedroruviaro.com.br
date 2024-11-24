---
date: "2024-11-23"
tag: "php"
---

Esse é um resumo sobre tudo que estou aprendendo no curso "30 days to learn laravel", do Laracast.

<!--more-->

# 30 dias para aprender Laravel

Aqui vou documentar tudo que ando aprendendo no curso. Como referência, nunca mexi muito com PHP ou POO. Fiz um estudo de revisão e aprendizado de alguns conceitos chave antes de conhecer o framework.

> [Página do curso](https://laracasts.com/series/30-days-to-learn-laravel-11)

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
