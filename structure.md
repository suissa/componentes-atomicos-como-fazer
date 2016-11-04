## Estrutua

Continuando nosso estudo iremos definir a estrutura do nosso *component*:

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

Perceba que estou definindo a natureza do *component* via `data` para não poluirmos a propriede `class`, pois a mesma deve ser utilizada apenas para definir propriedades visuais. 



