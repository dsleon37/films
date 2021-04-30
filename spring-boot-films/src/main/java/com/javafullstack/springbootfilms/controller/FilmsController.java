package com.javafullstack.springbootfilms.controller;

import com.javafullstack.springbootfilms.Service.FilmService;
import com.javafullstack.springbootfilms.dto.TomarResponse;
import com.javafullstack.springbootfilms.entity.Film;
import org.springframework.web.bind.annotation.*;

@CrossOrigin( "htopp://localhost:4200")
@RestController
@RequestMapping("/api/pelicula")
public class FilmsController {

    private FilmService filmService;
    public FilmsController(FilmService filmService){
        this.filmService = filmService;
    }
    @PostMapping("/GuardarP")
    public TomarResponse placeOrder(@RequestBody Film film){
        TomarResponse tomarResponse = filmService.placeOrder(film);
        return  tomarResponse ;
    }
}
