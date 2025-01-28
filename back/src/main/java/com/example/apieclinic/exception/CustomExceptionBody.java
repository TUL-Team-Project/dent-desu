package com.example.apieclinic.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;
@Data
public class CustomExceptionBody {
    private final String message;
    private final HttpStatus httpStatus;
    private final ZonedDateTime timestamp;
}
