package com.example.apieclinic.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class AppointmentAlreadyBookedExceptionHandler {
        @ExceptionHandler(value = {AppointmentAlreadyBookedException.class})
        public ResponseEntity<Object> handleAppointmentAlreadyBookedException(AppointmentAlreadyBookedException e){
            final HttpStatus badRequest = HttpStatus.CONFLICT;
            CustomExceptionBody customExceptionBody = new CustomExceptionBody(
                    e.getMessage(),
                    badRequest,
                    ZonedDateTime.now(ZoneId.of("Z"))
            );
            return new ResponseEntity<>(customExceptionBody, badRequest) ;
        }
}
