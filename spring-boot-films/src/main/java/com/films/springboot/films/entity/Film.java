package com.films.springboot.films.entity;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="film")
@Data
public class Film {
}
