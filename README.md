# Boas vindas ao The and Dragons!

Este projeto tem como objetivo desenvolver um jogo RPG (Role Playing Game) no estilo Dungeons & Dragons de interpretação de papéis. Foi desenvolvido apenas o Backend utilizando a arquitetura SOLID juntamente com os princípios do paradigma POO.


### 🔧 Instalação
Para utilizar o repositório no desenvolvimento, siga os seguintes passos:

1 - Clone o repositório: 
```
git@github.com:Arthutepio/publisher-project-the-dragons.git
cd publisher-project-the-dragons
```
2 - Instale as dependências:
```
npm install
```
3 - Inicie o Docker Compose:
```
docker-compose up -d
```
4 - Abra uma linha de comando dentro do container:
```
docker exec -it trybers_and_dragon bash
```

### Instanciando Personagens
Personagens do tipo Character podem ser criados e têm os métodos de levelUp e attack.
```
const personagem = new Character('nome genérico');
personagem.levelUp;
personagem.attack(OtherCharacterOrMonster);
```
### Instanciando Monstros
Monstros podem ser criados. Em especial, há o monstro do tipo kingLizard, ambos possuem o método attack.
```
const monster = new Monster();
const kingLizard = new LizardKing();
monster.attack(personagem);
dragon.attack(personagem);
```
### Batalhas de RPG
Batalha PVP (Player contra Player)
Com dois personagens do tipo Character criados, é possível criar uma batalha entre os dois. Para saber o vencedor, basta utilizar o método fight. Se o primeiro personagem adicionado ganhar, será retornado 1, se o segundo personagem ganhar, será retornado -1.

Obs: você pode aumentar o nível dos personagens antes da batalha usando o método levelUp:
```
const batalhaPvp = new PVP(personagem1, personagem2);
console.log(batalhaPvp.fight()); // 1 ou -1
```

### Batalha PVE (Player contra "Environment")
Na batalha PVE, você pode colocar um personagem para lutar com um grupo (array) de inimigos de sua escolha (outros personagens, monstros e dragões). Para descobrir o lado vitorioso, basta utilizar o método **fight** na batalha, que retornará 1 se o personagem ganhar e -1 se o grupo ganhar.
Obs: você pode aumentar o nível dos personagens antes da batalha usando o método levelUp:
```
const batalhaPve = new PVE(personagem1, [personagem2, monster, dragon]);
console.log(batalhaPve.fight()); // 1 ou -
```

## 🛠️ Construído com
* [TypeScript](https://www.typescriptlang.org/) - linguagem de programação fortemente tipada que se baseia em JavaScript;
* [Node.js](https://nodejs.org/pt-br/docs/) - para execução de testes e instalação de pacotes de bibliotecas;
* [Git](https://git-scm.com/doc) - para versionamento;
* [Docker](https://www.docker.com/) - para a conteinerização da aplicação;
* [ESLint](https://eslint.org/docs/latest/) - para padronização e correção do código;

Criado por [Trybe](https://www.betrybe.com/) e desenvolvido com ❤️ por [Arthur Costa](https://www.linkedin.com/in/arthutepio/) 😊
