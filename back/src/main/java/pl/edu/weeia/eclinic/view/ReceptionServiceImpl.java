package pl.edu.weeia.eclinic.view;


import pl.edu.weeia.eclinic.exception.AppointmentAlreadyBookedException;
import pl.edu.weeia.eclinic.exception.AppointmentNotFoundException;
import pl.edu.weeia.eclinic.model.entity.Appointment;
import pl.edu.weeia.eclinic.model.entity.Reception;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.model.entity.WorkHours;
import pl.edu.weeia.eclinic.model.repository.AppointmentRepo;
import pl.edu.weeia.eclinic.model.repository.ReceptionRepo;
import pl.edu.weeia.eclinic.model.repository.UserRepo;
import pl.edu.weeia.eclinic.model.repository.WorkHoursRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;


@Service
@AllArgsConstructor
public class ReceptionServiceImpl implements ReceptionService {

    private final ReceptionRepo receptionRepo;
    private final WorkHoursRepo workHoursRepo;
    private final UserRepo userRepo;
    private final AppointmentRepo appointmentRepo;

    @Override
    public void bookAppointment(Appointment appointment) {
        if (appointmentRepo.existsByDateTime(appointment.getDateTime())) {
            throw new AppointmentAlreadyBookedException(appointment.getDateTime());
        } else {
            appointmentRepo.save(appointment);
        }
    }

    @Override
    public Set<Appointment> getAllDoctorAppointments(Long docId) {
        return appointmentRepo.findAllByDoctorId(docId);
    }

    @Override
    public void dropAppointment(Long id) {
        appointmentRepo.findById(id)
                .filter(appointment -> appointment.getDateTime().after(new Timestamp(System.currentTimeMillis())))
                .ifPresentOrElse(appointmentRepo::delete,
                        () -> { throw new AppointmentNotFoundException(id); });
    }

    @Override
    public void addReception(Reception reception) {
        receptionRepo.save(reception);
    }

    @Override
    public List<Reception> getReception() {
        return receptionRepo.findAll();
    }

    @Override
    public void addWorkingHours(WorkHours workHours) {
        workHoursRepo.save(workHours);
    }

    @Override
    public List<WorkHours> getWorkHours(Long receptionId) {
        return workHoursRepo.findByWorkHoursIDDoctorID(receptionId);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
