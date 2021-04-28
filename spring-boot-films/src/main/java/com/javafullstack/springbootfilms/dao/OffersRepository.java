package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Offers;
import com.javafullstack.springbootfilms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface OffersRepository extends JpaRepository<Offers, Long> {
}
