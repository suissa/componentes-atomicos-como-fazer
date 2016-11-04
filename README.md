# Componentes Atômicos - Como criar


![Definição de componente](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/component.png?raw=true)



> ***light passed through a prism breaks up into its component colors***

Citei essa parte do texto para exemplificar semanticamente que um *component* é uma parte de um todo, porém ele sozinho também pode ser independente, assim como são as "cores da luz". **Isso será deveras importante para o embasamento desse estudo.**

Como eu nunca fiz nada do gênero, ainda mais utilizando *components*, vi uma brecha em um *freela* que estou fazendo e **agora é a hora de aprender isso!**

Além de aprender mais sobre JavaScript quero ver se consigo aplicar um pouco da dialética, algo que conheci há pouco tempo e achei fenomenal. Caso você não saiba o que é, vamos agradecer a [Wikipedia](https://pt.wikipedia.org/wiki/Dial%C3%A9tica) por mais essa graça alcançada.

> Dialética (AO 1945: dialéctica) (do grego διαλεκτική (τέχνη), pelo latim dialectĭca ou dialectĭce) é um método de diálogo cujo foco é a contraposição e contradição de ideias que levam a outras ideias e que tem sido um tema central na filosofia ocidental e oriental desde os tempos antigos. A tradução literal de dialética significa "caminho entre as ideias".

### E não me basearei em nenhum outro, quero ir construindo na medida que vou pensando, esse trabalho servirá para eu treinar a utilização do *component, que saiu no Angular 1.5.

A primeira vez que usei-o foi em uma [prova de conceito, que irei utilizar no Workshop de Socket.io](https://github.com/Webschool-io/Workshop-AO-VIVO-Socket.io/blob/master/examples/components-events/app.js)

Agora será a segunda vez que irei utilizar o [component](https://docs.angularjs.org/guide/component) do Angular 1, logo, muito provavelmente eu faça *algumas* merdas, espero que vocês ajudem-me a perceber e corrigir.

> Não estou criando isso para dizer que é o jeito **CORRETO**, estou criando apenas porque eu quero aprender melhor essa feature. Blz?

Logo, a primeira pergunta que vêm à mente é:

> Como você componentizaria/atomizaria esse *data-grid/table*? 

O mais comum seria montar a tabela com seus cabeçalhos para depois ir para as linhas, sendo essas formadas por uma ou mais células. Dessa forma estaremos indo do macro para o micro, assim como disse Hegel:

> A verdade é o todo. Que se não enxergamos o todo, podemos atribuir valores exagerados a verdades limitadas, prejudicando a compreensão de uma verdade geral. Essa visão é sempre provisória, nunca alcança uma etapa definitiva e acabada, caso contrário a dialética estaria negando a si própria.

Logo é natural começar do macro para o micro pois assim temos, ou pensamos que temos, a visualização completa do nosso problema. Essa noção fica ainda mais clara quando observamos a seguinte imagem, a qual devemos implementar:

![Tabela a ser implementada com componentes](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/oquefazer.png?raw=true)

Agora em posse do todo que iremos definir suas estruturas internas.

> O que é uma tabela?
> 
> - É uma agregação de linhas e colunas.
> 
> O que é uma linha ou coluna?
> 
> - É uma agregação de células.  

Logo toda linha/coluna é formada por uma ou mais células, as quais formam a natureza intrísceca da tabela.

Sabendo disso, podemos inferir que: 

> Para que uma tabela exista ela precisa ser formada por uma ou mais linhas.
> 
> Para que uma linha exista ela precisa ser formada por uma ou mais células.
> 
> Para que uma célula exista ela não precisa de ninguém.

Logo, a maior necessidade de existência, para que o todo (tabela) exista, é a existêcia da célula.

Sabendo-se que a célula é a essência da tabela, ou seja, é uma característica essencial para sua existência podemos afirmar que sem a célula não existe tabela.

Abrirei um adendo aqui, para incrementar o conceito de Dialética:

> O método dialético nos incita a revermos o passado, à luz do que está acontecendo no presente, ele questiona o presente em nome do futuro, o que está sendo em nome do que “ainda não é”. É por isso que o argentino Carlos Astrada define a dialética como “semente de dragões”, a qual alimenta dragões que talvez causem tumulto, mas não uma baderna inconsequente.

*fonte: [https://pt.wikipedia.org/wiki/Dial%C3%A9tica](https://pt.wikipedia.org/wiki/Dial%C3%A9tica)*

> \- **Causaremos um tumulto, em vossas cabeças, mas não uma baderna!**


![](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/Dragon_info.png?raw=true)


**Baseando-se nessas premissas iremos iniciar nosso estudo pela célula, sem conhecer a estrutura dos seus components pais.**

> **Você está louco Suissa?**

> \- Ainda não, apenas estou baseando-me no [Atomic Design](http://nomadev.com.br/atomic-design-b%C3%B3sons-e-quarks-extended/) onde o átomo é a "menor parte indivisível e independente".

Minha ideia é que esse *component* possa ser **reusado** em qualquer *view* independentemente de onde será colocado.

Primeira coisa que devemos criar é a sua estrutura, devemos ter cuidado pois essa estrutura deverá genérica o suficiente para que possa tabalhar com diferentes tipos de dados. Correlacionando essa afirmação definimos a primeira propriedade, intrísceca, dessa estrutura: seu tipo.

Essa propriedade é a que define a natureza do nosso *component*, aceitando apenas valores que definem a natureza dos dados no JavaScript:

- type: String, Number, Date, Boolean


- value: valor definido para a célular
- mask: (opcional) máscara para representação do valor
- events: (opcional) click // basicamente qualquer evento do JS
- actions: funções a serem executadas pelos eventos

Aí você deve pensar:

> **Ué não é para uma tabela? E se eu quiser ordenar ela?**

> \- **Ótima pergunta!** Por isso precisamos pensar juntos.

Sabemos que a ordenação pode ser tanto pela linha como pela coluna, então como representar isso?

Acredito que com uma propriedade que defina sua posição na fila:

- columnOrder
- lineOrder

![](https://memecrunch.com/meme/3ARWO/joao-kleber/image.png)

> Mas e agora como seria implementada essa ordenação?

> \- Uma coisa eu lhe digo: não será nesse *component*.

> \- Como é que ele irá saber qual é sua posição, sendo que ele não sabe nem onde está inserido? **Como disse Sócrates: "Conhece-te a ti mesmo".**

Levando essas informações em consideração deixaremos essa responsabilidade para seu *component* pai/linha.** 

Limitando esse escopo estaremos de acordo com o [Princípio da Responsabilidade Única](https://en.wikipedia.org/wiki/Single_responsibility_principle), pois esse *component* não deverá modificar nenhum outro.

![](https://cdn.meme.am/instances/49125506.jpg)

Podemos iniciar pelo seu *template*, que é a marcação HTML a ser utilizada pelo *component*.

```html
<span data="cell"></span>
```
