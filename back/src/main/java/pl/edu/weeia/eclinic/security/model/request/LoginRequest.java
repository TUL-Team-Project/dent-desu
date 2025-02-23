package pl.edu.weeia.eclinic.security.model.request;

public record LoginRequest(
        String username,
        String password
) {
}
