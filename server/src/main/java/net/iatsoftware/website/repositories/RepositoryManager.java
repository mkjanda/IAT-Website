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
import net.iatsoftware.website.entities.CorsOrigin;
import net.iatsoftware.website.entities.IAT;
import net.iatsoftware.website.entities.PartiallyEncryptedRSAKey;
import net.iatsoftware.website.entities.User;
import net.iatsoftware.website.pojos.ProductKey;

public interface RepositoryManager {
    ProductKey getNewProductKey();
    void addClient(Client c);
    Client getClient(long id);
    Client findClientByEmail(String email);
    User findUserByEmail(String email);
    Client findClientByOrganizationId(String id);
    boolean productKeyExists(String productKey);
    Client getClientByProductKey(String productKey);
    boolean isTestRegisteredToClient(Client c, String testName);
    IAT getTest(Client c, String testName);
    PartiallyEncryptedRSAKey getEncryptionKey(IAT test);
    boolean isOauthIdTaken(String id);
    void update(IAT test);
    void update(Client c);
    IAT getTestByOauthClientId(String id);
    boolean isTokenInUse(long clientId, String testName, byte[] tokenVal);
    void setCorsOrigin(CorsOrigin co);
}
