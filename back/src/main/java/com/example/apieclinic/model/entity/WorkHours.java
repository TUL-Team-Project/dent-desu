package com.example.apieclinic.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Data
public class WorkHours {
    @Id
    private WorkHoursID workHoursID;
    private Time start;
    private Time end;
}
