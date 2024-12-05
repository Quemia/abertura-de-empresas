export interface Company {
  id: number;
  solicitante: {
    ds_responsavel: string;
    nu_cpf: number;
    date_nascimento: number;
  };
  empresa: {
    ds_nome_fantasia: string;
    co_entidade_registro: string;
    co_natureza_juridica: string;
    endereco: {
      co_cep: number;
      ds_logradouro: string;
      co_numero: number;
      ds_complemento: string;
      ds_bairro: string;
      ds_municipio: string;
      co_uf: number;
    };
  };
}
