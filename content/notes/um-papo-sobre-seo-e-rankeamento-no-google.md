---
date: "2025-01-07"
tag: "seo"
---

<!--more-->

# Um papo sobre SEO e rankeamento no Google

Este post foi motivado por diversas publicações vistas no _LinkedIn_, onde se vende a ideia de que, para conseguir um bom rankeamento no Google basta utilizar meia dúzia de meta tags e ter um HTML semântico. Bem, a realidade não é exatamente essa.

Ao desenvolver um site, principalmente no início da carreira de _front-end_, é normal achar que **um HTML semântico será suficiente para que as páginas sejam indexadas pelos mecanismos de busca** como Google, Baidu, etc. Embora um HTML bem escrito seja essencial para a leitura de conteúdo pelos _bots_, ele é apenas parte de um processo mais complexo de indexação. Alguns fatores, como a configuração de arquivos essenciais (já vamos chegar lá) e o uso de ferramentas apropriadas para teste e validações, são alguns exemplos de como podemos garantir que o site esteja visível pro mundo e bem indexado.

Dois arquivos muito importantes para garantir que seu site esteja visível, e com os conteúdos certos, nos motores de busca são: `robots.txt` e `sitemap.xml`.

## robots.txt

O arquivo `robots.txt` é o principal arquivo para controlar como os motores de busca interagem com o site. Ele define quais páginas ou diretórios devem ser indexados ou não. Essa configuração é especialmente útil para evitar que conteúdos irrelevantes sejam rastreados, como páginas administrativas ou arquivos desnecessários. Apesar de ser um arquivo muito simples, erros de configuração podem impedir a indexação de todas as páginas do site.

## sitemal.xml

Outro arquivo bastante importante é o `sitemap.xml`. ELe funciona como um mapa (ou guia) das páginas do site. O objetivo é auxioliar os _bots_ a identificarem a estrutura completa do site e priorizarem o rastreamento de páginas mais importantes. Isso acaba sendo mais relevante para sites grandes, com muitas páginas, ou com estrutura complexa (como blog com múltiplas categorizações, por exemplo). O `sitemap.xml` também pode incluir informações adicionais, como a frequência de atualização das páginas ou o número de imagens presentes em cada uma delas.

## Google Search Console

Por fim, a configuração no Google Search Console é uma etapa extra para informar ao Google sobre a existência do seu site e monitorar o desempenho nos resultados de busca. Por meio dessa ferramenta, é possível enviar o `sitemap.xml`, identificar erros de rastreamento e analisar dados sobre as palavras-chave que levam os usuários ao site. Sem essa configuração, podemos perder alguns avisos de indexação, principalmente em questões de redirecionamento e erros nos arquivos que citei acima.

Vale ressaltar que **essa não é uma etapa obrigatória**, adicionar ou não o seu site no Google Search Console não aumenta ou diminui a indexação, mas é uma boa prática para seguir. Há quem diga que ao fazer isso, o Google "agiliza" o processo de indexação de todas as páginas.

---

A combinação desses elementos – `robots.txt`, `sitemap.xml` e Google Search Console – forma a base técnica para garantir que o site esteja visível, indexável e acessível nos mecanismos de busca. Como ressaltei no início, **apenas estruturar o HTML corretamente não é suficiente**. A boa indexação requer uma abordagem mais ampla, o que inclui configuração adequada e monitoramento contínuo.
