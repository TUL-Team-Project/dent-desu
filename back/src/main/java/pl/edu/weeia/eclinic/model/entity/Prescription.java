package pl.edu.weeia.eclinic.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long prescriptionID;
    private String content;
    @JsonIgnore
    @Column(name = "appointment_id")
    private Long appointmentId;

//    @ManyToOne
//    private Appointment appointment;

}
