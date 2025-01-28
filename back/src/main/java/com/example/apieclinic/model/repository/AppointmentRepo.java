package com.example.apieclinic.model.repository;

import com.example.apieclinic.model.entity.Appointment;
import com.example.apieclinic.model.models.AppointmentForApiInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Set;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {

    Set<Appointment> findAllByDoctorId(Long docId);
    Set<Appointment> findByUserId(Long userId);
    Set<Appointment> findAllByUserId(Long userId);
    Set<Appointment> findByDoctorId(Long userId);
    Set<Appointment> findAllByDoctorIdAndDateTimeBetween(Long docId, Timestamp dateTimeStart, Timestamp dateTimeEnd);
    void deleteById(Long id);
    Set<Appointment> findAllByDoctorIdAndDateTimeAfter(Long docId, Timestamp currentTime);
    Set<Appointment> findAllByDoctorIdAndDateTimeBefore(Long docId, Timestamp currentTime);

    Set<Appointment> findAllByUserIdAndDateTimeAfter(Long userId, Timestamp currentTime);
    Set<Appointment> findAllByUserIdAndDateTimeBefore(Long userId, Timestamp currentTime);

    Boolean existsBydateTime(Timestamp dateTime);

    @Query(
            value = "select date_Time, doctors.avatar_path, doctors.name, doctors.specialization, type from appointments join doctors on appointments.doctor_id = doctors.doctorid \n" +
                    " WHERE user_id = ?1 AND date_Time > CURRENT_TIMESTAMP",
            nativeQuery = true)
    Set<AppointmentForApiInterface> findAllMyFutureAppointments(Long userId);


}
