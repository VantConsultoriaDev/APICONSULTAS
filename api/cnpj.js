
import axios from 'axios';

export default async function handler(req, res) {
  const cnpj = req.method === 'GET' ? req.query.cnpj : (req.body && req.body.cnpj);

  if (!cnpj) {
    return res.status(400).json({ error: "CNPJ não informado. Use ?cnpj=00000000000191" });
  }

  const token = process.env.APIBRASIL_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Token da API não configurado no servidor (APIABRASIL_TOKEN)." });
  }

  try {
    const payload = { tipo: "cnpj", cnpj: cnpj };
    const response = await axios.post("https://gateway.apibrasil.io/api/v2/dados/cnpj/credits", payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      timeout: 20000
    });

    // repassa status e body
    return res.status(response.status).json(response.data);
  } catch (err) {
    // tenta extrair mensagem do erro do axios
    const status = err.response ? err.response.status : 500;
    const data = err.response && err.response.data ? err.response.data : { message: err.message };
    return res.status(status).json({ error: "Erro ao consultar API externa", details: data });
  }
}
