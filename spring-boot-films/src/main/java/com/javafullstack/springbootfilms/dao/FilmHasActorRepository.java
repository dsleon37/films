package com.javafullstack.springbootfilms.dao;
import com.javafullstack.springbootfilms.entity.FilmHasActor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface FilmHasActorRepository extends JpaRepository<FilmHasActor, Long>{
    @Query(value = "SELECT * FROM film_has_actor WHERE film_id = :idFilm AND actor_id = :idActor ", nativeQuery = true)
    FilmHasActor filmHasActorId(Long idFilm, Long idActor);

}
