package com.javafullstack.springbootfilms.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="film")
@Data
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

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
