package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface CategoryRepository extends JpaRepository<Category, Long>{

    @Query(value = "SELECT * FROM category JOIN film on category.id = film.category_id where film.id = :idFilm", nativeQuery = true)
    Page<Category> categoryFilm(Long idFilm, Pageable pageable);
}
