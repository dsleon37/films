package com.javafullstack.springbootfilms.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin( "htopp://localhost:4200")
@RestController
@RequestMapping("/api/pelicula")
public class FilmsController {

    /*private FilmService filmService;
    public FilmsController(FilmService filmService){
        this.filmService = filmService;
    }
    @PostMapping("/GuardarP")
    public TomarResponse placeOrder(@RequestBody Film film){
        TomarResponse tomarResponse = filmService.placeOrder(film);
        return  tomarResponse ;
    }*/
}
