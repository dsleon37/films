package com.javafullstack.springbootfilms.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name="cinemas")
@Getter
@Setter

public class Cinemas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "website")
    private String web;

    @Column(name = "address")
    private String address;

    @Column(name = "user_id")
    private Long userId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userId")
    private Set<Offers> offers;


}