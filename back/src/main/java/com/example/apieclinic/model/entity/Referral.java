package com.example.apieclinic.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "referrals")
public class Referral {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long referralId;
    private String content;
    @JsonIgnore
    @Column(name = "appointment_id")
    private Long appointmentId;
}
