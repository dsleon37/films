package com.javafullstack.springbootfilms.dao;

import com.javafullstack.springbootfilms.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "userRole", path = "user-role")
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
}
