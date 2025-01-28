package com.example.apieclinic.view;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Doctor;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.entity.WorkHours;

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
