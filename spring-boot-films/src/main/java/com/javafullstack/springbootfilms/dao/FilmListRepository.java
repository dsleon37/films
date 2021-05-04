package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Category;
import com.javafullstack.springbootfilms.entity.FilmList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface FilmListRepository extends JpaRepository<FilmList, Long>{
}
