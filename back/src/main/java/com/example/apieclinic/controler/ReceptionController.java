package com.example.apieclinic.controler;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.entity.Reception;
import com.example.apieclinic.model.entity.WorkHours;
import com.example.apieclinic.view.ReceptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

// Do testów zmienić na "*"
@CrossOrigin(origins = "https://plusmed.cloud")
@RestController
@RequestMapping("/reception")
public class ReceptionController {

    private final ReceptionService receptionService;
    @Autowired
    public ReceptionController(ReceptionService receptionService) {
        this.receptionService = receptionService;

    }
    @GetMapping("/getAllDoctorAppointments")
    public ResponseEntity<Set<Appointment>> getAllDoctorAppointments(@RequestParam("id") Long docId){
        return new ResponseEntity<>(receptionService.getAllDoctorAppointments(docId), HttpStatus.OK);
    }
    @PostMapping("/bookAppointment")
    public ResponseEntity<String> bookAppointment(@RequestBody Appointment appointment){
        receptionService.bookAppointment(appointment);
        return new ResponseEntity<>("complete", HttpStatus.OK);
    }
    @GetMapping("/dropAppointment")
    public ResponseEntity dropAppointment(@RequestParam("id") Long id){
       receptionService.dropAppointment(id);
       return  new ResponseEntity(HttpStatus.OK);
    }
    @PostMapping("/addReception")
    public ResponseEntity addReception(@RequestBody Reception reception){
        System.out.println(reception.toString());
        receptionService.addReception(reception);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> allUsers = receptionService.getAllUsers();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    @GetMapping("/test")
    public ResponseEntity<String> home(){
        return new ResponseEntity<>("allDoctors", HttpStatus.OK);
    }

    @GetMapping("/getHoursOfDoc")
    public List<WorkHours> getHoursOfDoc(@RequestParam("id") Long receptionId){
        return receptionService.getWorkHours(receptionId);
    }
}
