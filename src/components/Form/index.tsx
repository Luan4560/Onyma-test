import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { api } from '../../service/api'
import { cpfMask } from '../../utils/inputMasks'
import { CustomInput } from '../CustomInput'

import * as SC from './styles'

export const Form = () => {
  const [inputValues, setInputValues] =  useState<{ [x: string]: string }>()
  const [employeeData, setEmployeeData] = useState([]);

  const {asPath} = useRouter()

  useEffect(() => {
    const getData = async() => {
      const response = await api.get(`${asPath}`)
      setEmployeeData(response.data)
    }

    getData()
  }, [asPath])

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    setInputValues({...inputValues, [name]: value})
  }

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      id:'' ,
      name: inputValues?.name,
      cpf: inputValues?.cpf,
      rg: inputValues?.rg,
      birth: inputValues?.birth,
      email: inputValues?.email,
      phone: inputValues?.phone,
      street: inputValues?.street,
      neighborhood: inputValues?.neighborhood,
      city: inputValues?.city,
      uf: inputValues?.uf,
      sector: inputValues?.sector,
      profession: inputValues?.profession
    }

    const hasEqualCpf = employeeData.find(item => item.cpf === data.cpf);

    if(hasEqualCpf) {
      return;
    }

    if(data.email || data.phone) {
      try {
        await api.post(`${asPath}`, data,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        );

      }catch(err) {
        console.log(err)
      }

    }else if(data.cpf === data.cpf) {
      console.log('Email ou telefone precisam ser preenchidos')
    }
  }

  return (
    <SC.Form onSubmit={handleFormSubmit}>
      <CustomInput
        required
        type="text"
        name="name"
        placeholder="Nome"
        value={inputValues?.name || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="cpf"
        maxLength={14}
        placeholder="CPF"
        value={cpfMask(inputValues?.cpf || '')}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="rg"
        placeholder="RG"
        value={inputValues?.rg || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="date"
        name="birth"
        value={inputValues?.birth || ''}
        onChange={handleChange}
      />
      <CustomInput
        type="email"
        name="email"
        placeholder="E-mail"
        value={inputValues?.email || ''}
        onChange={handleChange}
        />
      <CustomInput
        type="tel"
        name="phone"
        placeholder="(00)0000-0000"
        value={inputValues?.phone || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="street"
        placeholder="Rua"
        value={inputValues?.street || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="neighborhood"
        placeholder="Bairro"
        value={inputValues?.neighborhood || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="city"
        placeholder="Cidade"
        value={inputValues?.city || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="uf"
        placeholder="UF"
        value={inputValues?.uf || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="sector"
        placeholder="Setor"
        value={inputValues?.sector || ''}
        onChange={handleChange}
      />
      <CustomInput
        required
        type="text"
        name="profession"
        placeholder="Cargo"
        value={inputValues?.profession || ''}
        onChange={handleChange}
      />
      <SC.Button type='submit'>Enviar</SC.Button>

    </SC.Form>
  )
}
