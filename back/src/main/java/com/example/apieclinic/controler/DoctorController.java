package com.example.apieclinic.controler;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Doctor;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.entity.WorkHours;
import com.example.apieclinic.view.DoctorService;
import com.example.apieclinic.view.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

// Do testów zmienić na "*"
@CrossOrigin(origins = "https://plusmed.cloud")
@RestController
@RequestMapping("/doctor")
public class DoctorController {

    private final DoctorService doctorService;
    private final UserService userService;

    @Autowired
    public DoctorController(DoctorService doctorService, UserService userService) {
        this.doctorService = doctorService;
        this.userService = userService;
    }

    @GetMapping("/getAllMyAppointments")
    public ResponseEntity<Set<Appointment>> getAllMyAppointments(@RequestParam("id") Long docId){
        return new ResponseEntity<>(doctorService.getAllMyAppointments(docId), HttpStatus.OK);
    }


    @GetMapping("/getMyPastAppointments")
    public ResponseEntity<Set<Appointment>> getMyPastAppointments(@RequestParam("id") Long docId){
        return new ResponseEntity<>(doctorService.getMyPastAppointment(docId), HttpStatus.OK);
    }

    @GetMapping("/getMyFutureAppointments")
    public ResponseEntity<Set<Appointment>> getMyFutureAppointments(@RequestParam("id") Long docId){
       return new ResponseEntity<>(doctorService.getMyFutureAppointment(docId), HttpStatus.OK);
    }

    @PostMapping("/addDoctor")
    public ResponseEntity addDoctor(@RequestBody Doctor doctor){
        System.out.println(doctor.toString());
        doctorService.addDoctor(doctor);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/setWorkHours")
    public void setWorkHours(@RequestBody WorkHours workHours){
        doctorService.addWorkingHours(workHours);
    }

    @GetMapping("/getHoursOfDoc")
    public List<WorkHours> getHoursOfDoc(@RequestParam("id") Long docId){
        return doctorService.getWorkHours(docId);
    }

    @GetMapping("/getMyUsers")
    public ResponseEntity<Set<User>> getMyUsers(@RequestParam("id") Long docId){
        return new ResponseEntity<>( doctorService.getMyUsers(docId), HttpStatus.OK);
    }
}
