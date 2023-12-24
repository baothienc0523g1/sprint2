package com.flower_store.repository;

import com.flower_store.dto.UserInfoDto;
import com.flower_store.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByUsername(String username);

    /**
     * method get user information by username
     * @param userName
     * @since 22-12-2023
     * @author Bao Thien*/
    @Query(value = " select u.name as name, " +
            " u.username as username, " +
            " u.phone_number as phoneNumber, " +
            " u.birthday as birthday, " +
            " u.email as email, " +
            " u.address as address, " +
            " sum(od.total_cost) as totalPay " +
            " from users as u " +
            " left join orders as o " +
            " on u.id = o.user_id " +
            " left join order_detail as od " +
            " on o.id = od.order_id " +
            " where u.is_deleted = 0 " +
            " and o.is_deleted = 0 ", nativeQuery = true)
    Optional<UserInfoDto> getInfoByUsername(@Param("userName") String userName);
}
