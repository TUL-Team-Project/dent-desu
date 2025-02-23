package pl.edu.weeia.eclinic.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Time;

@Entity
@Data
public class WorkHours {
    @Id
    private WorkHoursID workHoursID;
    private Time start;
    private Time end;
}
