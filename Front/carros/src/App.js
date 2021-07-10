import React from 'react';

import './estilos.css';

// Classe
export default class App extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
          //  cadastro : true;
            cadastrar : true,
            marca : '',
            modelo: '',
            ano: '',
            porta: '',
            motor: '',
            tipo: '',
            cambio: '',
            cor: '',
            combustivel: '',
            valor: '',
            vetor: [],

            
        }
    }
    // Antes de executar o Render
    componentDidMount(){
        this.listar();
    }

    // Ao Digitar
    aoDigitar = (e) => {

        var nomeCampo= e.target.name;
        var valorCampo= e.target.value;

        this.setState({[nomeCampo] : valorCampo}); 
    }

    // Listar
    listar = () => {

        fetch('http://localhost:8080/api')
        .then(retorno => retorno.json())
        .then(retorno => {
            this.setState({vetor:retorno})
        })

    }

    // Limpar
    limparCampos = () =>{
        this.setState({
            marca : '',
            modelo: '',
            ano: '',
            porta: '',
            motor: '',
            tipo: '',
            cambio: '',
            cor: '',
            combustivel: '',
            valor: ''
        })
    }

    // Botão Cadastrar
    cadastrar = () => {

        if(this.state.marca === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Marca do veículo precisa ser preenchido'
            })
        }else if(this.state.modelo === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Modelo do veículo precisa ser preenchido'
            })
        }else if(this.state.ano === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Ano do veículo precisa ser preenchido'
            })
        }else if(this.state.porta === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Portas do veículo precisa ser preenchido'
            })
        }else if(this.state.motor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Motor do veículo precisa ser preenchido'
            })
        }else if(this.state.tipo === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Tipo de veículo precisa ser preenchido'
            })
        }else if(this.state.cambio === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Cêmbio do veículo precisa ser preenchido'
            })
        }else if(this.state.cor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Cor do veículo precisa ser preenchido'
            })
        }else if(this.state.combustivel === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Combustivel do veículo precisa ser preenchido'
            })
        }
        else if(this.state.valor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo valor do veículo precisa ser preenchido'
            })
        }else{

            var obj = {
                "marca" : this.state.marca,
                "modelo" : this.state.modelo,
                "ano" : this.state.ano,
                "porta" : this.state.porta,
                "tipo" : this.state.tipo,
                "motor" : this.state.motor,
                "cambio" : this.state.cambio,
                "cor" : this.state.cor,
                "combustivel" : this.state.combustivel,
                "valor" : this.state.valor,
            }
            
            fetch('http://localhost:8080/api/cadastrar',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(obj)
            })
            .then(retorno => retorno.json())
            .then(retorno => {

                // Fazer copia do State Vetor
                var copiaVetor = [...this.state.vetor];

                // Adicionar novo elemento
                copiaVetor.push(retorno);
    
                // Sobrepor o State Vetor
                this.setState({vetor : copiaVetor});

                // Limpar Campos
                this.limparCampos();

                // Alterar  status e mensagem 
                this.setState({
                    statusAlerta:'ok',
                    textoAlerta:'Veículo alterado com sucesso.'
                })
            })
        }
    }

    // Botão Editar

    editar = () => {

        if(this.state.marca === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Marca do veículo precisa ser preenchido'
            })
        }else if(this.state.modelo === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Modelo do veículo precisa ser preenchido'
            })
        }else if(this.state.ano === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Ano do veículo precisa ser preenchido'
            })
        }else if(this.state.porta === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Portas do veículo precisa ser preenchido'
            })
        }else if(this.state.motor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Motor do veículo precisa ser preenchido'
            })
        }else if(this.state.tipo === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Tipo de veículo precisa ser preenchido'
            })
        }else if(this.state.cambio === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Cêmbio do veículo precisa ser preenchido'
            })
        }else if(this.state.cor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Cor do veículo precisa ser preenchido'
            })
        }else if(this.state.combustivel === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo Combustivel do veículo precisa ser preenchido'
            })
        }
        else if(this.state.valor === ''){
            this.setState({
                statusAlerta:'falha',
                textoAlerta:'O campo valor do veículo precisa ser preenchido'
            })
        }else{

            var obj = {
                "codigo" : this.state.codigo,
                "marca" : this.state.marca,
                "modelo" : this.state.modelo,
                "ano" : this.state.ano,
                "porta" : this.state.porta,
                "tipo" : this.state.tipo,
                "motor" : this.state.motor,
                "cambio" : this.state.cambio,
                "cor" : this.state.cor,
                "combustivel" : this.state.combustivel,
                "valor" : this.state.valor
            }
            
            fetch('http://localhost:8080/api/cadastrar',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(obj)
            })
            .then(retorno => retorno.json())
            .then(retorno => {

                // Fazer copia do State Vetor
                var copiaVetor = [...this.state.vetor];

                    // Verificar a posição do Vetor a ser editado.
                    var inciceEditar = copiaVetor.findIndex((objeto) => {
                        return objeto.codigo === this.state.codigo;
                    });

                    // Alterar Elemento
                    copiaVetor[inciceEditar] = obj;

                // Sobrepor o State Vetor
                this.setState({vetor : copiaVetor});

                // Limpar Campos
                this.limparCampos();

                // Alterar  status e mensagem 
                this.setState({
                    statusAlerta:'ok',
                    textoAlerta:'Cadastro realizado com sucesso.'
                });

                // Alterar Botões
                this.setState({
                    cadastrar : true
                })
            })
        }
    }

    // Botão Remover
    remover = (e) => {

        // Fetch
        fetch('http://localhost:8080/api/'+this.state.codigo,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        })
        .then(() =>{

            // Fazer uma copia do state vetor
            var copiaVetor= [...this.state.vetor];

            // Verificar Posição do vetor que será REMOVIDO
            var indiceRemover = copiaVetor.findIndex((objeto) => {
                return objeto.codigo === this.state.codigo;
            });

            // Remover elemento
            copiaVetor.splice(indiceRemover, 1);

            // Sobrepor o State Vetor
            this.setState({vetor : copiaVetor});

            // Limpar campos
            this.limparCampos();
            
            // Alterar status e mensagem
            this.setState({
                statusAlerta:'ok',
                textoAlerta:'Removido com sucesso.'
            })

            // Alterar Botões
            this.setState({
                cadastrar : true
            })
        })
    }

    // Botão Cancelar
    cancelar = () => {
        
        // Limpar Campos
        this.limparCampos();

        // Alterar Botões
        this.setState({
            cadastrar : true
        })
    }

    // Selecionar
    selecionar = (e) => {

        // Indice
        var indice = e.target.value;

        // Extrair linha do vetor
        var obj = this.state.vetor[indice];

        // Alterar os status
        this.setState({
            codigo  : obj.codigo,
            marca   : obj.marca,
            modelo  : obj.modelo,
            ano     : obj.ano,
            porta   : obj.porta,
            motor   : obj.motor,
            tipo    : obj.tipo,
            cambio  : obj.cambio,
            cor     : obj.cambio,
            combustivel : obj.combustivel,
            valor   : obj.valor,
            cadastrar : false
        })
    }
    // Render
     render(){  
         return(
            <div>
                <form>
                    <div
                        className={
                            this.state.statusAlerta === 'falha' ? 'aler alert-danger':
                            this.state.statusAlerta ==='ok' ? 'alert alert-success': ''
                        }
                    > {this.state.textoAlerta}
                    </div>
                        <input type='text' value={this.state.marca} placeholder='Marca' name='marca' className='form-control' onChange={this.aoDigitar} />
                        <input type='text' value={this.state.modelo} placeholder='Modelo' name='modelo' className='form-control' onChange={this.aoDigitar} />
                        <input type='text' value={this.state.ano} placeholder='Ano' name='ano' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.porta} placeholder='Portas' name='porta' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.motor} placeholder='Motor' name='motor' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.tipo} placeholder='Tipo' name='tipo' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.cambio} placeholder='Câmbio' name='cambio' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.cor} placeholder='Cor' name='cor' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.combustivel} placeholder='Combustivel' name='combustivel' className='form-control' onChange={this.aoDigitar}/>
                        <input type='text' value={this.state.valor} placeholder='Valor' name='valor' className='form-control' onChange={this.aoDigitar}/>
                        {    
                            this.state.cadastrar == true?
                            <input type='button' value='Cadastrar' className='btn btn-primary' onClick={this.cadastrar} />
                            :
                            <div>
                            <input type='button' value='Editar' className='btn btn-primary' onClick={this.editar}/>
                            <input type='button' value='Remover' className='btn btn-danger' onClick={this.remover}/>
                            <input type='button' value='Cancelar' className='btn btn-secondary' onClick={this.cancelar} />
                            </div>
                        }


                    
                </form>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>Portas</th>
                            <th>Motor</th>
                            <th>Tipo</th>
                            <th>Câmbio</th>
                            <th>Cor</th>
                            <th>Combustivel</th>
                            <th>Valor</th>                 
                            <th>Selecionar</th>                 
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vetor.map((carro, indice) => {
                            return(
                                <tr key={carro.codigo}>
                                    <td>{carro.codigo}</td>
                                    <td>{carro.marca}</td>
                                    <td>{carro.modelo}</td>
                                    <td>{carro.ano}</td>
                                    <td>{carro.porta}</td>
                                    <td>{carro.motor}</td>
                                    <td>{carro.tipo}</td>
                                    <td>{carro.cambio}</td>
                                    <td>{carro.cor}</td>
                                    <td>{carro.combustivel}</td>
                                    <td>{carro.valor}</td>
                                    <td><button type='button' className='btn btn-success' value={indice} onClick={this.selecionar} >Selecionar</button></td>
                                </tr>                           
                             )
                        })}

                    </tbody>
                </table>

            </div>
         )
     }
}
