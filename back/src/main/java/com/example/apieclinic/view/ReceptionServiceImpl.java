package com.example.apieclinic.view;


import com.example.apieclinic.exception.AppointmentAlreadyBookedException;
import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Reception;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.repository.AppointmentRepo;
import com.example.apieclinic.model.repository.ReceptionRepo;
import com.example.apieclinic.model.entity.WorkHours;
import com.example.apieclinic.model.repository.WorkHoursRepo;
import com.example.apieclinic.model.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.sql.Timestamp;
import java.util.List;
import java.util.Set;


@Service
@AllArgsConstructor(onConstructor_={@Autowired})
public class ReceptionServiceImpl implements ReceptionService{

    private final ReceptionRepo receptionRepo;
    private final WorkHoursRepo workHoursRepo;
    private final UserRepo userRepo;
    private final AppointmentRepo appointmentRepo;
    @Override
    public  void bookAppointment(Appointment appointment){
        if (appointmentRepo.existsBydateTime(appointment.getDateTime())){
        throw new AppointmentAlreadyBookedException(appointment.getDateTime());
    }else {
        appointmentRepo.save(appointment);
    }}
    @Override
    public Set<Appointment> getAllDoctorAppointments(Long docId){
        return appointmentRepo.findAllByDoctorId(docId);
    }
    @Override
    public void dropAppointment(Long id) {
        if(appointmentRepo.findById(id).get().getDateTime().after(new Timestamp(System.currentTimeMillis())))
            appointmentRepo.deleteById(id);
    }

    @Override
    public void addReception(Reception reception) { receptionRepo.save(reception); }
    @Override
    public List<Reception> getReception() { return receptionRepo.findAll(); }
    @Override
    public void addWorkingHours(WorkHours workHours) {
        workHoursRepo.save(workHours);
    }
    @Override
    public List<WorkHours> getWorkHours(Long receptionId) { return workHoursRepo.findByWorkHoursIDDoctorID(receptionId); }
    @Override
    public  List<User> getAllUsers(){ return userRepo.findAll(); }
}
