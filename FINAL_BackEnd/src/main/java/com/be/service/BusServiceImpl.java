package com.be.service;

import com.be.model.Bus;
import com.be.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService<Bus>{

    @Autowired
    private BusRepository busRepository;

    @Override
    public Page<Bus> findAll(Pageable pageable) {
        return busRepository.findAll(pageable);
    }

    @Override
    public void save(Bus bus) {
        busRepository.save(bus);
    }

    @Override
    public Optional<Bus> findById(int id) {
        return busRepository.findById(id);
    }

    @Override
    public void update(int id, Bus bus) {
        bus.setId(id);
        busRepository.save(bus);
    }

    @Override
    public void delete(int id) {
        busRepository.deleteById(id);
    }

    @Override
    public Page<Bus> findAllValue(String q, Pageable pageable) {
        if (q.isEmpty()||q==null){
            return busRepository.findAll(pageable);
        }
        return busRepository.findAllValue("%".concat(q).concat("%"), pageable);
    }
}
