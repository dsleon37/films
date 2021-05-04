package com.javafullstack.springbootfilms.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="film")
@Getter
@Setter
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="video_url")
    private String videoUrl;

    @Column(name="date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    /**
     * Actores.
     */
    @ManyToMany
    @JoinTable(name = "film_has_actor",
            joinColumns = @JoinColumn(name = "film_id"),
            inverseJoinColumns = @JoinColumn(name = "actor_id")
    )
    private List<Actor> actores;

    /**
     * Directores.
     */

    @ManyToMany
    @JoinTable(name = "film_has_director",
            joinColumns = @JoinColumn(name = "film_id"),
            inverseJoinColumns = @JoinColumn(name = "director_id")
    )
    private List<Director> directores;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "film")
    private Set<FilmList> filmLists;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "actor")
    private Set<FilmHasActor> filmHasActors;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "director")
    private Set<FilmHasDirector> filmHasDirectors;

}
