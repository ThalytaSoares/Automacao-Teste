# 🐾 Projeto Final - Programação para Automação de Testes

Este projeto foi desenvolvido como parte da disciplina **Programação para Automação de Testes**, com o objetivo de aplicar conceitos como funções, estruturas condicionais, programação assíncrona e testes automatizados.

## 📌 Objetivo

Criar funções JavaScript relacionadas a um sistema fictício de adoção de pets e validar seu funcionamento com testes automatizados usando **Mocha** e **Node.js**.

---

## 📁 Estrutura do Projeto

Aula-Automacao-teste/
├── test/
├── trabalho.js # Arquivo principal com as funções implementadas
├── trabalho-final.js # Arquivo contendo os testes automatizados
├── package.json # Configuração do projeto (scripts, tipo de módulo, etc.)
└── README.md # Este arquivo
---

## ⚙️ Funcionalidades Implementadas

### ✅ `geradorDeTagsDeIdentificacao(nome)`
- Retorna o nome do pet em letras maiúsculas.
- Exemplo: `"Pantera"` → `"PANTERA"`

### ✅ `verificarSePodeSerAdotado(idade, porte)`
- Permite adoção apenas se a idade for 1 e o porte for 'M' (médio).

### ✅ `calcularConsumoDeRacao(nome, idade, peso)`
- Calcula o consumo diário de ração com base na fórmula `peso * 300`.
- Exemplo: 14.5kg → `4350 gramas`

### ✅ `decidirTipoDeAtividadePorPorte(porte)`
- Retorna o tipo ideal de atividade conforme o porte:
  - pequeno → brincar dentro de casa  
  - medio → passeios curtos  
  - grande → exercícios ao ar livre

### ✅ `buscarDadoAsync()`
- Simula uma busca assíncrona e retorna a string `"Pipoca"` após 100ms.

---

## 🧪 Testes Automatizados

Os testes estão no arquivo `test/trabalho-final.js`, usando o framework [Mocha](https://mochajs.org/).

### Exemplo de execução:

```bash
npx mocha test/trabalho-final.js

  Testes da disciplina - fundamentos JS
    ✔ QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas
    ✔ QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção
    ✔ QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário
    ✔ QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada
    ✔ QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona

  5 passing (128ms)

Professor: Samuel Lucas

Projeto final da disciplina programação para automação de testes – Turma 2025
Desenvolvido por: [Thalyta]
