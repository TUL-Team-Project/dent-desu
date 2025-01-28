package com.example.apieclinic.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Data
@Entity
@Table(name = "doctors")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doctorID;
    private String name;
    private String surname;
    private String pesel;
    private Date birthDate;
    private String phone;
    private String email;
    @JsonIgnore
    private String password;
    private String specialization;
    private String description;
    private String avatarPath;
    private String role;
    @OneToMany(cascade = CascadeType.DETACH)
    @JoinColumn(name = "doctor_id")
    @JsonIgnore
    private Set<Appointment> appointments;

}
