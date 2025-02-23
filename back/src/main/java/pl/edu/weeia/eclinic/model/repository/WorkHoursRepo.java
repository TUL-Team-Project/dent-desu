package pl.edu.weeia.eclinic.model.repository;

import pl.edu.weeia.eclinic.model.entity.WorkHours;
import pl.edu.weeia.eclinic.model.entity.WorkHoursID;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkHoursRepo extends JpaRepository<WorkHours, WorkHoursID> {
    List<WorkHours> findByWorkHoursIDDoctorID(Long doctorID);
}

