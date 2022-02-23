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

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;

@Repository
public class DefaultRepositoryManager implements RepositoryManager {

    @Inject CorsRepository corsRepository;
    @Inject ClientRepository clientRepository;
    @Inject UserRepository userRepository;
    @Inject IATRepository iatRepository;
    @Inject EncryptionKeyRepository encryptionKeyRepository;
    @Inject ResultRepository resultRepository;

    
    @Override
    @Transactional
    public ProductKey getNewProductKey() {
        return clientRepository.getNewProductKey();
    }
    
    @Override
    @Transactional
    public void addClient(Client c) {
        clientRepository.add(c);
    }
    
    @Override
    @Transactional
    public Client getClient(long id) {
        return clientRepository.get(id);
    }
    
    @Override
    @Transactional
    public Client findClientByEmail(String email) {
        return clientRepository.findClientByEmail(email);
    }

    @Override
    @Transactional
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
    
    @Override
    @Transactional
    public Client findClientByOrganizationId(String id) {
        return clientRepository.findClientByOrganizationId(id);
    }

    @Override
    @Transactional
    public boolean productKeyExists(String productKey) {
        return clientRepository.productKeyExists(productKey);
    }
    
    @Override
    @Transactional
    public Client getClientByProductKey(String productKey) {
        return clientRepository.getClientByProductKey(productKey);
    }
    
    @Override
    @Transactional
    public boolean isTestRegisteredToClient(Client c, String testName) {
        return iatRepository.isTestRegisteredToClient(c, testName);
    }
    
    @Override
    @Transactional
    public IAT getTest(Client c, String testName) {
        return iatRepository.getTest(c, testName);
    }
    
    @Override
    @Transactional
    public PartiallyEncryptedRSAKey getEncryptionKey(IAT test) {
        return encryptionKeyRepository.getEncryptionKey(test);
    }
    
    @Override
    @Transactional
    public boolean isOauthIdTaken(String id) {
        return iatRepository.isOauthIdTaken(id);
    }

    @Override
    @Transactional
    public void update(IAT test) {
        iatRepository.update(test);
    }
    
    @Override
    @Transactional
    public IAT getTestByOauthClientId(String id) {
        return iatRepository.getByOauthClientId(id);
    }
    
    @Override
    @Transactional
    public boolean isTokenInUse(long clientId, String testName, byte[] tokenVal) {
        Client c = clientRepository.get(clientId);
        IAT test = iatRepository.getTest(c, testName);
        return resultRepository.isTokenTaken(test, tokenVal);
    }
    
    @Override
    @Transactional
    public void setCorsOrigin(CorsOrigin co) {
        corsRepository.setCorsOrigin(co);
    }
    
    @Override
    @Transactional
    public void update(Client c) {
        clientRepository.update(c);
    }
}
