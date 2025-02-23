package pl.edu.weeia.eclinic.view;

import pl.edu.weeia.eclinic.model.entity.Doctor;
import pl.edu.weeia.eclinic.model.entity.Reception;
import pl.edu.weeia.eclinic.model.entity.User;
import pl.edu.weeia.eclinic.model.repository.DoctorRepo;
import pl.edu.weeia.eclinic.model.repository.ReceptionRepo;
import pl.edu.weeia.eclinic.model.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements AccountService {
    private final DoctorRepo doctorRepo;
    private final UserRepo userRepo;
    private final ReceptionRepo receptionRepo;

    @Override
    public Object getMyInfo(String mail) {
        User user = userRepo.findByEmail(mail);
        Doctor doctor = doctorRepo.findByEmail(mail);
        Reception reception = receptionRepo.findByEmail(mail);
        if (doctor != null){
            return doctor;
        }else if(user != null){
            return user;
        }else return reception;
    }
}
