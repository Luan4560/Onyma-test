import Head from "next/head";
import Image from "next/image";
import {
  MainContainer,
  ContentContainer,
  Header,
  LogoContainer,
  Footer,
  Icon,
  LinkedIn,
} from "../styles/pages/Home";
import { FaLinkedinIn } from "react-icons/fa";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";
import { useState } from "react";

type EmployeeProps  = {
  data:  {
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
    sector: string
  }[]
}

export default function Home({data}: EmployeeProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)

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
        {/* <button onClick={() => setOpenModal(true)}>Cadastrar novo funcionário</button>
        {openModal && ( */}
          {/* <Modal closeModal={onclose}> */}
            {/* <Form/> */}
          {/* </Modal> */}
        {/* )} */}

      <Link href='http://localhost:3000/company_one'>
       <div style={{
          width: '20rem',
          height: '10rem',
          color: 'black',
          border: '1px solid #ccc',
          margin: '10px 0',
          display:  'flex',
          justifyContent: 'center',
          alignItems: "center",
          borderRadius:'4px'
       }}>
        <p style={{color: "#666"}}>Company One</p>

       </div>
      </Link>

      <Link href='http://localhost:3000/company_two'>
       <div style={{
          width: '20rem',
          height: '10rem',
          color: 'black',
          border: '1px solid #ccc',
          margin: '10px 0',
          display:  'flex',
          justifyContent: 'center',
          alignItems: "center",
          borderRadius:'4px'
       }}>
        <p style={{color: "#666"}}>Company Two</p>
       </div>

      </Link>

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
  );
}

export const getServerSideProps: GetServerSideProps = async() => {
  const res = await fetch('http://localhost:3001/company-one');
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
