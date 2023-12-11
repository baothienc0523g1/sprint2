package com.flower_store.repository;

import com.flower_store.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ISecurityRepository extends JpaRepository<User, Integer> {

    /**
     * method findByUsername
     *
     * @param name
     * @return Optional<User>
     * @author Bao Thien
     * @since 04-12-2023
     */
    @Query(value = " select * from users where username like :name and is_deleted = 0 ", nativeQuery = true)
    Optional<User> findByUserName(@Param("name") String name);
}
