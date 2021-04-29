package com.javafullstack.springbootfilms.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

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

    @Column(name="date")
    private Date date;



    @ManyToOne
    @JoinColumn(name = "actor_id", nullable = false)
    private Actor actor;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "director_id", nullable = false)
    private Director director;

}
