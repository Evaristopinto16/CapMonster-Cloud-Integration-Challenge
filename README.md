# Integração Híbrida Backend-Extensão CapMonster Cloud

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CapMonster Cloud](https://img.shields.io/badge/CapMonster-Cloud-orange)](https://capmonster.cloud/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)

Uma solução inovadora que combina a potência do backend com a simplicidade da extensão CapMonster Cloud para automatizar a resolução de captchas no site de testes Zennolab Lessons.

## 🚀 Problema Resolvido

Ao utilizar a API de integração direta do CapMonster Cloud, desenvolvedores frequentemente enfrentam:

- Complexidade na configuração e gerenciamento de tokens
- Dificuldade na sincronização entre backend e contexto do navegador
- Processos manuais propensos a erros
- Aumento significativo no tempo de desenvolvimento

## 💡 Solução Proposta

Este projeto elimina a complexidade da integração tradicional criando uma ponte inteligente entre seu backend e a **Extensão do CapMonster Cloud para Navegadores**. A solução automatiza todo o processo de resolução de captchas em segundo plano, especificamente testada no site [Zennolab Lessons](https://lessons.zennolab.com/).

## 🛠️ Como Funciona

```mermaid
graph LR
    A[Backend Node.js] --> B[Playwright]
    B --> C[Extensão CapMonster]
    C --> D[Zennolab Lessons]
    D --> E[reCAPTCHA V2]
    E --> F[Resolução Automática]
    F --> G[Captcha Resolvido]