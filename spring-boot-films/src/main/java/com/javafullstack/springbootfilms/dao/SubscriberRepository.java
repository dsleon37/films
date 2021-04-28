package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.Cinema;
import com.javafullstack.springbootfilms.entity.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "Subscriber", path = "subscriber")
public interface SubscriberRepository  extends JpaRepository<Subscriber, Long> {
}
