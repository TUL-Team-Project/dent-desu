package com.example.apieclinic.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "reception")
public class Reception {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long receptionID;
    private String name;
    private String surname;
    private String phone;
    private String email;
    @JsonIgnore
    private String password;
    private String avatarPath;
    private String role;
    // @OneToMany(cascade = CascadeType.DETACH)
    // @JoinColumn(name = "reception_id")
    // @JsonIgnore

}
