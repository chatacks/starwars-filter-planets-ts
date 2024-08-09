# Star Wars Planets Filter

Este projeto aplica diferentes filtros em uma lista de planetas do universo Star Wars. O objetivo é permitir a exploração e análise dos dados dos planetas de forma simples e eficaz, utilizando uma interface intuitiva e uma série de filtros personalizáveis.

## Visão Geral

O projeto é construído com base em dados públicos do universo Star Wars. Os filtros permitem que você selecione planetas com base em critérios específicos, como clima, terreno, população, entre outros.

## Funcionalidades

- **Filtragem por Clima**: Filtra os planetas de acordo com o tipo de clima (árido, tropical, gelado, etc.).
- **Filtragem por Terreno**: Permite a seleção de planetas com base em seu tipo de terreno (deserto, florestal, oceânico, etc.).
- **Filtragem por População**: Exibe apenas planetas que possuem uma população dentro de um intervalo específico.
- **Ordenação Personalizável**: Ordena a lista de planetas com base em critérios como nome, população ou diâmetro.
- **Busca por Nome**: Permite a busca direta por nome de um planeta específico.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Framework**: React com Context API (para gerenciamento de estado global)
- **Front-end**: HTML, CSS, TypeScript
- **Bibliotecas**: 
  - Fetch (para integração com APIs externas)

## Como Executar o Projeto

1. **Clone este repositório**:

   ```bash
   git clone git@github.com:chatacks/starwars-filter-planets-ts.git
   cd starwars-filter-planets-ts
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   ```bash
   npm run dev || npm start
   ```

4. **Acesse a aplicação**:
   
   Abra o navegador e vá para `http://localhost:3000` para acessar a interface do projeto.

## Estrutura do Projeto

- **src/**: Contém todo o código fonte do projeto.
  - **components/**: Componentes reutilizáveis do React.
  - **context/**: Arquivos relacionados ao Context API para gerenciamento de estado.
  - **services/**: Lógica de integração com APIs externas.

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Você pode abrir uma issue para relatar bugs ou sugerir melhorias. Pull requests também são bem-vindos.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Star Wars API (SWAPI)](https://swapi.dev/)
- [Documentação do React](https://reactjs.org/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
