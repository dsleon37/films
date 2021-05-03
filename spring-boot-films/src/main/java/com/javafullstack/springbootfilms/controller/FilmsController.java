package com.javafullstack.springbootfilms.controller;

import com.javafullstack.springbootfilms.entity.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pelicula")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilmsController {

    @PostMapping
    public void addFilm(@RequestBody Film film) {
        //FilmRepository.save(film);
    }
}
