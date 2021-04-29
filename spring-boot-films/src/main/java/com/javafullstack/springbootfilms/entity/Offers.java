package com.javafullstack.springbootfilms.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="offers")
@Getter
@Setter

public class Offers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "add_points")
    private int addPoints;

    @Column(name = "sub_points")
    private int subPoints;

    @ManyToOne
    @JoinColumn(name = "cinema_id", nullable = false)
    private Cinemas userId;
}