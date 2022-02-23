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

public interface EncryptionKeyRepository extends GenericRepository<Long, PartiallyEncryptedRSAKey> {
    PartiallyEncryptedRSAKey getEncryptionKey(IAT test);
}
