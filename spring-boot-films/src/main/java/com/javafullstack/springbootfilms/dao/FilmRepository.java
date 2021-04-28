package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Film;
import com.javafullstack.springbootfilms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface FilmRepository extends JpaRepository<Film, Long> {
}
