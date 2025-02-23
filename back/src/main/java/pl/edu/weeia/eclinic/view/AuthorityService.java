package pl.edu.weeia.eclinic.view;

import org.springframework.stereotype.Service;
import pl.edu.weeia.eclinic.model.entity.AppAuthority;
import pl.edu.weeia.eclinic.model.entity.Authority;
import pl.edu.weeia.eclinic.model.repository.AuthorityRepository;

import java.util.Set;

@Service
public class AuthorityService {
    private final AuthorityRepository authorityRepository;

    public AuthorityService(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    public void save(Authority auth) {
        authorityRepository.save(auth);
    }

    public Set<Authority> findByNameIn(AppAuthority... roles) {
        return authorityRepository.findByRoleNameIn(Set.of(roles));
    }
}
