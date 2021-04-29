package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Offers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "offers", path = "offers")
public interface OffersRepository extends JpaRepository<Offers, Long> {

}