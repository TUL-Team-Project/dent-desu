package pl.edu.weeia.eclinic.view;

import pl.edu.weeia.eclinic.model.entity.Appointment;
import pl.edu.weeia.eclinic.model.entity.Doctor;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.model.entity.WorkHours;

import java.util.List;
import java.util.Set;

public interface DoctorService {
    void addDoctor(Doctor doctor);
    List<Doctor> getDoctors();

    List<WorkHours> getWorkHours(Long doctorId);
    void addWorkingHours(WorkHours workHours);
    Set<User> getMyUsers(Long doctorId);
    Set<Appointment> getMyFutureAppointment(Long docId);
    Set<Appointment> getMyPastAppointment(Long docId);
    Set<Appointment> getAllMyAppointments(Long docId);
}
