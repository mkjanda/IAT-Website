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

public interface IATRepository extends GenericRepository<Long, IAT> {
    boolean isTestRegisteredToClient(Client c, String testName);
    IAT getTest(Client c, String testName);
    boolean isOauthIdTaken(String id);
    IAT getByOauthClientId(String id);
}
