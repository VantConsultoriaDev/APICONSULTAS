
# teste1-complete

Projeto para deploy na Vercel: proxy de consulta de CNPJ + página simples de teste.

## Como funciona

- `GET /api/cnpj?cnpj=24669674000141` — faz POST para `https://gateway.apibrasil.io/api/v2/dados/cnpj/credits`
  usando o token definido na variável de ambiente `APIBRASIL_TOKEN` na Vercel.
- `GET /` — página simples com input para digitar o CNPJ e botão "Consultar".

## Deploy (Vercel)

1. Faça push deste repositório para o GitHub.
2. No Vercel, importe o repositório e crie o projeto.
3. No dashboard do projeto Vercel, adicione **Environment Variable**:
   - Key: `APIBRASIL_TOKEN`
   - Value: seu token (ex: eyJ0eXAiOiJ...)
4. Faça deploy. A página estará em `https://<seu-projeto>.vercel.app`

## Observações

- Nunca comite tokens em código público. Use variáveis de ambiente no Vercel.
- Timeout configurado em 20s na requisição ao gateway.
