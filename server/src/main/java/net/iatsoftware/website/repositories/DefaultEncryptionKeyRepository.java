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
import net.iatsoftware.website.entities.PartiallyEncryptedRSAKey;
import net.iatsoftware.website.generated.KeyType;

import org.springframework.stereotype.Repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

@Repository
public class DefaultEncryptionKeyRepository extends GenericJpaRepository<Long, PartiallyEncryptedRSAKey> implements EncryptionKeyRepository {
    
    @Override
    public PartiallyEncryptedRSAKey getEncryptionKey(IAT test) {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<PartiallyEncryptedRSAKey> query = cb.createQuery(PartiallyEncryptedRSAKey.class);
        Root<PartiallyEncryptedRSAKey> root = query.from(PartiallyEncryptedRSAKey.class);
        Predicate pred = cb.and(cb.equal(root.get("test"), test), cb.equal(root.get("keyType"), KeyType.ADMIN));
        try {
            return this.entityManager.createQuery(query.select(root).where(pred)).getSingleResult();
        }
        catch (jakarta.persistence.NoResultException | jakarta.persistence.NonUniqueResultException ex) {
            return null;
        }
    }
}
