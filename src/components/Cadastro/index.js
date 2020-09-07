import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';
import './styles.css';
import api from '../../api/api';

import Back from '../../assets/images/back.png';

function Cadastro() {

  const [nome, setnome] = useState('');
  const [endereco, setendereco] = useState('');
  const [cidade, setcidade] = useState('');
  const [email, setemail] = useState('');

  function limpar() {
    setnome('');
    setendereco('');
    setcidade('');
    setemail('');
  }

  async function HandleCadastrar(e) {
    e.preventDefault();


    try {

      const data = new FormData();
      data.append('nome', nome);
      data.append('endereco', endereco);
      data.append('cidade', cidade);
      data.append('email', email);

      const options = {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' }

      }

      await api.post('http://localhost/apireact/cadastrar.php', data, options)

      console.log({

        nome,
        endereco,
        cidade,
        email

      });
      alert("Cadastro concluido com Sucesso");
      limpar();


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
            <Link to="/">
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

            <form onSubmit={HandleCadastrar} id="searchcadastro">
              <h2>Cadastro</h2>
              <div className="form-group row">
                <label className="labelnome" htmlFor="nome">Nome</label>
                <input type="text" name="nome" required
                  id="nome" placeholder="nome"
                  value={nome}
                  onChange={(e) => { setnome(e.target.value) }}
                />
              </div>
              <div className="form-group row">
                <label className="labelendereco" htmlFor="endereco">Endereço</label>
                <input type="text" name="endereco" id="endereco" required
                  placeholder="Endereco"
                  value={endereco}
                  onChange={(e) => { setendereco(e.target.value) }}
                />
              </div>
              <div className="form-group row">
                <label className="labelcidade" htmlFor="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade" required
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => { setcidade(e.target.value) }}
                />
              </div>
              <div className="form-group row">
                <label className="labelemail" htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" required
                  placeholder="E-mail"
                  value={email}
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

export default Cadastro;