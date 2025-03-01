package pl.edu.weeia.eclinic.security.services;

import pl.edu.weeia.eclinic.model.entity.Doctor;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.model.repository.DoctorRepo;
import pl.edu.weeia.eclinic.model.repository.ReceptionRepo;
import pl.edu.weeia.eclinic.model.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    private final DoctorRepo doctorRepo;
    private final ReceptionRepo receptionRepo;
    private final UserRepo userRepo;

    @Autowired
    public MyUserDetailsService(DoctorRepo doctorRepo, ReceptionRepo receptionRepo, UserRepo userRepo) {
        this.doctorRepo = doctorRepo;
        this.receptionRepo = receptionRepo;
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Doctor doctor = doctorRepo.findByEmail(email);
        User user = userRepo.findByEmail(email);
        if (doctor != null){
            return new MyUserDetails(doctor);
        }else if (user != null){
            return new MyUserDetails(user);
        }else return new MyUserDetails(receptionRepo.findByEmail(email));
    }
}
