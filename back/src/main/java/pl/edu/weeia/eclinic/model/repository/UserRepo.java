package pl.edu.weeia.eclinic.model.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import pl.edu.weeia.eclinic.model.entity.Appointment;
import pl.edu.weeia.eclinic.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    Boolean existsByEmail(String email);
//    User findById(Long id);
    User findByEmail(String email);
    Set<Appointment> findAllAppointmentById(Long userId);
    @EntityGraph(attributePaths = {"authorities"})
    Optional<User> findOneWithAuthoritiesByEmail(String email);
}
