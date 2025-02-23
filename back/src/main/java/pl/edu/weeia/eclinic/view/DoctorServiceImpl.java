package pl.edu.weeia.eclinic.view;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import pl.edu.weeia.eclinic.model.entity.Appointment;
import pl.edu.weeia.eclinic.model.entity.Doctor;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.model.entity.WorkHours;
import pl.edu.weeia.eclinic.model.repository.AppointmentRepo;
import pl.edu.weeia.eclinic.model.repository.DoctorRepo;
import pl.edu.weeia.eclinic.model.repository.UserRepo;
import pl.edu.weeia.eclinic.model.repository.WorkHoursRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
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
        return appointmentRepo.findByDoctorId(doctorId).stream()
                .map(appointment -> userRepo.findById(appointment.getUserId())
                        .orElseThrow(() -> new UsernameNotFoundException(
                                "User with id: " + appointment.getUserId() + " doesn't exist.")))
                .collect(Collectors.toSet());
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
