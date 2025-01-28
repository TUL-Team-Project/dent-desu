package com.example.apieclinic.view;

import com.example.apieclinic.exception.AppointmentAlreadyBookedException;
import com.example.apieclinic.exception.UserAlreadyExistException;
import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Prescription;
import com.example.apieclinic.model.entity.Referral;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.models.AppointmentForApiInterface;
import com.example.apieclinic.model.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor(onConstructor_={@Autowired})
public class UserServiceImpl implements com.example.apieclinic.view.UserService {

    private UserRepo userRepo;
    private PrescriptionRepo prescriptionRepo;
    private AppointmentRepo appointmentRepo;
    private DoctorRepo doctorRepo;
    private ReceptionRepo receptionRepo;

    @Override
    public Set<Appointment> getAllDoctorAppointments(Long docId) {
        return appointmentRepo.findAllByDoctorId(docId);
    }

    @Override
    public Set<Appointment> getMyFutureAppointment(Long userId) {
        return appointmentRepo.findAllByUserIdAndDateTimeAfter(userId, new Timestamp(System.currentTimeMillis()));

//        return appointmentRepo.findAllMyFutureAppointments(userId);


//        Set<Appointment> appointments = appointmentRepo.findAllByUserIdAndDateTimeAfter(userId, new Timestamp(System.currentTimeMillis()));
//        Set<AppointmentForApi> appointmentForApiSet = new HashSet<>();
//        for (Appointment a : appointments){
//            AppointmentForApi appointmentForApi = AppointmentForApi.builder()
//                    .name(doctorRepo.findById(a.getDoctorId()).get().getName())
//                    .date(a.getDateTime())
//                    .speciality(doctorRepo.findById(a.getDoctorId()).get().getSpecialization())
//                    .photo(doctorRepo.findById(a.getDoctorId()).get().getAvatarPath())
//                    .visitType(a.getType()).build();
//            appointmentForApiSet.add(appointmentForApi);
//        }
//        return appointmentForApiSet;
    }

    @Override
    public Set<Appointment> getMyPastAppointment(Long userId) {
        return appointmentRepo.findAllByUserIdAndDateTimeBefore(userId, new Timestamp(System.currentTimeMillis()));

    }

    @Override
    public Set<Referral> getReferrals(Long userId) {
        Set<Appointment> appointments = appointmentRepo.findAllByUserId(userId);
        Set<Referral> referrals = new HashSet<>();
        for (Appointment a: appointments) {
            referrals.addAll(a.getReferrals());
        }
        return referrals;
    }

    @Override
    public Set<Prescription> getPrescriptions(Long userId) {
        Set<Appointment> appointments = appointmentRepo.findAllByUserId(userId);
        Set<Prescription> prescriptions = new HashSet<>();
        for (Appointment a: appointments) {
            prescriptions.addAll(a.getPrescriptions());
        }
        return prescriptions;
    }

    @Override
    public void bookAppointment(Appointment appointment) {
        if (appointmentRepo.existsBydateTime(appointment.getDateTime())){
            throw new AppointmentAlreadyBookedException(appointment.getDateTime());
        }else {
            appointmentRepo.save(appointment);
        }
    }

    @Override
    public User getMyInfo(String mail) {
        return userRepo.findByEmail(mail);
    }

    @Override
    public Set<String> getSchedule(Long docId, Timestamp dateStart, Timestamp dateEnd) {
        Set<Appointment> appointments = appointmentRepo.findAllByDoctorIdAndDateTimeBetween(docId, dateStart, dateEnd);
        Set<String> schedule = new HashSet<>();
        for (Appointment a: appointments) {
            schedule.add(a.getDateTime().toString());
        }
        return schedule;
    }

    @Override
    public void addUser(User user) {
        String mail = user.getEmail();
        if (userRepo.existsByEmail(mail) || doctorRepo.existsByEmail(mail) || receptionRepo.existsByEmail(mail)){
            throw new UserAlreadyExistException(user.getEmail());
        }else {
            userRepo.save(user);
        }
    }

    @Override
    public void update(User user) {
        User userInDb = userRepo.findByEmail(user.getEmail());
        user.setUserID(userInDb.getUserID());
        userInDb = user;
        userRepo.save(userInDb);
    }

    @Override
    public Set<Prescription> getPrescription(Long appointmentID) {
        return prescriptionRepo.findByAppointmentId(appointmentID);
    }

    @Override
    public Set<Appointment> getAllAppointments(Long userid) {
        User user = userRepo.findByUserID(userid);
        return user.getAppointments();
//        return appointmentRepo.findByUser(user);
    }

//    @Override
//    public List<Prescription> getAllPrescriptions(Long userid) {
//        List<Appointment> appointments = appointmentRepo.findByUser(userid);
//        List<Prescription> prescriptions = null;
//        for (Appointment appointment: appointments) {
//            prescriptions.add(prescriptionRepo.findByAppointment(appointment));
//        }
//        return prescriptions;
//    }

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }
}
