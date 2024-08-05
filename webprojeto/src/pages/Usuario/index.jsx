import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";
import React, { Component } from 'react';

const Usuario = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async () =>{
    try{
      /*const response = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})*/
      const response = await api.post("users",{nome: nome, email: email, senha: senha, tipoUsuario: "Funcionario", sobrenome: "Alves"})
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  };
  
  function redireciona() {
    var enviar_register = document.getElementById("enviar_register").value;
    location.href = "login.html";
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('address').value = ("");
    document.getElementById('neighborhood').value = ("");
    document.getElementById('city').value = ("");
    document.getElementById('state').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('address').value = (conteudo.logradouro);
        document.getElementById('neighborhood').value = (conteudo.bairro);
        document.getElementById('city').value = (conteudo.localidade);
        document.getElementById('state').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('address').value = "...";
            document.getElementById('neighborhood').value = "...";
            document.getElementById('city').value = "...";
            document.getElementById('state').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

 
return(
    <div className="right">
  <form method="get" action="#">
  <div class="container-form">
      <div class="background-input">
          <div class="right-input">
              <div class="tittle-input">
                  <h1>INFORMAÇÕES</h1>
              </div>
              <div class="input-type">
              <label>Nome da Empresa</label>
              <input type="text" placeholder="Nome da empresa" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Nome Fantasia</label>
              <input type="text" placeholder="Nome Fantasia" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>CNPJ</label>
              <input type="number" placeholder="CNPJ" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Representante da Empresa</label>
              <input type="text" placeholder="Seu Nome" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>CPF</label>
              <input type="number" placeholder="CPF" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Cargo</label>
              <input type="text" placeholder="Seu Cargo" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              
          </div>

          <div class="right-input-2">
              <div class="tittle-input">
                  <h1>ENDEREÇO</h1>
              </div>
              <div class="input-type">
              <label>CEP</label>
              <input type="number" placeholder="CEP" onChange={(e)=>setNome(e.target.value)}/>
              </div>

              <div class="input-type">
              <label>Rua</label>
              <input type="text" placeholder="Rua" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Bairro</label>
              <input type="text" placeholder="Bairro" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Cidade</label>
              <input type="text" placeholder="Cidade" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Estado</label>
              <input type="text" placeholder="Estado" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="tittle-input">
                  <h1>CONTA</h1>
              </div>
              <div class="input-type">
              <label>Email</label>
              <input type="text" placeholder="Email" onChange={(e)=>setNome(e.target.value)}/>
              </div>
              <div class="input-type">
              <label>Senha</label>
              <input type="text" placeholder="Senha" onChange={(e)=>setNome(e.target.value)}/>
              </div>

          </div>

          <button class="input-send" id="enviar_register" onclick="redireciona()">Enviar</button>

      </div>
      
  </div>
  
</form>
</div>

)

                   {

                
                   } 
            
}

export default Usuario;