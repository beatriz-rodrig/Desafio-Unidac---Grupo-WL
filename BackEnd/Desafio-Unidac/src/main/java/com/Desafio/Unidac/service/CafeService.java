package com.Desafio.Unidac.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Desafio.Unidac.model.Cafe;
import com.Desafio.Unidac.repository.CafeRepository;


@Service
public class CafeService {
	
	@Autowired 
	private CafeRepository cafeRepository;
	
	public Optional<Object> cadastrarCafe(Cafe cafeCadastrar) {
		return cafeRepository.findByCpf(cafeCadastrar.getCpf()).map(usuarioExistente -> {
			return Optional.empty();
		}).orElseGet(() -> {
			cafeCadastrar.setCpf(cafeCadastrar.getCpf());
			
		return cafeRepository.findByCafe(cafeCadastrar.getCafe()).map(usuarioExistente -> {
			return Optional.empty();
		}).orElseGet(() -> {
			cafeCadastrar.setCafe(cafeCadastrar.getCafe());
			return Optional.ofNullable(cafeRepository.save(cafeCadastrar));
			});
		});
	}
}
