# Componentes Atômicos - Como criar


![](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/component.png?raw=true)

> *light passed through a prism breaks up into its component colors*

Citei essa parte do texto para exemplificar semanticamente que um *component* é uma parte de um todo, porém ele sozinho também pode ser independente, assim como são as "cores da luz". Isso será deveras importante para o embasamento desse estudo.

Como eu nunca fiz nada do gênero ainda mais utilizando *components*, vi uma brecha em um freela que estou fazendo e agora é a hora de aprender isso!

Basicamente preciso implementar isso:

![](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/oquefazer.png?raw=true)

### E não e basearei em nenhum outro, quero ir construindo na medida que vou pensando, esse component servirá para eu treinar a utilização de *component* que saiu no Angular 1.5

A primeira vez que usei-o foi em uma [prova de conceito que irei utilizar no Workshop de Socket.io](https://github.com/Webschool-io/Workshop-AO-VIVO-Socket.io/blob/master/examples/components-events/app.js)

Agora será a segunda vez que irei utilizar o [component](https://docs.angularjs.org/guide/component) do Angular 1, logo muito provavelmente eu faça algumas merdas que espero que vocês me ajudem a perceber e corrigir.

> Não estou criando isso para dizer que é o jeito **CORRETO**, estou criando apenas porque eu quero aprender melhor essa feature. Blz?

Logo a primeira pergunta que vêm à mente:

> Como componentizar/atomizar esse data-grid/table? 

O mais normal seria ter os valores por linha e a partir dela gerar a tabela, mas eu não quero fazer assim. Quero atomizar um pouco mais.

Então vamos iniciar pensando na sua menor parte: **a célula**.

Sabendo disso precisamos definir quais as propriedades que esse *component* pode receber:

- type: String, Number, Date, Boolean
- value: valor definido para a célular
- mask: (opcional) máscara para representação do valor
- events: (opcional) click // basicamente qualquer evento do JS
- actions: funções a serem executadas pelos eventos

Aí você deve pensar:

> Ué não é para uma tabela? E se eu quiser ordenar ela?

**Ótima pergunta!** Por isso precisamos pensar juntos:

Sabemos que a ordenação pode ser tanto pela linha como pela coluna, então como representar isso?

Acredito que com uma propriedade com a sua posição na fila:

- columnOrder
- lineOrder

![](https://memecrunch.com/meme/3ARWO/joao-kleber/image.png)

> Como é que um component desses vai saber qual é sua posição sendo que ele nao sabe onde está inserido, ele conhece apenas a si mesmo.

**Tudo bem então, deixaremos isso para o seu component pai(linha) lidar.**

Então vamos iniciar com esse escopo e caso seja necessário mudamos futuramente.
