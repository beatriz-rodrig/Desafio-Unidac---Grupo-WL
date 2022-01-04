package com.Desafio.Unidac.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Desafio.Unidac.model.Cafe;


@Repository

public interface CafeRepository extends JpaRepository <Cafe, Long> {
public List<Cafe> findAllByNomeContainingIgnoreCase(String nome);
	
	public Optional<Cafe> findByCpf(String cpf);
	
	public Optional<Cafe> findByCafe (String cafe);

}
