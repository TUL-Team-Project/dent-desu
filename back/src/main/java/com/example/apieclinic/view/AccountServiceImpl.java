package com.example.apieclinic.view;

import com.example.apieclinic.model.entity.Doctor;
import com.example.apieclinic.model.entity.Reception;
import com.example.apieclinic.model.entity.User;
import com.example.apieclinic.model.repository.DoctorRepo;
import com.example.apieclinic.model.repository.ReceptionRepo;
import com.example.apieclinic.model.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor_={@Autowired})
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
