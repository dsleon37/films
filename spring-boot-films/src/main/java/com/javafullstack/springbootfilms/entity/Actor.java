package com.javafullstack.springbootfilms.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="actor")
@Getter
@Setter
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name;
    //@ManyToMany(mappedBy = "actores")
    //List<Film> peliculas;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "actor")
    private Set<FilmHasActor> filmHasActors;
}
