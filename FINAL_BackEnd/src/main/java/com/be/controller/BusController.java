package com.be.controller;

import com.be.dto.BusDTO;
import com.be.model.Bus;
import com.be.service.BusService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/bus")
public class BusController {

    @Autowired
    private BusService busService;

    @GetMapping
    public ResponseEntity<Page<Bus>> findAllBus(@PageableDefault(value = 2) Pageable pageable)
    {
        Page<Bus> bus= busService.findAll(pageable);
        if(bus.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bus, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bus> findBusById(@PathVariable int id){
        Optional<Bus> bus = busService.findById(id);
        if (!bus.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bus.get(),HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Bus>> findAllValue(@RequestParam(name="finding", required = false, defaultValue = "") String finding,
                                                  Pageable pageable)
    {
        Page<Bus> bus = busService.findAllValue(finding, pageable);
        if(bus.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bus, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody BusDTO busDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Bus bus = new Bus();
        BeanUtils.copyProperties(busDTO, bus);
        busService.save(bus);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity <Bus> deleteBus(@PathVariable("id") int id){
        Optional<Bus> bus = busService.findById(id);
        if (!bus.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        busService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @Valid @RequestBody BusDTO busDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Bus busObj = (Bus) busService.findById(id).get();
        if (busObj == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            Bus bus = new Bus();
            BeanUtils.copyProperties(busDTO, bus);
            busService.update(id, bus);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }


}
