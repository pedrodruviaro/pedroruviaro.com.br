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

## 09 - Meet Eloquent

- Um dos pilares do Laravel

- ORM -> Object Relational Mapper

- $ php artisan tinker
  - playground onde podemos trabalhar com o modelo
    - $ App\Models\Job::create(['title' => 'Acme Director', 'salary' => '$ 100000000'])

```php
use Illuminate\Database\Eloquent\Model;

class Job extends Model {
    protected $table = 'job_listings';
    protected $fillable = ['title', 'salary'];
};
```

- `Job::all()` -> Retorna todos os jobs
- `Job::find($id)` -> Retorna o objeto com mesmo ID

- $ php artisan make:model Post -m
  - cria o modelo e a migration

## 10 - Model Factories

- Usados para gerar dados

- Dentro do modelo, usar `use HasFactory;`

- Utiliza o `faker` por baixo dos panos

- $ php artisan make:factory Job

- definindo a factory de Job

```php
public function definition(): array
{
    return [
        'title' => fake()->jobTitle(),
        'salary' => '$ 50,000 USD'
    ];
}
```

- Podemos criar relações dentro das Factories

```php
public function definition(): array
{
    return [
        'title' => fake()->jobTitle(),
        'employer_id' => Employer::factory(),
        'salary' => '$ 50,000 USD'
    ];
}
```

- Dessa forma, sempre que criamos um Job, criaremos um Employer e relacionaremos o `ID` com o `employer_id`. Isso acontece pois na migration definimos a relação:

  ```php
  Schema::create('job_listings', function (Blueprint $table) {
      $table->id();
      // $table->unsignedBigInteger('employer_id');
      $table->foreignIdFor(App\Models\Employer::class);
      $table->string('title');
      $table->string('salary');
      $table->timestamps();
  });
  ```

## 11 - Two Key Eloquent Relationship Types

- relações `belongsTo` e `hasMany`

- um Job pertence a um Employer, portanto a relação é criada assim:

```php
class Job extends Model {
    use HasFactory;

    protected $table = 'job_listings';
    protected $fillable = ['title', 'salary'];

    public function employer() {
        return $this->belongsTo(Employer::class);
    }
};
```

- Assim, podemos acessar `$job->employer` e obter os dados do modelo Employer

- Um Employer tem muitos Jobs

```php
class Employer extends Model
{
    use HasFactory;

    public function jobs() {
        return $this->hasMany(Job::class);
    }
}
```

- O acesso ocorre da mesma forma anterior: `$employer->jobs`. Podemos acessar com `jobs[0]` ou com métodos específicos, como `jobs->first()`

### Exercício -> criando uma relação entre posts e comentários

```php
    Schema::create('comments', function (Blueprint $table) {
        $table->id();
        $table->string('comment');
        $table->foreignIdFor(App\Models\Post::class)->constrained()->cascadeOnDelete();
        $table->timestamps();
    });
```

- Habilito no modelo Comment a relação

```php
public function post() {
    return $this->belongsTo(Post::class);
}
```

- Faço o factory com Post::factory()

```php
public function definition(): array
{
    return [
        'comment' => fake()->text(),
        'post_id' => Post::factory(),
    ];
}
```

## 12 - Pivot Tables and BelongsToMany Relationships

- Pivot table => tabela contendo a relação entre outros dados, como `tag_id` e `job_listing_id`

- constrains on sqlite (comando SQL) -> `PRAGMA foreign_keys=on;`

- Nesse caso, criamos a pivot table dentro da mesma migration de tags

```php
    Schema::create('job_tag', function (Blueprint $table) {
        $table->id();
        $table->foreignIdFor(\App\Models\Job::class, 'job_listing_id')->constrained()->cascadeOnDelete();
        $table->foreignIdFor(\App\Models\Tag::class)->constrained()->cascadeOnDelete();
        $table->timestamps();
    });
```

- E colocamos também na função `down()`

```php
public function down(): void
{
    Schema::dropIfExists('tags');
    Schema::dropIfExists('job_tag');

}
```

- Uma `Tag` pertence a vários Jobs

```php
public function jobs() {
    return $this->belongsToMany(Job::class, relatedPivotKey: "job_listing_id");
}
```

- E um Job pertence a várias Tags

```php
public function tags() {
    return $this->belongsToMany(Tag::class, foreignPivotKey: "job_listing_id");
}
```

- Se um Job ou uma Tag for apagada, o registro na pivot table também é removido

## 13 - Eager Loading and the N+1 Problem

- N + 1 -> queries SQL sendo performadas dentro de loops

```php
@foreach ($jobs as $job)
    <a href="/jobs/{{ $job['id'] }}" class="block px-4 py-6 border rounded-lg border-gray-200">
        <div class="font-bold text-blue-500 text-sm mb-2">
            {{ $job->employer->name }}
        </div>
        <div>
            <strong>{{ $job['title'] }}:</strong> Pays {{ $job['salary'] }} per year!
        </div>
    </a>
@endforeach
```

- `{{ $job->employer->name }}` faz uma referência e executa uma query a cada iteração

- Resolvendo isso com **eager loading**

```php
$jobs = Job::with('employer')->get();
```

- Dessa forma a query é feita antes da renderização da rota

## 14 - All You Need to Know About Pagination

- Paginação é algo simples (até demais) no Laravel

- Simplesmente acessamos o método **paginate(LIMIT)** na rota

```php
Route::get('/jobs', function () {
    $jobs = Job::with('employer')->paginate(10);
    // $jobs = Job::with('employer')->simplePaginate(5);
    // $jobs = Job::with('employer')->cursorPaginate(5);

    return view('jobs', [
        'jobs' =>  $jobs
    ]);
});
```

    - Cursor based -> usado em infite scrolling, por exemplo e bases maiores de dados

- Para mostrar os links em tela, simplesmente chamamos:

```php
<div>
    {{ $jobs->links() }}
</div>
```

- Para modificar o estilo e HTML da paginação, baixamos os arquivos via `artisan`, selecionando `laravel-pagination`

- $ php artisan vendor:publish

- Com isso, o arquivo blade é baixado na pasta `vendor`

- No arquivo de configuração `AppServiceProvider.php` podemos selecionar o provedor com `Paginator::useTailwind();`

- Adicionando `order` por **data de criação**:

```php
$jobs = Job::with('employer')->latest()->paginate(5);
```

## 15 - Understanding Database Seeders

- Podemos rodar as migrations com `fresh` em conjunto com `seed`

- $ php artisan migrate:fresh --seed

- Os seeders defaults ficam em `seeders/DatabaseSeeder.php`

  - Definimos igual ao comando no CLI -> `Job::factory(200)->create();`

- Se necessário, podemos criar novos seeders e separar as responsabilidades

  - $ php artisan make:seed

  - Agora, basta referenciar com `$this->call(JobSeeder::class);` no arquivo `DatabaseSeeder.php`

## 16 - Forms and CSRF Explained (with Examples)

- CSRF = Cross-Site Request Forgery

- Para prevenir isso, precisamos colocar a diretiva do blade `@csrf` dentro de **todo form criado**

  - Assim, o Laravel lê o token e faz a comparação automaticamente

- Os valores são pegos pelo `name` do campo

- Podemos criar o modelo com base no método `request()`. `request()->all()` pega tudo.

```php
Route::post('/jobs', function () {
    // validation

    Job::create([
        'title' => request('title'),
        'salary' => request('salary'),
        'employer_id' => 1
    ]);

    return redirect('/jobs');
});
```

## 17 - Always Validate. Never Trust the User.

- Validando requisições

- Usamos o método `validate` presente em `request()`

```php
request()->validate([
    'title' => ['required', 'min:3'],
    'salary' => ['required', 'min:3']
]);
```

- Regras de validação padrão: https://laravel.com/docs/11.x/validation#available-validation-rules

  - Se a validação falhar, o Laravel automaticamente _retorna_ para a rota origem, não executando o código posterior ao método `validate()`

- Para exibir a mensagem de erro no form, usamos a diretiva `@error` do blade

```php
@error('title')
    <span class="text-red-400 text-sm">{{ $message }}</span>
@enderror
```

- Podemos também listar todos os erros presentes (isso inclui erros além da validação) e iterar sobre

```php
<div>
    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li class="text-red-400 text-sm">{{ $error }}</li>
            @endforeach
        </ul>
    @endif
</div>
```

## 18 - Editing, Updating, and Deleting a Resource

- Para editar um dado, validamos e fazemos o `update` ou `save` do Modelo

```php
Route::patch('/jobs/{id}', function ($id) {
    request()->validate([
        'title' => ['required', 'min:3'],
        'salary' => ['required', 'min:3']
    ]);

    $job = Job::findOrFail($id); // job == null never happens

    // $job->title = request("title");
    // $job->salary = request("salary");
    // $job->save();

    $job->update([
        'title' => request("title"),
        'salary' => request("salary"),
    ]);

    return redirect('/jobs/' . $job->id);
});
```

- O método `findOrFail` não retorna null. Se o dado não for encontrado, o lavarel trata o erro

- Para deletar, usamos o método `delete`

```php
Route::delete('/jobs/{id}', function ($id) {
    Job::findOrFail($id)->delete();

    return redirect('/jobs');
});
```

- Como os forms HTML só podem ter o método POST ou GET, passamos um parâmetro do blade para indicar o método da requisição dentro da tag `<form>`

```php
@method('PATCH')
```

- Como não podemos ter forms aninhados, criamos um em outro ponto do HTML e referenciamos o botão desse form com o atributo `form=""`.

```php
<button form="delete-form" type="submit" class="rounded-md">Delete</button>

<form method="POST" action="/jobs/{{ $job->id }}" class="hidden" id="delete-form">
    @csrf
    @method('DELETE')
</form>
```

- Em casos assim, lembrar de colocar o atributo `submit` no tipo do botão e esconder o form.

## 19 - Routes Reloaded - 6 Essential Tips

### Route Model Binding

- O laravel busca automaticamente o Job com base na convenção:

```php
Route::get('/jobs/{job}', function (Job $job) {
   return view('jobs.show', ['job' => $job]);
});
```

- O wildcard deve ser do mesmo nome que o parâmetro da função e o tipo deve ser o modelo

- Por padrão o Laravel busca pelo ID do dado
  - Se precisarmos buscar por outra coluna, passamos o parâmetro com `:`

```php
Route::get('/jobs/{post:slug}', function (Post $post) {
    return view('post.show', ['post' => $post]);
 });
```

- Dessa forma não precisamos do `findOrFail`

### Controller Classes

- $ php artisan make:controller JobController

  - tipo do controller -> empty

- controllers ficam em app/Htpp/Controllers

- definindo o controller

```php
class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::with('employer')->latest()->paginate(5);

        return view('jobs.index', [
            'jobs' =>  $jobs
        ]);
    }
}
```

- Usando na rota

```php
Route::get('/jobs', [JobController::class, 'index']);
```

- Parâmetros de função funcionam da mesma forma

### Route::view()

- Quando precisamos apenas renderizar uma view
  - Páginas estáticas, por exemplo

```php
Route::view('/', 'home');

Route::view('/contact', 'contact');
```

### List You Routes

- $ php artisan route:list
- $ php artisan route:list --except-vendor

### Route Groups

- Agrupando rotas com a mesma classe de controller

```php
Route::controller(JobController::class)->group(function () {
    Route::get('/jobs', 'index');
    Route::get('/jobs/create', 'create');
    Route::get('/jobs/{job}', 'show');
    Route::post('/jobs', 'store');
    Route::get('/jobs/{job}/edit', 'edit');
    Route::patch('/jobs/{job}', 'update');
    Route::delete('/jobs/{job}', 'destroy');
});
```

### Route Resources

- O Laraval usa as convenções de nome do controler (index, destroy, create...) para automaticamente criar as rotas

```php
// 'jobs' -> URI
Route::resource('jobs', JobController::class);
```

## 20 - Starter Kits, Breeze, and Middleware

- Usando o template `Breeze` como modelo de estudo

## 21 - Make a Login and Registration System From Scratch: Part 1

- Blade templates para estados de `auth` e `guest`

```php
@auth
    <span>Only auth users can see!</span>
@endauth

@guest
    <span>Only NOT auth users can see!</span>
@endguest
```

## 22 - Make a Login and Registration System From Scratch: Part 2

- Busca por um campo com mesmo nome e sufixo _\_confirmation_ para validar

```php
'password' => ['required', Password::min(6), 'confirmed'],
```

- Sempre usar um POST request para logout

- Guardando o valor antigo em validações com `old('email')`;

```php
<x-form-input type="email" placeholder="johndoe@email.com" name="email" id="email"
:value="old('email')" autofocus />
```

- Criando o usuário

- Laravel faz o Hash do password pela função `casts` no modelo `User`

```php
public function store()
{
    $validatedAttributes = request()->validate([
    'first_name' => ['required'],
    'last_name' => ['required'],
    'email' => ['required', 'email', 'max:254'],
    'password' => ['required', Password::min(6), 'confirmed'],
    ]);

    $user = User::create($validatedAttributes);

    Auth::login($user);

    return redirect('/jobs');
}
```

- Fazendo o login do usuário

```php
public function store()
{
    // validate
    $attributes = request()->validate([
        'email' => ['required', 'email', 'max:254'],
        'password' => ['required'],
    ]);

    // attempt to login
    if (! Auth::attempt($attributes)){ // second arg => 'remember'
        throw ValidationException::withMessages([
            'email' => 'Sorry, those credentials dont match'
        ]);
    }

    // regenerate the session token
    request()->session()->regenerate(); // always regenerate after login -> **security**

    // redirect
    return redirect('/jobs');
}
```

- Fazendo o logout do usuário

```php
public function destroy()
{
    Auth::logout();

    return redirect('/');
}
```

- _Rate limits_ no form de login

## 23 - 6 Steps to Authorization Mastery

- Laravel Gates

  - não recomendado para aplicações reais, apenas para aprendizado

- Laravel Policies

  - $ php artisan make:policy
  - são vinculadas ao modelo

- Diretivas `@can`
  - Usadas para renderizar condicionalmente elementos com base em uma cláusula

```php
@can('edit', $job)
    <p class="mt-6">
        <x-button href="/jobs/{{ $job->id }}/edit">Edit Job</x-button>
    </p>
@endcan
```

## 24 - How to Preview and Send Email Using Mailable Classes

- Gerar um `mailable`

  - $ php artisan make:mail

- Email ficam em App\Mail

- A função `content` recebe uma view

- Testando o visual localmente via Routes

```php
Route::get('/test', function () {
    return new JobPosted();
});
```

- Enviando para um email real (localmente não vai funcionar, precisamos de um servidor SMTP)

```php
Route::get('/test', function () {
    Mail::to('pedrodruviaro@gmail.com')->send(new JobPosted());

    return 'Done';
});
```

- Podemos verificar os logs para checar se está tudo certo

- `/storage/logs/laravel.log`

```
[2024-12-03 17:13:32] local.DEBUG: From: Laravel <hello@example.com>
To: pedrodruviaro@gmail.com
Subject: Job Posted
MIME-Version: 1.0
Date: Tue, 03 Dec 2024 17:13:32 +0000
Message-ID: <d6196463145b8f0b74dcbb8f4129bb1a@example.com>
Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: quoted-printable

Congrats! Yout job is now live on your website.
```

- A configuração do envio de emails fica em `/config/mail.php`

  - As informações ficam dentro do arquivo _.env_ com o prefixo `MAIL_`

- Serviço para envio de emails: https://mailtrap.io/home

  - Ideal para testes

- Enviando do controller

```php
// email is implicit
Mail::to($job->employer->user)->send(new JobPosted($job));
```

- Dessa forma, dentro da classe `JobPosted` temos que passar `$job` ao constructor

```php
public function __construct(public Job $job)
{
    //
}
```

- E assim, o `$job` fica disponívei na View

- Pegando a url completa

```php
<p>
    <a href="{{ url('/jobs/' . $job->id) }}">View your job listing</a>
</p>
```

- Problema -> envio de email demora alguns segundos. A solução? `Queues`

## 25 - Queues Are Easier Than You Think

- A configuração fica em `/config/queues.php`

- Se tratando de emails, simplesmente trocamos `send` por `queue`

```php
Mail::to($job->employer->user)->queue(new JobPosted($job));
```

- Porém, precisamos criar um _work_ para a queue funcionar

  - $ php artisan queue:work
  - Com isso, o email é enviado

## 26 - Get Your Build Process in Order

- Asset bundling e Vite

- Trocando APP_URL dentro de .env para a url de teste:

  - APP_URL=http://example.test

- Assim, rodamos o `npm run dev` para servir os arquivos via vite

- Dentro do layout, referenciamos os assets via:

```php
@vite('resources/css/app.css')
@vite('resources/js/app.js')
```

- Instalando tailwind: https://tailwindcss.com/docs/guides/laravel
  - Já vem pré instalado
