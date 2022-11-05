package com.be.repository;

import com.be.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus, Integer> {

    @Query(value = "select b.* from bus b\n"+
            " where concat(b.type,' ',b.house,' ',b.arrive,' ',b.destination,' ',b.phone,' ',b.email,' ',b.start_time, ' ', b.end_time) like ?1 ",
            countQuery ="select p.* from station p\n"+
                    " where concat(b.type,' ',b.house,' ',b.arrive,' ',b.destination,' ',b.phone,' ',b.email,' ',b.start_time, ' ', b.end_time) like ?1 ",nativeQuery = true)
    Page<Bus> findAllValue(String finding, Pageable pageable);
}
