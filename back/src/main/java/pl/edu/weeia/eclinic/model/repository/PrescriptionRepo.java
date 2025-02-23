package pl.edu.weeia.eclinic.model.repository;

import pl.edu.weeia.eclinic.model.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface PrescriptionRepo extends JpaRepository<Prescription, Long> {
    Set<Prescription> findByAppointmentId(Long appointmentId);

}
