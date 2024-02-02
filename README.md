## Sobre

O pokemon-center é uma aplicação desenvolvida com Next.js, React.js e TypeScript, projetada para permitir que os usuários agendem consultas para seus times Pokémon se recuperarem. Ele utiliza React Hook Form junto com Yup para simplificar o gerenciamento do formulário e sua validação. Além disso, o projeto faz uso da biblioteca Toastify para exibir notificações ao cliente e utiliza styled components para garantir a estilização e responsividade da aplicação.

## Link para Deploy

Acesse o projeto pokemon-center através do link abaixo:

[https://pokemon-center-gold.vercel.app/](https://pokemon-center-gold.vercel.app/)


## Setup

Clone esse repositório e instale as dependências do código com pnpm
```shell
pnpm install

```

Crie na raiz do projeto um arquivo .env e adicione a seguinte variável
```shell
NEXT_PUBLIC_API_LINK=https://pokeapi.co/api/v2

```
## Inicie o projeto
```shell
pnpm run dev

```
Agora é só acessar http://localhost:3000/ que a aplicação estará rodando localmente.

#### Uso de APIs
- Utilize http://localhost:3000/api/scheduling/date para obter as datas disponíveis para agendamento.
- Utilize http://localhost:3000/api/scheduling/time para obter os horários disponíveis para agendamento.
- Utilize a PokéAPI para obter dados de regiões, cidades e Pokémon a serem usados no agendamento.

## Informações para Contato

- LinkedIn: [Lucas Benfica](https://www.linkedin.com/in/lucas-benfica)
- E-mail: lucassoaresbenfica@gmail.com
