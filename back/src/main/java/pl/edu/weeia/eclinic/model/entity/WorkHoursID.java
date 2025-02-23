package pl.edu.weeia.eclinic.model.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class WorkHoursID implements Serializable {
    private Long doctorID;
    private Integer day;
//check out why cant use Doctor object as part of the key(probably not necessary)
}

