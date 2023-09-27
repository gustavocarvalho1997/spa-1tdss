import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from './router/EditarProdutos.jsx';
import Erro404 from './router/Erro404.jsx';
import Home from './router/Home.jsx';
import Produtos from './router/Produtos.jsx';
import ExcluirProdutos from './router/ExcluirProdutos.jsx';
import Adicionar from './router/AdicionarProdutos.jsx';

//Criando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', element: <App />,
      errorElement: <Erro404 />, 
      children: [
        { path: '/', element: <Home /> },
        { path: '/produtos', element: <Produtos /> },
        { path: '/editar/produtos/:id', element: <EditarProdutos /> },
        { path: '/excluir/produtos/:id', element: <ExcluirProdutos /> },
        { path: '/adicionar/produtos', element: <Adicionar/>}
      ]
  },
])

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  ,
)