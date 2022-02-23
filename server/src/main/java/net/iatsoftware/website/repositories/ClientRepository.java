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

public interface ClientRepository extends GenericRepository<Long, Client> {
    ProductKey getNewProductKey();
    Client findClientByEmail(String email);
    Client findClientByOrganizationId(String organizationId);
    boolean productKeyExists(String productKey);
    Client getClientByProductKey(String productKey);
}
