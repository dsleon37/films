package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends CrudRepository<User, Long> {

    public User findByUserName(String username);

    public User save(User user);




}
