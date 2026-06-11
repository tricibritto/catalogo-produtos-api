# 📚 Catálogo de Produtos Tecnológicos API

## 📖 Descrição

API REST desenvolvida em Node.js e Express para gerenciamento de um catálogo de produtos tecnológicos.

O projeto foi criado como atividade prática da disciplina de Desenvolvimento de APIs, utilizando rotas e controllers separados, além de uma base de dados simulada em memória.

---

## 🎯 Tema Escolhido

Produtos Tecnológicos

---

## 👥 Integrantes da Equipe

* Nome do Integrante 1
* Nome do Integrante 2
* Nome do Integrante 3
* Nome do Integrante 4
* Nome do Integrante 5

---

## 🛠 Tecnologias Utilizadas

* Node.js
* Express.js
* JavaScript
* Postman
* Git
* GitHub

---

## 📁 Estrutura do Projeto

```text
catalogo-api/
│
├── src/
│   ├── controllers/
│   │   └── produtoController.js
│   │
│   ├── routes/
│   │   └── produtoRoutes.js
│   │
│   └── database/
│       └── produtos.js
│
├── prints/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Instalar as dependências

```bash
npm install
```

### Iniciar o servidor

```bash
node server.js
```

Servidor disponível em:

```text
http://localhost:3000
```

---

## 📦 Base de Dados Simulada

A API utiliza um array JavaScript contendo 10 produtos tecnológicos.

Exemplo:

```javascript
{
  id: 1,
  nome: "Notebook Dell",
  categoria: "Computador"
}
```

---

# 🔗 Endpoints

## 📋 Listar Produtos

### Requisição

```http
GET /listar
```

### Exemplo

```http
http://localhost:3000/listar
```

### Resposta

```json
[
  {
    "id": 1,
    "nome": "Notebook Dell",
    "categoria": "Computador"
  }
]
```

---

## 🔍 Buscar Produto por ID

### Requisição

```http
GET /buscar/:id
```

### Exemplo

```http
http://localhost:3000/buscar/1
```

### Resposta

```json
{
  "id": 1,
  "nome": "Notebook Dell",
  "categoria": "Computador"
}
```

---

## ➕ Cadastrar Produto

### Requisição

```http
POST /cadastrar
```

### Exemplo de Body

```json
{
  "nome": "Tablet Samsung",
  "categoria": "Tablet"
}
```

### Resposta

```json
{
  "mensagem": "Produto cadastrado",
  "produto": {
    "id": 11,
    "nome": "Tablet Samsung",
    "categoria": "Tablet"
  }
}
```

---

## ✏️ Atualizar Produto

### Requisição

```http
PUT /atualizar/:id
```

### Exemplo

```http
http://localhost:3000/atualizar/1
```

### Body

```json
{
  "nome": "Notebook Lenovo",
  "categoria": "Computador"
}
```

### Resposta

```json
{
  "mensagem": "Produto atualizado",
  "produto": {
    "id": 1,
    "nome": "Notebook Lenovo",
    "categoria": "Computador"
  }
}
```

---

## 🗑️ Remover Produto

### Requisição

```http
DELETE /remover/:id
```

### Exemplo

```http
http://localhost:3000/remover/1
```

### Resposta

```json
{
  "mensagem": "Produto removido com sucesso"
}
```

---

## 🧪 Evidências dos Testes

As evidências dos testes realizados no Postman encontram-se na pasta:

```text
prints/
```

Contendo:

* GET - Listar Produtos
* GET - Buscar Produto
* POST - Cadastrar Produto
* PUT - Atualizar Produto
* DELETE - Remover Produto

---

## ✅ Funcionalidades

* Listagem de produtos
* Busca por ID
* Cadastro de novos produtos
* Atualização de registros
* Remoção de registros
* Retorno em formato JSON
* Estrutura organizada em rotas e controllers

---

## 📌 Autor

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento de APIs.
