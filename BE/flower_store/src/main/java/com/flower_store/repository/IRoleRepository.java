package com.flower_store.repository;

import com.flower_store.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role, Integer> {

    Role findByName(String name);
}
