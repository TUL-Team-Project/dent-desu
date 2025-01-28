package com.example.apieclinic.security;

import com.example.apieclinic.model.entity.Doctor;
import com.example.apieclinic.model.entity.Reception;
import com.example.apieclinic.model.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MyUserDetails implements UserDetails {

    private String email;
    private String password;
    private List<GrantedAuthority> authorities = new ArrayList<>();

    public MyUserDetails(User user){
        this.email = user.getEmail();
        this.password = user.getPassword();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    }
    public MyUserDetails(Reception reception){
        this.email = reception.getEmail();
        this.password = reception.getPassword();
        authorities.add(new SimpleGrantedAuthority("ROLE_RECEPTION"));
    }
    public MyUserDetails(Doctor doctor){
        this.email = doctor.getEmail();
        this.password = doctor.getPassword();
        authorities.add(new SimpleGrantedAuthority("ROLE_DOCTOR"));
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
