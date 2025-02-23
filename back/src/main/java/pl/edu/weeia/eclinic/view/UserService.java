package pl.edu.weeia.eclinic.view;

import pl.edu.weeia.eclinic.model.entity.Appointment;
import pl.edu.weeia.eclinic.model.entity.Prescription;
import pl.edu.weeia.eclinic.model.entity.Referral;
import pl.edu.weeia.eclinic.model.entity.User;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService {
    void addUser(User user);
    void update(User user);
    Set<Prescription> getPrescription(Long prescriptionID);
    Set<Appointment> getAllAppointments(Long userid);
//    List<Prescription> getAllPrescriptions(Long userid);
    List<User> getUsers();
    Set<String> getSchedule(Long docId, Timestamp dateStart, Timestamp dateEnd);
    User getMyInfo(String mail);
    void bookAppointment(Appointment appointment);
    Set<Prescription> getPrescriptions(Long userId);
    Set<Referral> getReferrals(Long userId);
    Set<Appointment> getMyFutureAppointment(Long userId);
    Set<Appointment> getMyPastAppointment(Long userId);
    Set<Appointment> getAllDoctorAppointments(Long docId);
    Optional<User> findWithAuthoritiesByEmail(String email);
    User register(User user);
}
