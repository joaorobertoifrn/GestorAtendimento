package br.edu.ifrn.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.edu.ifrn.model.Atendimento;

@RepositoryRestResource(collectionResourceRel = "atendimento", path = "atendimento")
public interface IRepositoryAtendimento extends CrudRepository<Atendimento, Long> {

	@Query("SELECT T1 FROM Atendimento T1 WHERE T1.id = (SELECT MAX(id) FROM Atendimento)")
	Atendimento trazerUltimoAtendimento();
	
	@Query("SELECT T1 FROM Atendimento T1 WHERE T1.id = (SELECT MIN(id) FROM Atendimento)")
	Atendimento trazerPrimeiroAtendimento();

	@Query("SELECT T1 FROM Atendimento T1 ORDER BY T1.dataAtendido DESC")
	List<Atendimento> trazerUltimosAtendimentos();
	
	@Query("SELECT T1.guiche.numero, COUNT(T1.id) FROM Atendimento AS T1 GROUP BY T1.guiche.numero")
	List<Object[]> trazerAtendimentosPorGuiche();
}
