package com.javafullstack.springbootfilms.service;

import com.javafullstack.springbootfilms.dao.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
public class UserService implements IUserService, UserDetailsService{

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        com.javafullstack.springbootfilms.entity.User  user = userRepository.findByUserName(s);
        if(user == null){
            logger.error("error en el login: no existe el usuario '"+s+"' en el sistema");
            throw new UsernameNotFoundException("error en el login: no existe el usuario '"+s+"' en el sistema");
        }
        List<GrantedAuthority> authority = Collections.singletonList(new SimpleGrantedAuthority(user.getRole().getRole()));

        return new User(user.getUserName(), user.getPassword() ,  true,  true,  true,  true, authority);
    }

    @Override
    public com.javafullstack.springbootfilms.entity.User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
