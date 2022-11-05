package com.be.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BusService<T>{

    Page<T> findAll(Pageable pageable);

    void save(T t);

    Optional<T> findById(int id);

    void update(int id, T t);

    void delete(int id);

    Page<T> findAllValue(String finding, Pageable pageable);
}
