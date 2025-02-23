package pl.edu.weeia.eclinic.exception;

import java.util.Set;

public class InvalidAuthorityException extends RuntimeException {
    private final Set<String> invalidAuthorities;

    public InvalidAuthorityException(Set<String> invalidAuthorities) {
        super("Invalid authorities found: " + String.join(", ", invalidAuthorities));
        this.invalidAuthorities = invalidAuthorities;
    }

    public Set<String> getInvalidAuthorities() {
        return invalidAuthorities;
    }
}
