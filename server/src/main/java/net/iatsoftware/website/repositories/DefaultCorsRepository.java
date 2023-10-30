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
import net.iatsoftware.website.entities.CorsOrigin;

import org.springframework.stereotype.Repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class DefaultCorsRepository extends GenericJpaRepository<Long, CorsOrigin> implements CorsRepository {

    @Override
    public void setCorsOrigin(CorsOrigin co) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<CorsOrigin> query = cb.createQuery(CorsOrigin.class);
        Root<CorsOrigin> root = query.from(CorsOrigin.class);
        try {
            CorsOrigin fetchedOrigin = entityManager.createQuery(query.select(root).where(cb.equal(root.get("client"), co.getClient()))).getSingleResult();
            fetchedOrigin.setOrigin(co.getOrigin());
            update(fetchedOrigin);
        } catch (jakarta.persistence.NoResultException ex) {
            add(co);
        }
    }
}
