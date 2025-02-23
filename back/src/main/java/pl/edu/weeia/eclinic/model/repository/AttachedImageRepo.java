package pl.edu.weeia.eclinic.model.repository;

import pl.edu.weeia.eclinic.model.entity.AttachedImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AttachedImageRepo extends JpaRepository <AttachedImage, Long> {
    Set<AttachedImage> findByAppointmentId(Long appointmentId);
}
