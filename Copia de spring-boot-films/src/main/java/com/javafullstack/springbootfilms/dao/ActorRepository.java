package com.javafullstack.springbootfilms.dao;
import com.javafullstack.springbootfilms.entity.Actor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface ActorRepository extends JpaRepository<Actor, Long>{

}
