package pl.edu.weeia.eclinic.exception;

public class AppointmentNotFoundException extends RuntimeException {
    public AppointmentNotFoundException(Long id) {
        super("Couldn't find Appointment with id: " + id);
    }
}
