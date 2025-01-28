package com.example.apieclinic.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.Timestamp;

@ResponseStatus(HttpStatus.IM_USED)
public class AppointmentAlreadyBookedException extends RuntimeException {

        public AppointmentAlreadyBookedException(Timestamp dateTime) {
            super("Data wizyty: " + dateTime + " już zajęta");
        }

        public AppointmentAlreadyBookedException(Timestamp dateTime, Throwable cause) {
            super("Data wizyty: " + dateTime + " już zajęta", cause);
        }
}
