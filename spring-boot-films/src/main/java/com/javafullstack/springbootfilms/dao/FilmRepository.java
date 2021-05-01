package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Film;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface FilmRepository extends JpaRepository<Film, Long> {

    Page<Film> findByCategoryId(@RequestParam("id")Long id, Pageable pageable);

    Page<Film> findByTitleContaining(@RequestParam("title") String title,Pageable pageable);
}
