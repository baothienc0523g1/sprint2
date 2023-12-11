package com.flower_store.service.impl;

import com.flower_store.model.User;
import com.flower_store.repository.ISecurityRepository;
import com.flower_store.service.ISecurityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SecurityService implements ISecurityService {

    @Autowired
    ISecurityRepository securityRepository;

    private static final Logger logger = LoggerFactory.getLogger(SecurityService.class);

    /**
     * method add new user
     * @author Bao Thien
     * @since 06-12-2023
     * @param user
     * @return void
     */
    @Override
    @Transactional
    public void addUser(User user) {
        try {
            this.securityRepository.save(user);
        } catch (Exception e) {
            logger.warn("Error while adding user: " + e.getMessage());
        }
    }
}
