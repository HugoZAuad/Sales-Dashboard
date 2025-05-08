# DNC Sales Dashboard

## Descrição do Projeto

O **DNC Sales Dashboard** é uma aplicação web desenvolvida em React com TypeScript, que oferece um painel completo para gerenciamento e visualização de dados de vendas. A aplicação possui autenticação, rotas protegidas, gráficos interativos, e integração com APIs para manipulação de leads e perfis de usuários.

Este projeto foi desenvolvido utilizando as melhores práticas de desenvolvimento front-end, incluindo gerenciamento de estado com Redux Toolkit, estilização com Material UI e styled-components, além de testes automatizados com Jest e Cypress.

---

## Tecnologias Utilizadas

- **React 18** com **TypeScript**
- **Vite** como bundler e servidor de desenvolvimento
- **React Router DOM v6** para roteamento
- **Redux Toolkit** para gerenciamento de estado global
- **Material UI** e **styled-components** para estilização
- **Axios** para requisições HTTP
- **Chart.js** e **react-chartjs-2** para gráficos interativos
- **js-cookie** e **jwt-decode** para manipulação de autenticação via cookies e JWT
- **Jest** para testes unitários e de componentes
- **Cypress** para testes end-to-end
- **ESLint** e **Prettier** para linting e formatação de código
- **Husky** para hooks de git automatizados

---

## Estrutura do Projeto

```
dnc-sales-dashboard/
├── public/                 # Arquivos estáticos e imagens
├── src/
│   ├── assets/             # Recursos visuais
│   ├── components/         # Componentes reutilizáveis da interface
│   ├── contexts/           # Contextos React para temas e estados globais
│   ├── hooks/              # Hooks customizados
│   ├── pages/              # Páginas da aplicação (Login, Home, Leads, Perfil, Cadastro)
│   ├── redux/              # Configuração do Redux e slices
│   ├── resources/          # Temas e recursos de estilo
│   ├── services/           # Serviços para chamadas API e lógica de negócio
│   ├── styles/             # Estilos globais e temas
│   ├── types/              # Tipagens TypeScript
│   └── utils/              # Funções utilitárias
├── cypress/                # Testes end-to-end com Cypress
├── .eslintrc.js            # Configuração do ESLint
├── jest.config.ts          # Configuração do Jest
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
```

---

## Como Instalar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd dnc-sales-dashboard
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## Como Rodar em Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot reload, execute:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000` (ou outra porta configurada).

---

## Como Construir para Produção

Para compilar o projeto para produção, execute:

```bash
npm run build
```

Os arquivos compilados ficarão na pasta `dist/`. Para pré-visualizar a build, use:

```bash
npm run preview
```

---

## Como Executar os Testes

### Testes Unitários e de Componentes (Jest)

Para rodar os testes unitários e de componentes com cobertura, execute:

```bash
npm run test
```

### Testes End-to-End (Cypress)

Para abrir a interface do Cypress e executar testes end-to-end:

```bash
npm run cypress:open
```

Para rodar os testes Cypress no modo headless:

```bash
npm run cypress:run
```

---

## Explicação das Rotas e Proteção

A aplicação utiliza o **React Router DOM v6** para navegação entre páginas. As rotas principais são:

- `/` - Página de Login
- `/cadastro` - Página de Registro de Usuário
- `/home` - Página inicial (protegida)
- `/leads` - Página de Leads (protegida)
- `/perfil` - Página de Perfil do Usuário (protegida)

As rotas protegidas verificam a existência de um cookie de autenticação (`Authorization`). Caso o cookie não esteja presente, o usuário é redirecionado para a página de login.

---

## Estilização

O projeto utiliza uma combinação de:

- **Material UI** para componentes prontos e design responsivo
- **styled-components** para estilização customizada e temas dinâmicos
- Temas e estilos globais são gerenciados na pasta `src/styles` e `src/resources`

---

## Gerenciamento de Estado

O estado global da aplicação é gerenciado com **Redux Toolkit**, facilitando a criação de slices e integração com os componentes React via `react-redux`.

---

## Informações Adicionais

- O código segue padrões de linting com **ESLint** e formatação automática com **Prettier**.
- Hooks de git são configurados com **Husky** para garantir qualidade no commit.
- Testes são organizados na pasta `src/__tests__` para componentes e utilitários.

---

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch com sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## Licença

Este projeto é privado e não possui licença pública definida.

---

## Contato

Para dúvidas ou sugestões, entre em contato com o time de desenvolvimento.

---

Obrigado por utilizar o DNC Sales Dashboard!
