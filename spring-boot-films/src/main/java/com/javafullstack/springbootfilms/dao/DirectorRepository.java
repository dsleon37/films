package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Category;
import com.javafullstack.springbootfilms.entity.Director;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface DirectorRepository extends JpaRepository<Director, Long> {
}
