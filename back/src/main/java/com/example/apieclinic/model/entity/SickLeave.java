package com.example.apieclinic.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
@Table(name = "SickLeaves")
public class SickLeave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leavesID;
    private Date startDate;
    private Date endDate;
    private String remarks;
    @Column(name = "appointment_id")
    private Long appointmentId;
//    @ManyToOne
//    private Appointment appointment;

}
