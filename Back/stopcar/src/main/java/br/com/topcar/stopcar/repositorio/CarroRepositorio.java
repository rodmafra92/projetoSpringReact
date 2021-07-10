package br.com.topcar.stopcar.repositorio;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.topcar.stopcar.modelo.CarroModelo;

public interface CarroRepositorio extends CrudRepository<CarroModelo, Integer>{

    // Cadastrar E Alterar
    CarroModelo save (CarroModelo cm);
   

    // Listar
     List<CarroModelo> findAll();

     // Pesquisar
     CarroModelo findByCodigo(int codigo);

     // Remover - Excluir
     void delete(CarroModelo cm);
     
}
