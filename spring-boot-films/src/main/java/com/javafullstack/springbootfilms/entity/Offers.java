package com.javafullstack.springbootfilms.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.Date;

@Entity
@Table(name="offers")
@Getter
@Setter
public class Offers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "addPoints")
    private Integer addPoints;

    @Column(name = "subPoints")
    private String subPoints;

}
