# Buscador de CEP

Este é um projeto de uma aplicação web simples para buscar informações de um CEP (Código de Endereçamento Postal) brasileiro utilizando a API pública do ViaCEP. O objetivo é permitir ao usuário consultar dados como logradouro, bairro, localidade, DDD e outros detalhes relacionados ao CEP informado.
https://buscadordecepreact.vercel.app
## Funcionalidades

- Busca de informações detalhadas a partir de um CEP fornecido.
- Exibição do logradouro, bairro, localidade, estado, DDD, complemento e região.
- Validação de CEPs inválidos ou não encontrados.
- Interface amigável com animações e responsividade.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface.
- **Axios**: Para fazer requisições HTTP à API do ViaCEP.
- **React Icons**: Biblioteca para os ícones utilizados na interface.
- **CSS**: Estilização customizada da aplicação.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- Um editor de texto, como o [VSCode](https://code.visualstudio.com/)

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/buscador-de-cep.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd buscador-de-cep
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute a aplicação:
   ```bash
   npm start
   ```

5. Acesse `http://localhost:3000` no seu navegador para visualizar a aplicação.

## Estrutura do Projeto

- **src/index.js**: Ponto de entrada da aplicação React.
- **src/App.js**: Componente principal contendo a lógica de busca do CEP e a renderização dos dados.
- **src/services/api.js**: Configuração do Axios para a comunicação com a API ViaCEP.
- **src/styles.css**: Estilos customizados da aplicação.

## Estilização

O layout foi criado utilizando CSS puro, com algumas animações e transições para melhorar a experiência do usuário. A aplicação também é responsiva, ajustando-se adequadamente para diferentes tamanhos de tela.

## API

A aplicação utiliza a [API pública ViaCEP](https://viacep.com.br/) para realizar a busca de informações de CEPs.

Exemplo de requisição:
```
GET https://viacep.com.br/ws/{cep}/json
```

## Melhorias Futuras

- Implementar testes unitários.
- Adicionar a funcionalidade de autocompletar o CEP.
- Permitir a busca de CEPs em lote.
  
## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou fazer um fork e enviar um pull request.

---
