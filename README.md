# Sistema Acadêmico DS II

Sistema acadêmico desenvolvido durante as aulas da disciplina **Desenvolvimento para Servidores II**, utilizando **HTML, CSS e JavaScript** no frontend e **Node.js com Express** no backend.

O sistema permite realizar o cadastro de alunos e consultar os alunos cadastrados por meio de uma API REST.

## Identificação

**Aluno:** Artur Barbosa da Silva  
**RA:** 2650832413021  
**Curso:** Sistemas para Internet  
**Turma:** 5º semestre  
**Observação:** atualmente cursando o 6º semestre.

## Funcionalidades

O sistema possui:

- formulário para cadastro de alunos;
- campos de RA, nome, e-mail, curso e turma;
- mensagens de sucesso e erro;
- tabela com os alunos cadastrados;
- representação dos dados em JSON;
- comunicação entre frontend e backend utilizando `fetch()`;
- API desenvolvida com Node.js e Express;
- validação dos dados cadastrados.

## Tecnologias utilizadas

### Frontend

- HTML
- CSS
- JavaScript
- Fetch API
- Live Server

### Backend

- Node.js
- Express
- CORS

## Como executar o projeto

### Backend

Abra o terminal na raiz do projeto e entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

O backend será iniciado em:

```text
http://localhost:3000
```

### Frontend

Abra o arquivo:

```text
frontend/index.html
```

Execute-o utilizando a extensão **Live Server** do Visual Studio Code.

O frontend se comunicará com a API disponível em:

```text
http://localhost:3000/api
```

## Endpoints disponíveis

### Verificar funcionamento da API

**Método:** `GET`

```text
http://localhost:3000/api/health
```

Retorna o status de funcionamento do servidor.

### Listar alunos

**Método:** `GET`

```text
http://localhost:3000/api/alunos
```

Retorna a lista de alunos cadastrados.

### Cadastrar aluno

**Método:** `POST`

```text
http://localhost:3000/api/alunos
```

Exemplo de corpo da requisição:

```json
{
  "ra": "2026001",
  "nome": "Artur Barbosa",
  "email": "artur@email.com",
  "curso": "SII",
  "turma": "2 SII"
}
```

Em caso de sucesso, a API retorna o status:

```text
201 Created
```

## Armazenamento dos dados

Nesta versão, os dados são mantidos **em memória no backend**.

Por esse motivo, os alunos cadastrados são removidos quando o servidor é encerrado ou reiniciado.

## Evidências

As evidências de funcionamento do projeto estão disponíveis na pasta:

```text
docs/evidencias/
```

Arquivos:

```text
01-frontend.png
02-backend-terminal.png
03-insomnia-post.png
04-insomnia-get.png
```

As evidências apresentam:

- frontend com formulário e aluno cadastrado;
- backend Express em funcionamento;
- cadastro de aluno no Insomnia com status `201 Created`;
- listagem de alunos no Insomnia com status `200 OK`.

## Estrutura principal

```text
sistema-academico-ds2/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── css/
│   ├── js/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── service/
│   │   └── view/
│   └── index.html
├── docs/
│   └── evidencias/
├── .gitignore
└── README.md
```

## Projeto acadêmico

Projeto desenvolvido como atividade da disciplina **Desenvolvimento para Servidores II** do curso de **Sistemas para Internet**.