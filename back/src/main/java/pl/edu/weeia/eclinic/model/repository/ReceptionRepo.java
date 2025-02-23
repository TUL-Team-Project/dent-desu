package pl.edu.weeia.eclinic.model.repository;

import pl.edu.weeia.eclinic.model.entity.Reception;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceptionRepo extends JpaRepository<Reception, Long> {
    Reception findByEmail(String email);
    Boolean existsByEmail(String email);
}