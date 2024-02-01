# ExpenseCenter

Este repositório contém uma implementação de uma API REST em Node.js que oferece funcionalidades de autenticação de usuário e operações CRUD (Create, Read, Update, Delete) para despesas. A API foi desenvolvida seguindo as boas práticas do Clean Code e inclui validações robustas para garantir a integridade dos dados.

## Funcionalidades

1. **Autenticação de Usuário**
   - A API implementa um sistema de autenticação para garantir a segurança das operações CRUD.

2. **CRUD de Despesas**
   - A API oferece operações CRUD para gerenciar despesas, incluindo criação, leitura, atualização e exclusão.

## Entidade Despesas

Cada despesa é caracterizada pelos seguintes atributos:

- **Id:** Identificador único da despesa.
- **Descrição:** Descrição detalhada da despesa.
- **Data:** Data em que a despesa ocorreu.
- **Usuário:** Usuário associado à despesa.
- **Valor:** Valor em reais da despesa.

## Validações

A API realiza as seguintes validações nos requests do CRUD:

- Verifica se o usuário existe.
- Garante que a data não seja no futuro.
- Assegura que o valor não seja negativo.
- Limita a descrição a 191 caracteres.

## Restrição de Acessos

A API impõe restrições de acesso nos requests do CRUD, permitindo apenas que o usuário relacionado à despesa possa acessar e realizar operações sobre ela.


## Testes Unitários

A validação da API é reforçada através de testes unitários, garantindo a robustez e confiabilidade do sistema.

## Tecnologias Utilizadas

- Node.js
- Express Framework para facilitar a construção da API

## Execução do Projeto

Para executar o projeto, siga os seguintes passos:

1. Clone o repositório: `git clone https://github.com/marcotuliovd/ExpenseCenter.git`
2. Instale as dependências: `npm install`
3. Execute o servidor: `npm start`

## Contribuições

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para criar issues ou enviar pull requests.

---

**Observação:** Este projeto foi desenvolvido de maneira simples, seguindo as boas práticas do Clean Code. Caso tenha alguma dúvida ou precise de esclarecimentos adicionais, entre em contato.

*Marco Túlio Vilaça Diniz*  
*marcotuliodiniz2257@gmail.com*  
*30/01/2024*