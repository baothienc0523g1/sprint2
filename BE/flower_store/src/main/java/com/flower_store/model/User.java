package com.flower_store.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(columnDefinition = "VARCHAR(50)", nullable = false)
    private String username;

    @Column(columnDefinition = "VARCHAR(255)", nullable = false)
    private String password;

    @Column(columnDefinition = "VARCHAR(50)", nullable = false)
    private String phoneNumber;

    @Column(columnDefinition = "DATE")
    private String birthday;

    @Column(columnDefinition = "VARCHAR(100)")
    private String email;

    @Column(columnDefinition = "LONGTEXT")
    private String address;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;

    private boolean onlineStatus;

    private boolean isDeleted;

    public User(String name, String username, String password,
                String phoneNumber, String birthday,
                String email, String address) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
    }
}
