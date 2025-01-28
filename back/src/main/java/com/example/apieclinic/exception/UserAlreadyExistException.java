package com.example.apieclinic.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.IM_USED)
public class UserAlreadyExistException  extends RuntimeException{

    public UserAlreadyExistException(String email) {
        super("Konto o adresie: " + email + " już istnieje");
    }

    public UserAlreadyExistException(String email, Throwable cause) {
        super("Konto o adresie: " + email + " już istnieje", cause);
    }
}
