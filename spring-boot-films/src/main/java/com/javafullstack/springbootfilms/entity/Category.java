package com.javafullstack.springbootfilms.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="Category")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="code")
    private String code;
}
