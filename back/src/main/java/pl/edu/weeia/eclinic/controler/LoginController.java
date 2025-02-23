package pl.edu.weeia.eclinic.controler;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.weeia.eclinic.model.entity.Doctor;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.view.AccountService;
import pl.edu.weeia.eclinic.view.DoctorService;
import  pl.edu.weeia.eclinic.view.UserService;

import java.util.List;

// Do testów zmienić na "*"
@CrossOrigin(origins = "*")
@RestController
public class LoginController {

    private final UserService userService;
    private final DoctorService doctorService;
    private final AccountService accountService;

    @Autowired
    public LoginController(UserService userService, DoctorService doctorService, AccountService accountService) {
        this.userService = userService;
        this.doctorService = doctorService;
        this.accountService = accountService;
    }

    @GetMapping("/getDoctors")
    public ResponseEntity<List<Doctor>> home(){
        List<Doctor> allDoctors = doctorService.getDoctors();
        return new ResponseEntity<>(allDoctors, HttpStatus.OK);
    }

    @GetMapping("/signIn")
    public ResponseEntity signIn(@RequestHeader("Authorization") String auth){
        String decoded = new String(Base64.decodeBase64(auth.substring(6)));
        String[] credentials = decoded.split(":");
        return new ResponseEntity(accountService.getMyInfo(credentials[0]),HttpStatus.OK);
    }

    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody User user){
        userService.addUser(user);
        return new ResponseEntity(HttpStatus.OK);
    }
}
