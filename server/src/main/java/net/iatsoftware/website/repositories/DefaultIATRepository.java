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

import net.iatsoftware.website.entities.Client;
import net.iatsoftware.website.entities.IAT;

import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@Repository
public class DefaultIATRepository extends GenericJpaRepository<Long, IAT> implements IATRepository {
    
    @Override
    public boolean isTestRegisteredToClient(Client c, String testName) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<IAT> root = query.from(IAT.class);
        Predicate pred = cb.and(cb.equal(root.get("testName"), testName), cb.equal(root.get("client"), c));
        return this.entityManager.createQuery(query.select(cb.count(root)).where(pred)).getSingleResult() > 0L;
    }
    
    @Override
    public IAT getTest(Client c, String testName) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<IAT> query = cb.createQuery(IAT.class);
        Root<IAT> root = query.from(IAT.class);
        Predicate pred = cb.and(cb.equal(root.get("client"), c), cb.equal(root.get("testName"), testName));
        try {
            return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
        }
        catch (javax.persistence.NoResultException | javax.persistence.NonUniqueResultException ex) {
            return null;
        }
    }
    
    @Override
    public boolean isOauthIdTaken(String id) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<IAT> root = query.from(IAT.class);
        Predicate pred = cb.equal(root.get("oauth_client_id"), id);
        return this.entityManager.createQuery(query.select(cb.count(root)).where(pred)).getSingleResult() > 0L;
    }

    @Override
    public IAT getByOauthClientId(String id) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<IAT> query = cb.createQuery(IAT.class);
        Root<IAT> root = query.from(IAT.class);
        Predicate pred = cb.equal(root.get("oauthClientId"), id);
        return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
    }

}
