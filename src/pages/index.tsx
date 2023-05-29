import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'), 
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome, "Selecionado")
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome, "Excluido")
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}> 
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4" cor="green">Novo Cliente</Botao>
        </div>
        <Tabela 
         cliente={clientes} 
         clienteExcluido={clienteExcluido} 
         clienteSelecionado={clienteSelecionado} 
        />
        <Formulario cliente={clientes[0]} />
      </Layout>
    </div>
  )
}
