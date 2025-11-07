export default async function handler(req, res) {
  const cnpj = req.method === 'GET' ? req.query.cnpj : req.body?.cnpj;

  if (!cnpj) {
    return res.status(400).json({
      error: "CNPJ não informado. Use ?cnpj=00000000000191"
    });
  }

  return res.status(200).json({
    sucesso: true,
    cnpjConsultado: cnpj,
    mensagem: "API funcionando corretamente!"
  });
}
