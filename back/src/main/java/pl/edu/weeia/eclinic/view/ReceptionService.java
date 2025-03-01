package pl.edu.weeia.eclinic.view;


import pl.edu.weeia.eclinic.model.entity.*;

import java.util.List;
import java.util.Set;

public interface ReceptionService {

    void addReception(Reception reception);
    List<Reception> getReception();

    List<WorkHours> getWorkHours(Long doctorId);
    void addWorkingHours(WorkHours workHours);
    List<User> getAllUsers();
    void bookAppointment(Appointment apointment);
    void dropAppointment(Long id);
    Set<Appointment> getAllDoctorAppointments(Long docId);
}
