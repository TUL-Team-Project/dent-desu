package com.example.apieclinic.view;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Doctor;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.entity.WorkHours;
import com.example.apieclinic.model.repository.AppointmentRepo;
import com.example.apieclinic.model.repository.DoctorRepo;
import com.example.apieclinic.model.repository.UserRepo;
import com.example.apieclinic.model.repository.WorkHoursRepo;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor(onConstructor_={@Autowired})
public class DoctorServiceImpl implements DoctorService{

    private final DoctorRepo doctorRepo;
    private final UserRepo userRepo;
    private final AppointmentRepo appointmentRepo;
    private final WorkHoursRepo workHoursRepo;

    @Override
    public Set<Appointment> getAllMyAppointments(Long docId) {
        return appointmentRepo.findAllByDoctorId(docId);
    }

    @Override
    public Set<Appointment> getMyPastAppointment(Long docId) {
        return appointmentRepo.findAllByDoctorIdAndDateTimeBefore(docId, new Timestamp(System.currentTimeMillis()));
    }

    @Override
    public Set<Appointment> getMyFutureAppointment(Long docId) {
        return appointmentRepo.findAllByDoctorIdAndDateTimeAfter(docId, new Timestamp(System.currentTimeMillis()));
    }

    @Override
    public Set<User> getMyUsers(Long doctorId) {
        Set<Appointment> appointments = appointmentRepo.findByDoctorId(doctorId);
        Set<User> users = new HashSet<>();
        for (Appointment appointment:appointments) {
            users.add(userRepo.findByUserID(appointment.getUserId()));
        }
        return users;
    }

    @Override
    public void addDoctor(Doctor doctor) {
        doctorRepo.save(doctor);
    }

    @Override
    public List<Doctor> getDoctors() {
        return doctorRepo.findAll();
    }

    @Override
    public void addWorkingHours(WorkHours workHours) {
        workHoursRepo.save(workHours);
    }

    @Override
    public List<WorkHours> getWorkHours(Long doctorId) {
//        workHoursRepo.findAll().stream().allMatch(Predicate.isEqual(WorkHours::getWorkHoursID::));
        return workHoursRepo.findByWorkHoursIDDoctorID(doctorId);

    }
}
