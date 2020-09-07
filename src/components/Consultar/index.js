import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './styles.css';
import Home from '../Home';
import api from '../../api/api';


function Consultar() {

    const [clientes, setclientes] = useState([]);
    const history = useHistory();

    useEffect(() => {

        async function Carregar() {
            const response = await api.get('http://localhost/apireact/consultar.php');
            setclientes(response.data);
            console.log(response.data);
        }
        Carregar();

    }, []);


    async function alterar(id) {

        try {

            const data = new FormData();
            data.append('id', id);

            const response = await api.get('http://localhost/apireact/buscarporcodigo.php', {
                params: {
                    id: id
                }

            });
            console.log(response.data);

            localStorage.setItem("id", id);
            history.push('/alterar');


        } catch (error) {

            alert("Falta na busca");

        }

    }


    return (
        <>
            <Home />
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                        <h2>Consultar Clientes:</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-responsive table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Cidade</th>
                                        <th className="visible-lg visible-sm visible-md">E-mail</th>
                                        <th className="visible-lg visible-sm visible-md">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map(cliente => (
                                        <tr key={cliente.id}>
                                            <td>{cliente.id}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.cidade}</td>
                                            <td className="visible-lg visible-sm visible-md">{cliente.email}</td>
                                            <td>
                                                <button className="button-editar" type="button" onClick={() => alterar(cliente.id)} >Editar</button>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>

                            </table>


                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Consultar;
