# Componentes Atômicos - Como criar

Como eu nunca fiz nada do gênero ainda mais utilizando components, vi uma brecha em um freela que estou fazendo.

Basicamente preciso implementar isso:

![](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/oquefazer.png?raw=true)

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

Acredito que com uma propriedade com a sua posição na fila, vamos chamar inicialmente de:

- columnOrder
- lineOrder


