package pl.edu.weeia.eclinic.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

@Configuration
@ConfigurationProperties(prefix = "constants")
public class Constants {

    // Define your batch size constant.
    private Set<String> constants;
    public static final int BATCH_SIZE = 50;

    public Set<String> getBreeds() {
        return constants;
    }

    public void setBreeds(Set<String> constants) {
        this.constants = constants;
    }
}
