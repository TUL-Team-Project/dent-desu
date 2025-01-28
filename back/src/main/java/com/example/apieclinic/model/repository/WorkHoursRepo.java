package com.example.apieclinic.model.repository;

import com.example.apieclinic.model.entity.WorkHours;
import com.example.apieclinic.model.entity.WorkHoursID;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkHoursRepo extends JpaRepository<WorkHours, WorkHoursID> {
    List<WorkHours> findByWorkHoursIDDoctorID(Long doctorID);
}

