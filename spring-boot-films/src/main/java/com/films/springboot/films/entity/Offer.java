package com.films.springboot.films.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="")
@Data
public class Offer {
    public Offer(Long id, String description, Date deadline, Integer addPoints, Integer subPoints){
        this.description = description;
        this.deadline = deadline;
        this.addPoints = addPoints;
        this.subPoints = subPoints;
    }
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Date deadline;

    @Column(nullable = false)
    private Integer addPoints;

    @Column(nullable = false)
    private Integer subPoints;
}
