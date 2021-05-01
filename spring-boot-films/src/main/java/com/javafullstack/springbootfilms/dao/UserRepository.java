package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUserName(String username);

}
