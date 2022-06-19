import * as SC from './styles'

type CardProps  = {
    id?: number,
    name: string,
    cpf: string,
    rg: string,
    birth: string,
    email: string,
    phone: string,
    street: string,
    neighborhood: string,
    city:string,
    uf: string,
    profession: string,
    sector: string,
}

export const Card = ({
name,
birth,
city,
cpf,
email,
neighborhood,
phone,
profession,
rg,
sector,
street,
uf
}:CardProps) => {
  return (
    <SC.Container>
      <p>Nome: <span>{name}</span></p>
      <p>Data de Nascimento: <span>{birth}</span></p>
      <p>CPF: <span>{cpf}</span></p>
      <p>RG: <span>{rg}</span></p>
      <p>E-mail: <span>{email}</span></p>
      <p>Tel: <span>{phone}</span></p>
      <p>Cargo: <span>{profession}</span></p>
      <p>Setor: <span>{sector}</span></p>

      <p className='endereço'>Endereço:</p>
      <p>Rua: <span>{street}</span></p>
      <p>Bairro: <span>{neighborhood}</span></p>
      <p>Cidade: <span>{city}</span></p>
      <p>UF: <span>{uf}</span></p>
    </SC.Container>
  )
}
