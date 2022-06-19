import Head from "next/head"
import Image from "next/image"
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { GetServerSideProps } from "next"
import { FaLinkedinIn } from "react-icons/fa"
import { Card } from "../../components/Card"
import { Form } from "../../components/Form"
import { api } from "../../service/api"
import { ContentContainer, Footer, Header, Icon, LinkedIn, LogoContainer, MainContainer } from "../../styles/pages/Home"
import * as SC from './styles'
import { useState } from "react"
import colors from "../../styles/colors"

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

// const getItemStyle = (isDraggin: boolean, draggableStyle: any) => ({
//   padding: 10,
//   margin: '0 50px 15px 50px',
//   background: isDraggin ? `${colors.vividBlue}` : `${colors.darkGray}`,
//   color: isDraggin ? 'white': 'black',
//   border: '1px solid black',
//   fontSize:'20px',
//   borderRadius: '5px',

//   ...draggableStyle
// })

 const CompanyOne = (props : EmployeeProps) => {
   const {data} = props;
   const [newPosition, setNewPosition] = useState(data)

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;

    if(!destination)  return

    const items = Array.from(data);
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setNewPosition(items)
  }

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
      <Form/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="employee">
          {(provided => (
            <SC.CardContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((info, index) => (
                  <Draggable key={info.id} draggableId={info.name} index={index}>
                    {(provided, snapshot) => (
                        <Card
                          // ref={provided.innerRef}
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
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        />

                    )}
                </Draggable>
                ))}
            </SC.CardContainer>
          ))}
        </Droppable>
      </DragDropContext>
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

export default CompanyOne;


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('http://localhost:3001/company_one');
  const data = await response.data;

  return {
    props: {data}
  }
}
