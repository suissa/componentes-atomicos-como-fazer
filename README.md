# Componentes Atômicos - Como criar

![Definição de componente](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/component.png?raw=true)



> ***light passed through a prism breaks up into its component colors***


Citei essa parte do texto para exemplificar semanticamente que um *component* é uma parte de um todo, porém ele sozinho também pode ser independente, assim como são as "cores da luz". **Isso será deveras importante para o embasamento desse estudo.**

Como eu nunca fiz nada do gênero, ainda mais utilizando *components*, vi uma brecha em um *freela* que estou fazendo e **agora é a hora de aprender isso!**

***ps: Esse material é apenas para meu treino pessoal, se possível tentem refutar essas informações.***


### CUIDADO CONTÉM DIALÉTICA

![](http://2.bp.blogspot.com/-2Z33x-W8hHQ/VOvS5ZeTRdI/AAAAAAAABD4/jWKrtohPnQk/s1600/her-y%C4%B1l-kas%C4%B1m-ay%C4%B1n%C4%B1n-%C3%BC%C3%A7%C3%BCn_4eb24f6a662b8-p.gif)

#### Caso você esteja procurando um conteúdo direto sobre esse assunto aguarde eu finalizar esse.

## Embasamento Teórico


Além de aprender mais sobre JavaScript quero ver se consigo aplicar um pouco da dialética, algo que conheci há pouco tempo e achei fenomenal. Caso você não saiba o que é, vamos agradecer a [Wikipedia](https://pt.wikipedia.org/wiki/Dial%C3%A9tica) por mais essa graça alcançada.

> Dialética (AO 1945: dialéctica) (do grego διαλεκτική (τέχνη), pelo latim dialectĭca ou dialectĭce) é um método de diálogo cujo foco é a contraposição e contradição de ideias que levam a outras ideias e que tem sido um tema central na filosofia ocidental e oriental desde os tempos antigos. A tradução literal de dialética significa "caminho entre as ideias".

### E não me basearei em nenhum outro, quero ir construindo na medida que vou pensando, esse trabalho servirá para eu treinar a utilização do *component, que saiu no Angular 1.5.

A primeira vez que usei-o foi em uma [prova de conceito, que irei utilizar no Workshop de Socket.io](https://github.com/Webschool-io/Workshop-AO-VIVO-Socket.io/blob/master/examples/components-events/app.js)

Agora será a segunda vez que irei utilizar o [component](https://docs.angularjs.org/guide/component) do Angular 1, logo, muito provavelmente eu faça *algumas* merdas, espero que vocês ajudem-me a perceber e corrigir.

> Não estou criando isso para dizer que é o jeito **CORRETO**, estou criando apenas porque eu quero aprender melhor essa feature. Blz?

**Irei começar questionando-o:**

> Como você componentizaria/atomizaria um(a) *data-grid/table*? 

A solução mais comum é montar a tabela com seus cabeçalhos/colunas para depois criar uma ou mais linhas, sendo essas formadas por uma ou mais células. Esse procedimento remete ao que disse Hegel:

> **A verdade é o todo. Que se não enxergamos o todo, podemos atribuir valores exagerados a verdades limitadas, prejudicando a compreensão de uma verdade geral. Essa visão é sempre provisória, nunca alcança uma etapa definitiva e acabada, caso contrário a dialética estaria negando a si própria.**

Logo é natural começar do macro para o micro pois assim temos, ou pensamos que temos, a visualização completa do nosso problema. Essa noção fica ainda mais clara quando observamos a seguinte imagem:

![Tabela a ser implementada com componentes](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/oquefazer.png?raw=true)

Agora em posse do todo, iremos definir suas estruturas internas.

> O que é uma tabela?
> 
> - É uma agregação de linhas e colunas.
> 
> O que é uma linha ou coluna?
> 
> - É uma agregação de células.  

**Logo toda linha/coluna é formada por uma ou mais células, as quais formam a natureza intrísceca da tabela.**

Sabendo disso, podemos inferir que: 

> Para que uma tabela exista ela precisa ser formada por uma ou mais linhas **e** uma ou mais colunas.
> 
> Para que uma linha exista ela precisa ser formada por uma ou mais células.
> 
> Para que uma célula exista ela precisará apenas da sua própria existência.

Logo, a única necessidade de existência, para que o todo (tabela) exista, é a existêcia da célula.

Sabendo-se que a célula é a essência da tabela, ou seja, é uma característica essencial para sua existência, podemos afirmar que sem a célula não existe a tabela.

Abrirei um adendo aqui para incrementar o conceito da Dialética:

> **O método dialético nos incita a revermos o passado, à luz do que está acontecendo no presente, ele questiona o presente em nome do futuro, o que está sendo em nome do que “ainda não é”. É por isso que o argentino Carlos Astrada define a dialética como “semente de dragões”, a qual alimenta dragões que talvez causem tumulto, mas não uma baderna inconsequente.**

*fonte: [https://pt.wikipedia.org/wiki/Dial%C3%A9tica](https://pt.wikipedia.org/wiki/Dial%C3%A9tica)*

> \- **Causaremos um tumulto, em vossas cabeças, mas não uma baderna!**


![](https://github.com/suissa/componentes-atomicos-como-fazer/blob/master/imgs/Dragon_info.png?raw=true)


**Baseando-se nessas premissas iremos iniciar nosso estudo pela célula, sem conhecer a estrutura dos seus components pais.**

> **Você está louco Suissa?**

> \- Ainda não, apenas estou baseando-me no [Atomic Design](http://nomadev.com.br/atomic-design-b%C3%B3sons-e-quarks-extended/) onde o átomo é a "menor parte indivisível e independente".

Minha ideia é que esse *component* possa ser **reusado** em qualquer *view* independentemente de onde será utilizado.

A primeira coisa que devemos criar é a estrutura da célula, sendo imprescindível que ela seja genérica o suficiente para que possa interpretar  diferentes tipos de dados. 

Quando uma célula é observada iremos receber, como resposta dessa ação, somente o seu valor. Levando isso em consideração podemos inferir que essa resposta define sua totalidade, citando Hegel:

> **A verdade é o todo. Que se não enxergamos o todo, podemos atribuir valores exagerados a verdades limitadas, prejudicando a compreensão de uma verdade geral.**

Valendo-se dessa afirmação, podemos correlacionar o **conceito de todo** com o valor da célula, sendo essa a nossa verdade. Porém devemos nos questionar se o que foi observado é realmente a totalidade da célula, tendo em vista que o todo observado pode ser superficial, nunca teremos a certeza de se trabalhar com a totalidade correta.

Como existe uma possiblidade do todo ser superficial é nosso dever analisar esse cenário para homologarmos o nosso todo. Para isso devemos investigar a natureza da célula testando se existem propriedades ocultas à nossa observação.

Nessa investigação poderemos constatar se esse valor pode ser convertido em outras formas. Para comprovarmos se existe essa possibilidade de conversão iremos aplicar testes nesse valor, atribuiremos a esse valor o `0`.


```js
> 0 + 1
1
> "0" + 1
'01'
> if (0 + 1) console.log('Boolean')
Boolean
undefined
> if (0 + 0) console.log('Boolean')
undefined
> 
```

Analisando o resultado dos nossos testes podemos concluir que o mesmo valor `0` foi convertido em 3 formas diferentes, as quais resultam em valores completamente diferentes do observado originalmente.


Correlacionando esses resultados com os tipos de dados do JavaScript podemos estabelecer sua primeira propriedade, intríseca, nomeando-a como: `type`.

Essa propriedade define a essência do nosso *component*, que aceita apenas valores que definem os tipos de dados no JavaScript, para essa propriedade o *component* irá aceitar os seguintes valores:

- type: String, Number, Date, Boolean


