/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.repositories;

/**
 *
 * @author michael
 */
import net.iatsoftware.website.entities.User;

import org.springframework.stereotype.Repository;

import java.util.List;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Predicate;

@Repository
public class DefaultUserRepository extends GenericJpaRepository<Long, User> implements UserRepository {

    @Override
    public User findUserByEmail(String email) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<User> query = cb.createQuery(User.class);
        Root<User> root = query.from(User.class);
        Predicate pred = cb.equal(root.get("email"), email.toLowerCase());
        List<User> users = this.entityManager.createQuery(query.where(pred)).getResultList();
        if (users.size() == 0) {
            return null;
        }
        return users.get(0);
    }
}
