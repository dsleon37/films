package com.javafullstack.springbootfilms.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="subscribers")
@Getter
@Setter
public class Subscriber {
    //id, points, user_id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "points")
    private int points;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
