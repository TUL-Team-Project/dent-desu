package com.example.apieclinic.controler;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.entity.Prescription;
import com.example.apieclinic.model.entity.Referral;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.view.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Set;


// Do testów zmienić na "*"
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    //TODO refactor to reasonable json
    @GetMapping("/getAllDoctorAppointments")
    public ResponseEntity<Set<Appointment>> getAllDoctorAppointments(@RequestParam("id") Long docId){
        return new ResponseEntity<>(userService.getAllDoctorAppointments(docId), HttpStatus.OK);
    }

    @GetMapping("/getMyPastAppointments")
    public ResponseEntity<Set<Appointment>> getMyPastAppointments(@RequestParam("id") Long userId){
        return new ResponseEntity<>(userService.getMyPastAppointment(userId), HttpStatus.OK);
    }

    @GetMapping("/getMyFutureAppointments")
    public ResponseEntity<Set<Appointment>> getMyFutureAppointments(@RequestParam("id") Long userId){
        return new ResponseEntity<>(userService.getMyFutureAppointment(userId), HttpStatus.OK);
    }

    @GetMapping("/getReferrals")
    public ResponseEntity<Set<Referral>> getMyReferral(@RequestParam("id") Long userId){
        return new ResponseEntity<>(userService.getReferrals(userId), HttpStatus.OK);
    }

    @GetMapping("/getPrescriptions")
    public ResponseEntity<Set<Prescription>> getMyPrescriptions(@RequestParam("id") Long userId){
        return new ResponseEntity<>(userService.getPrescriptions(userId), HttpStatus.OK);
    }

    @PostMapping("/bookAppointment")
    public ResponseEntity<String> bookAppointment(@RequestBody Appointment appointment){
        userService.bookAppointment(appointment);
        return new ResponseEntity<>("complete", HttpStatus.OK);
    }

    @GetMapping("/appointments")
    public Set<Appointment> getAppointments(@RequestParam("id") Long userID){
        return userService.getAllAppointments(userID);
    }
    @GetMapping("/prescriptions")
    public Set<Prescription> getPrescription(@RequestParam("id") Long prescriptionID){
        return userService.getPrescription(prescriptionID);
    }
    @PostMapping("/updateInformation")
    public ResponseEntity updateUserInformation(@RequestBody User user){
        userService.update(user);
        return new ResponseEntity(HttpStatus.OK);
    }
    @GetMapping("/scheduleFor")
    public ResponseEntity<Set<String>> getScheduleFor(@RequestParam("docId") Long docId, @RequestParam("dateStart") String dateStart,@RequestParam("dateEnd") String dateEnd){
        return new ResponseEntity<Set<String>>(userService.getSchedule(docId, Timestamp.valueOf(dateStart), Timestamp.valueOf(dateEnd)), HttpStatus.OK);
    }
//    @GetMapping("/leaves")
//    @GetMapping("/images")

}
