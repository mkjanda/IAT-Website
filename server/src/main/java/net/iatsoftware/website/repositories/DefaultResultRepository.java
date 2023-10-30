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

import net.iatsoftware.website.entities.IAT;
import net.iatsoftware.website.entities.ResultSet;

import org.springframework.stereotype.Repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

@Repository
public class DefaultResultRepository extends GenericJpaRepository<Long, ResultSet> implements ResultRepository {
    
    @Override
    public boolean isTokenTaken(IAT test, byte[] tokenVal) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<ResultSet> root = query.from(ResultSet.class);
        Predicate pred = cb.equal(root.get("testeeToken"), tokenVal);
        return this.entityManager.createQuery(query.select(cb.count(pred))).getFirstResult() > 0;
    }
}
