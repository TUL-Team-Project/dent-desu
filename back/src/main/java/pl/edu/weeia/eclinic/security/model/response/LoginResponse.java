package pl.edu.weeia.eclinic.security.model.response;

import java.util.List;

public record LoginResponse(
        String username,
        List<String> roles,
        String jwtToken
        ) {
}
