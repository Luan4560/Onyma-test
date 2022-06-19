import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa"
import { Card } from "../../components/Card"
import { Form } from "../../components/Form"
import { api } from "../../service/api"
import { ContentContainer, Footer, Header, Icon, LinkedIn, LogoContainer, MainContainer } from "../../styles/pages/Home"
import * as SC from './styles'

type EmployeeProps  = {
  data: {
    id: number,
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
  }[]
}

const CompanyTwo = (props: EmployeeProps) => {
  const {data} = props;

  return (
    <MainContainer>
    <Head>
      <title>Desafio Frontend - Onyma</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header>
      <LogoContainer>
        <Image
          alt="Logo da Onyma by Bencorp"
          src="/assets/Logo Onyma by Bencorp.svg"
          width="88px"
          height="53.59px"
          layout="intrinsic"
        />
      </LogoContainer>
    </Header>

    <ContentContainer>
      <Form />
      <SC.CardContainer>
        {data.map(info => (
          <Card
          key={info.id}
          name={info.name}
          birth={info.birth}
          cpf={info.cpf}
          rg={info.rg}
          email={info.email}
          phone={info.phone}
          profession={info.profession}
          sector={info.sector}
          street={info.street}
          neighborhood={info.neighborhood}
          city={info.city}
          uf={info.uf}
        />
      ))}
        </SC.CardContainer>
    </ContentContainer>

    <Footer>
        <p>
          Feito com
          <Icon>
            <Image
              alt="Coração violeta"
              src="/assets/Blob footer.svg"
              width="16px"
              height="10px"
            />
          </Icon>
          pela Onyma
        </p>
        <LinkedIn
          href="https://www.linkedin.com/company/onymadigital/mycompany/"
          target="_blank"
        >
          <FaLinkedinIn />
        </LinkedIn>
      </Footer>
    </MainContainer>
  )
}

export default CompanyTwo

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('http://localhost:3001/company_one');
  const data = await response.data;

  return {
    props: {data}
  }
}
