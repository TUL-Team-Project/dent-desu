package com.example.apieclinic.model.models;

import java.sql.Timestamp;

public interface AppointmentForApiInterface {
    Timestamp getDate_Time();
    String getAvatar_Path();
    String getName();
    String getSpecialization();
    Long getType();
}
