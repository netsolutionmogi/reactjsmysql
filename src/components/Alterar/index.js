import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api/api';
import './styles.css';
import Back from '../../assets/images/back.png';

import Home from '../Home';

const Alterar = (props) => {

    const [clientes, setclientes] = useState([]);
    const [nomecompleto, setnome] = useState('');
    const [endereco, setendereco] = useState('');
    const [cidade, setcidade] = useState('');
    const [email, setemail] = useState('');

    const history = useHistory();

    const id = localStorage.getItem("id");


    function limpar() {
        setnome('');
        setendereco('');
        setcidade('');
        setemail('');
    }

    async function alterarid(id) {

        const response = await api.get('http://localhost/apireact/buscarporcodigo.php', {
            params: {
                id: id,
            }

        });

        setclientes(response.data);
        console.log(response.data);
    }

    useEffect(() => {

        alterarid(id);

    }, [id]);


    async function HandleAlterar(e) {
        e.preventDefault();


        try {

            const data = new FormData();
            data.append('id', id);
            data.append('nome', nomecompleto);
            data.append('endereco', endereco);
            data.append('cidade', cidade);
            data.append('email', email);

            const options = {
                method: 'POST',
                body: data,
                headers: { 'Content-Type': 'multipart/form-data' }

            }

            await api.post('http://localhost/apireact/alterar.php', data, options)

            console.log({

                id,
                nomecompleto,
                endereco,
                cidade,
                email

            });
            alert("Dados Alterados concluido com Sucesso");
            limpar();

            history.push('/consultar');

        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            <Home />
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        <Link to="/consultar">
                            <img src={Back} className="back" alt="Voltar" />
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-xs-8">
                        <h4 className="voltar">Voltar</h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-xs-10">

                        <form onSubmit={HandleAlterar} id="searchcadastro">
                            <h2>Alterar</h2>

                            <div className="form-group row">
                                <label className="labelnome" htmlFor="nome">Nome</label>
                                <input type="text" name="nome" required
                                    id="nome" placeholder="nome"
                                    value={clientes.nome}
                                    onChange={(e) => { setnome(e.target.value) }}
                                />
                            </div>
                            <div className="form-group row">
                                <label className="labelendereco" htmlFor="endereco">Endereço</label>
                                <input type="text" name="endereco" id="endereco" required
                                    placeholder="Endereco"
                                    value={clientes.endereco}
                                    onChange={(e) => { setendereco(e.target.value) }}
                                />
                            </div>
                            <div className="form-group row">
                                <label className="labelcidade" htmlFor="cidade">Cidade</label>
                                <input type="text" name="cidade" id="cidade" required
                                    placeholder="Cidade"
                                    value={clientes.cidade}
                                    onChange={(e) => { setcidade(e.target.value) }}
                                />
                            </div>
                            <div className="form-group row">
                                <label className="labelemail" htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" required
                                    placeholder="E-mail"
                                    value={clientes.email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                />
                            </div>


                            <button type="submit" className="button">Cadastrar</button>

                        </form>
                    </div>
                </div>
            </div>



        </>

    );
}

export default Alterar;