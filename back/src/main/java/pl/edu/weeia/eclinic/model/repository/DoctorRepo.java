package pl.edu.weeia.eclinic.model.repository;

import pl.edu.weeia.eclinic.model.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    Doctor findByEmail(String email);
    Boolean existsByEmail(String email);

}
