<h1 align="center">
    <img style="border-radius=15px" alt="CodInfo Logo" src="https://github.com/MariaClaudia1328/Imagens/blob/master/logo_codinfo.png" />
    <br> CodInfo <br />
</h1>

<p align="center">
  <a href="#pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#execução">Execução</a>&nbsp;&nbsp;&nbsp;
</p>

O projeto CodInfo é fruto da participação do Hackathon promovido pela Faculdade do Gama - UnB cujo objetivo busca desenvolver soluções, sejam envolvendo tecnologias, aplicações ou jogos, para problemas relacionados ao COVID-19. Diante disso, o projeto consiste em uma aplicação web em que não apenas informa, como também permite que o usuário relate eventos que acontecem na sua região. 

A informação se dá por meio do mapeamento de casos, atualizado diariamente, na qual é possível ver a quantidade de casos por região administrativa, o total de casos do Distrito Federal, além da quantidade de óbitos, de casos recuperados, de casos graves, moderados e leves. Também é possível verificar a faixa etária dos infectados, a porcentagem de homens e mulheres diagnosticados com a doença e a quantidade de casos por meio de gráficos. 

Além disso, o projeto informa acerca dos cuidados para evitar a transmissão, como se prevenir e quais são os sintomas, além de orientar sobre o que fazer em caso de suspeita através das plataformas de agendamento de teste via Drive-Thru e informar os locais de todas as Unidades Básicas de Saúde (UBS) e Unidades de Pronto Atendimento (UPA), tanto em texto quanto a localização no mapa.

## Pré-requisitos

Para executar, o software utiliza o framework de JavaScript, NodeJS, além do gerenciador de pacotes npm. Caso não tenha essas ferramentas instaladas em seu computador, basta seguir as seguintes instruções.

1. Vá ao site <https://nodejs.org/en/download/> e instale a versão 12.6.3 de NodeJS adequada para o sistema operacional que você estiver utilizando

2. O npm é instalado juntamente com o NodeJS. Para verificar sua instalação basta abrir a ferramenta de linha de comando do seu sistema operacional, por exemplo o cmd do Windows ou o terminal do Linux, e digitar npm. Caso o npm esteja devidamente instalado, uma lista de comandos irá aparecer. Caso contrário, é possível instalar o npm por meio desse [link](https://www.npmjs.com/get-npm), a versão mínima necessária é a 6.14.4 .

## Instalação

A instalação do software pode ser feita através do botão de *"Clone or Download"* presente no [diretório do programa](https://github.com/Hackathon-FGA-2020/Desafio-1-Grupo-10/tree/dev) ou utilizando git - um guia rápido para a instalação e uso do git pode ser encontrado em <https://rogerdudler.github.io/git-guide/index.pt_BR.html> . Por meio do git, a instalação pode ser feita seguindo os passos a seguir.

```bash
# Clone este repositório
git clone https://github.com/Hackathon-FGA-2020/Desafio-1-Grupo-10.git

# Vá ao repositório 'Desafio-1-Grupo-10'
cd Desafio-1-Grupo-10
```

Após chegar no repositório, a execução do programa pode ser efetuada.

## Execução

Feito o procedimento de instalação, abra a ferramenta de linha de comando do seu sistema operacional e utilize os seguinte comandos, lembrando que eles devem ser efetuados no repositório dado pela última instrução de instalação.

```bash
# Para instalar as dependências necessárias
npm install
```
```bash
# Para iniciar o programa
npm start
```

A aplicação pode ser visualizada em: <https://wcov-70df7.web.app/> 

Apenas a versão web está finalizada.

<img style="border-radius=15px" alt="Uso" src="https://github.com/Hackathon-FGA-2020/Desafio-1-Grupo-10/blob/master/Gifs/1.gif" />
<img style="border-radius=15px" alt="Uso" src="https://github.com/Hackathon-FGA-2020/Desafio-1-Grupo-10/blob/master/Gifs/2.gif" />


## Tecnologias usadas

* [NodeJS](https://nodejs.org/en/) 
* [npm](https://www.npmjs.com/) 
* [Material Ui](https://material-ui.com/)
* [ReactJS](https://pt-br.reactjs.org/)
* [Firebase](https://firebase.google.com/?hl=pt-br)
* [LeafletJS](https://leafletjs.com/)
* [RechartsJS](https://recharts.org/)

## Autores

* **André Dornelas** - [adornelas](https://github.com/adornelas)
* **Bianca Boueri** - [BiancaBoueri](https://github.com/BiancaBoueri) 
* **Caio Albuquerque** - [chaioaaD](https://github.com/chaioaaD)
* **Evelyn Soares** - [evelynsoares](https://github.com/evelynsoares)
* **Gabriel Baliza** - [GabrielBaliza](https://github.com/GabrielBaliza)
* **Gabriel Bismarck** - [gabrielbismarck](https://github.com/gabrielbismarck)
* **Paulo Henrique** - [paulohenriquerosa](https://github.com/paulohenriquerosa)

## Projetos Futuros

* Finalização da versão mobile
* Implementação de um aplicativo responsível, 100% acessível para pessoas com deficiência
* Sistema de autenticação de usuário
* Possibilidade de fazer denúncias
* Melhorar a acessibilidade

## Licença

A licença do projeto pode ser encontrada neste [link](https://github.com/Hackathon-FGA-2020/Desafio-1-Grupo-10/blob/master/LICENSE).

