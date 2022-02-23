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
import net.iatsoftware.website.pojos.ProductKey;

import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@Repository
public class DefaultClientRepository extends GenericJpaRepository<Long, Client> implements ClientRepository {

    @Override
    public ProductKey getNewProductKey() {
        ProductKey key = new ProductKey();
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        boolean bKeyExists;
        do {
            String code = key.generateProductKey();
            CriteriaQuery<Long> query = cb.createQuery(Long.class);
            Root<Client> root = query.from(Client.class);
            Predicate pred = cb.equal(root.get("productKey"), code);
            bKeyExists = this.entityManager.createQuery(query.select(cb.count(root)).where(pred)).getSingleResult() > 0L;
        } while (bKeyExists);
        return key;
    }

    @Override
    public Client findClientByEmail(String email) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Client> query = cb.createQuery(Client.class);
        Root<Client> root = query.from(Client.class);
        Predicate pred = cb.equal(root.get("email"), email.toLowerCase());
        try {
            return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
        } catch (javax.persistence.NoResultException ex) {
            return null;
        }
    }
    
    @Override
    public Client findClientByOrganizationId(String id) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Client> query = cb.createQuery(Client.class);
        Root<Client> root = query.from(Client.class);
        Predicate pred = cb.equal(root.get("organizationId"), id);
        try {
            return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
        } catch (javax.persistence.NoResultException | javax.persistence.NonUniqueResultException ex) {
            return null;
        }
    }
    
    @Override
    public boolean productKeyExists(String productKey) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<Client> root = query.from(Client.class);
        Predicate pred = cb.equal(root.get("productKey"), productKey);
        return this.entityManager.createQuery(query.select(cb.count(root)).where(pred)).getSingleResult() > 0;
    }
    
    @Override
    public Client getClientByProductKey(String productKey) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Client> query = cb.createQuery(Client.class);
        Root<Client> root = query.from(Client.class);
        Predicate pred = cb.equal(root.get("productKey"), productKey);
        try {
            return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
        }
        catch (javax.persistence.NoResultException ex) {
            return null;
        }
    }
}
