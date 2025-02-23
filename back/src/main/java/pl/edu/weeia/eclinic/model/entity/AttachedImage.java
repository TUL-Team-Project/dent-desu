package pl.edu.weeia.eclinic.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "attached_images")
public class AttachedImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageID;
    private String path;
    private String description;
    @Column(name = "appointment_id")
    private Long appointmentId;
//    @ManyToOne
//    private Appointment appointment;
}
