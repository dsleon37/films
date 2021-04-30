package com.javafullstack.springbootfilms.dto;

import com.javafullstack.springbootfilms.entity.Category;
import com.javafullstack.springbootfilms.entity.Director;
import com.javafullstack.springbootfilms.entity.Actor;

import com.javafullstack.springbootfilms.entity.Film;
import lombok.Data;

@Data
public class Tomar {
    private Film film;
    private Category category;
    private Actor  autor;
    private Director director;

}
