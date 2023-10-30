/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.repositories;

/**
 *
 * @author Michael Janda
 */


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.CriteriaDelete;
import java.io.Serializable;

public abstract class GenericJpaRepository<I extends Serializable, E extends Serializable> extends GenericBaseRepository<I, E> {
    @PersistenceContext EntityManager entityManager;
    
    @Override
    public Iterable<E> getAll()
    {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<E> q = cb.createQuery(this.entityClass);
        return entityManager.createQuery(q.select(q.from(this.entityClass))).getResultList();
    }
    
    @Override
    public E get(I id)
    {
        return this.entityManager.find(this.entityClass, id);
    }
    
    @Override
    public void add(E e)
    {
        this.entityManager.persist(e);
    }
    
    @Override
    public E update(E entity)
    {
        return this.entityManager.merge(entity);
    }
    
    @Override
    public void delete(E entity)
    {
        this.entityManager.remove(entity);
    }
    
    @Override
    public void deleteById(I id)
    {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaDelete<E> query = cb.createCriteriaDelete(this.entityClass);
        this.entityManager.createQuery(query.where(cb.equal(query.from(this.entityClass).get("id"), id))).executeUpdate();
    }
}
