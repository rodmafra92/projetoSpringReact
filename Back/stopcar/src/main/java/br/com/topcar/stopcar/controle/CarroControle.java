package br.com.topcar.stopcar.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.topcar.stopcar.modelo.CarroModelo;
import br.com.topcar.stopcar.repositorio.CarroRepositorio;

@CrossOrigin(origins = "*")
@RestController
public class CarroControle {

    @Autowired
    private CarroRepositorio acoes;

    @GetMapping(value="")
    public String helloworld(){
        return "Hello World";
    }

    // Botão Cadastrar

    @PostMapping(value="/api/cadastrar")
    public @ResponseBody CarroModelo cadastrar(@RequestBody CarroModelo cm){
        return acoes.save(cm);
    }
    
    // Botão Selecionar

    @GetMapping(value="/api")
    public List<CarroModelo> selecionar(){
        return acoes.findAll();
    }

    // Botão Editar
    @PutMapping(value="/api/cadastrar")
    public @ResponseBody CarroModelo alterar (@RequestBody CarroModelo cm){
        return acoes.save(cm);
    }
    
    @DeleteMapping(value="/api/{codigo}")
    public void remover(@PathVariable int codigo){

        CarroModelo cm = acoes.findByCodigo(codigo);
        acoes.delete(cm);
    }
}
