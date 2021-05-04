package com.javafullstack.springbootfilms.service;

import com.javafullstack.springbootfilms.entity.User;

public interface IUserService {

    public User findByUserName(String userName);


}
