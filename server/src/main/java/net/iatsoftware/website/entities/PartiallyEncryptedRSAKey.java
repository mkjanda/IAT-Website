/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.iatsoftware.website.entities;

/**
 *
 * @author michael
 */

import net.iatsoftware.website.generated.KeyType;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.RSAPrivateKeySpec;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.util.Random;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.CipherOutputStream;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.FetchType;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;

@XmlRootElement(name = "PartiallyEncryptedRSAKey")
@XmlAccessorType(XmlAccessType.NONE)
@Entity
@Table(name = "test_encryption_keys", indexes = { @Index(name = "encryption_keys_test_id", columnList = "TestID") })
public class PartiallyEncryptedRSAKey implements java.io.Serializable {
    private static final long serialVersionUID = 1;
    private static final Random random = new Random();
    private static final Logger logger = LogManager.getLogger();
    private static final byte[] privKeyDesIv = new byte[] { (byte) 0xFA, (byte) 0x64, (byte) 0x92, (byte) 0x21, (byte) 0x4A, (byte) 0x74, (byte) 0x41,
            (byte) 0xE9 };
    private long id;
    private IAT test;
    private KeyType keyType;
    private byte[] exponentBytes, modulusBytes, keyBytes;
    private String modulus, exponent, encryptedKey;
    private transient Cipher privateKeyCipher = null;

    private byte[] getCipherBytes(String password) throws java.io.UnsupportedEncodingException {
        byte[] productHex = password.getBytes(StandardCharsets.UTF_16LE);
        int[] productNums = new int[12];
        for (int ctr = 0; ctr < 12; ctr++) {
            productNums[ctr] = 0;
        }
        int ndx = 0;

        for (int ctr = 0; ctr < productHex.length; ctr++) {
            productNums[ndx] ^= (productHex[ctr] & 0xFF);
            productNums[11 - ndx] ^= (int) (productHex[ctr] << 8) & 0xFF00;
            ndx++;
            if (ndx >= 12) {
                ndx = 0;
            }
        }
        long[] cipherNums = new long[14];
        cipherNums[0] = productNums[6] * productNums[11];
        cipherNums[5] = productNums[Math.abs((int) (cipherNums[0] % 12))] * productNums[2];
        cipherNums[11] = productNums[Math.abs((int) (cipherNums[5] % 12))] * productNums[Math.abs((int) (cipherNums[0] % 12))];
        cipherNums[2] = productNums[Math.abs((int) (cipherNums[5] % 12))] * productNums[Math.abs((int) (cipherNums[5] % 12))];
        cipherNums[13] = productNums[Math.abs((int) (cipherNums[11] % 12))] * productNums[Math.abs((int) (cipherNums[2] % 12))];
        cipherNums[1] = productNums[Math.abs((int) (cipherNums[13] % 12))] * productNums[Math.abs((int) (cipherNums[0] % 12))];
        cipherNums[7] = productNums[Math.abs((int) (cipherNums[1] % 12))] * productNums[Math.abs((int) (cipherNums[11] % 12))];
        cipherNums[3] = productNums[Math.abs((int) (cipherNums[7] % 12))] * productNums[Math.abs((int) (cipherNums[5] % 12))];
        cipherNums[9] = productNums[Math.abs((int) (cipherNums[2] % 12))] * productNums[Math.abs((int) (cipherNums[2] % 12))];
        cipherNums[4] = productNums[Math.abs((int) (cipherNums[13] % 12))] * productNums[Math.abs((int) (cipherNums[1] % 12))];
        cipherNums[6] = productNums[Math.abs((int) (cipherNums[5] % 12))] * productNums[Math.abs((int) (cipherNums[2] % 12))];
        cipherNums[8] = productNums[Math.abs((int) (cipherNums[6] % 12))] * productNums[Math.abs((int) (cipherNums[4] % 12))];
        cipherNums[10] = productNums[Math.abs((int) (cipherNums[3] % 12))] * productNums[Math.abs((int) (cipherNums[9] % 12))];
        cipherNums[12] = productNums[Math.abs((int) (cipherNums[10] % 12))] * productNums[Math.abs((int) (cipherNums[13] % 12))];

        byte[] cipher = new byte[8];
        for (int ctr = 0; ctr < 8; ctr++) {
            cipher[ctr] = 0;
        }
        for (int ctr = 0; ctr < 7; ctr++) {
            long val = (cipherNums[ctr] << 32) | cipherNums[7 + ctr];
            cipher[0] ^= (byte) (0xFF & (val >> 56));
            cipher[1] ^= (byte) (0xFF & (val >> 48));
            cipher[2] ^= (byte) (0xFF & (val >> 40));
            cipher[3] ^= (byte) (0xFF & (val >> 32));
            cipher[4] ^= (byte) (0xFF & (val >> 24));
            cipher[5] ^= (byte) (0xFF & (val >> 16));
            cipher[6] ^= (byte) (0xFF & (val >> 8));
            cipher[7] ^= (byte) (0xFF & (val));
        }
        return cipher;
    }

    private long readInt(ByteArrayInputStream bIn) throws java.io.IOException {
        byte[] valBytes = new byte[4];
        bIn.read(valBytes);
        byte[] numBytes = new byte[5];
        numBytes[0] = 0;
        numBytes[1] = valBytes[3];
        numBytes[2] = valBytes[2];
        numBytes[3] = valBytes[1];
        numBytes[4] = valBytes[0];
        BigInteger bi = new BigInteger(numBytes);
        return bi.longValue();
    }

    public void decryptPrivateKey(String password) throws java.io.UnsupportedEncodingException, java.security.NoSuchAlgorithmException,
            javax.crypto.NoSuchPaddingException, java.security.InvalidAlgorithmParameterException, java.security.InvalidKeyException,
            java.security.spec.InvalidKeySpecException, java.io.IOException {
        byte[] privKeyDesCipherBytes = getCipherBytes(password);
        SecretKeyFactory desKeyFactory = SecretKeyFactory.getInstance("DES");
        Cipher privKeyDesCipher = Cipher.getInstance("DES/CBC/ISO10126PADDING");
        DESKeySpec desKeySpec = new DESKeySpec(privKeyDesCipherBytes);
        SecretKey desKey = desKeyFactory.generateSecret(desKeySpec);
        privKeyDesCipher.init(Cipher.DECRYPT_MODE, desKey, new IvParameterSpec(privKeyDesIv));
        ByteArrayOutputStream bOutStream = new ByteArrayOutputStream();
        try (CipherOutputStream rsaKeyOut = new CipherOutputStream(bOutStream, privKeyDesCipher)) {
            rsaKeyOut.write(this.getEncryptedKeyBytes());
            rsaKeyOut.close();
            byte[] decryptedKey = bOutStream.toByteArray();
            ByteArrayInputStream rsaKeyIn = new ByteArrayInputStream(decryptedKey);
            int len = (int) readInt(rsaKeyIn);
            if (len > 4096)
                throw new java.security.InvalidKeyException();
            byte[] privKeyModulus = new byte[len];
            int nBytesRead = 0;
            while (nBytesRead < len) {
                nBytesRead += rsaKeyIn.read(privKeyModulus, nBytesRead, len - nBytesRead);
            }
            len = (int) readInt(rsaKeyIn);
            nBytesRead = 0;
            while (nBytesRead < len) {
                nBytesRead += rsaKeyIn.skip((long)(len - nBytesRead));
            }
            len = (int) readInt(rsaKeyIn);
            if (len > 4096)
                throw new java.security.InvalidKeyException();
            byte[] privKeyExp = new byte[len];
            nBytesRead = 0;
            while (nBytesRead < len) {
                nBytesRead += rsaKeyIn.read(privKeyExp, nBytesRead, len - nBytesRead);
            }

            byte[] zpPrivKeyModulus = new byte[privKeyModulus.length + 1];
            zpPrivKeyModulus[0] = 0;
            System.arraycopy(privKeyModulus, 0, zpPrivKeyModulus, 1, privKeyModulus.length);

            byte[] zpPrivKeyExp = new byte[privKeyExp.length + 1];
            zpPrivKeyExp[0] = 0;
            System.arraycopy(privKeyExp, 0, zpPrivKeyExp, 1, privKeyExp.length);

            RSAPrivateKeySpec rsaKeySpec = new RSAPrivateKeySpec(new BigInteger(zpPrivKeyModulus), new BigInteger(zpPrivKeyExp));
            KeyFactory rsaKeyFact = KeyFactory.getInstance("RSA");
            PrivateKey rsaPrivateKey = rsaKeyFact.generatePrivate(rsaKeySpec);
            this.privateKeyCipher = Cipher.getInstance("RSA");
            this.privateKeyCipher.init(Cipher.DECRYPT_MODE, rsaPrivateKey);
        }
    }

    public boolean testPassword(String password) {
        try {
            if (this.privateKeyCipher == null) {
                decryptPrivateKey(password);
            }
            byte[] testData = new byte[32];
            random.nextBytes(testData);
            RSAPublicKeySpec pubKeySpec = new RSAPublicKeySpec(new BigInteger(this.getModulusBytes()), new BigInteger(this.getExponentBytes()));
            KeyFactory rsaKeyFact = KeyFactory.getInstance("RSA");
            PublicKey pubKey = rsaKeyFact.generatePublic(pubKeySpec);
            Cipher encCipher = Cipher.getInstance("RSA");
            encCipher.init(Cipher.ENCRYPT_MODE, pubKey);
            byte[] encTestData = encCipher.doFinal(testData);
            byte[] decryptedTestData = this.privateKeyCipher.doFinal(encTestData);
            for (int ctr = 0; ctr < testData.length; ctr++) {
                if (testData[ctr] != decryptedTestData[ctr]) {
                    return false;
                }
            }
            return true;
        } catch (Exception ex) {
            logger.error("Error testing password", ex);
            return false;
        }
    }

    public Cipher getPrivateKey(String password) {
        if ((this.privateKeyCipher == null) && !testPassword(password))
            return null;
        return this.privateKeyCipher;
    }

    public PartiallyEncryptedRSAKey() {
        keyType = KeyType.NONE;
    }

    public static PartiallyEncryptedRSAKey createNullKey() {
        PartiallyEncryptedRSAKey key = new PartiallyEncryptedRSAKey();
        key.exponent = "NULL";
        key.modulus = "NULL";
        key.encryptedKey = "NULL";
        return key;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "KeyID")
    public long getId() {
        return this.id;
    }

    public void setId(long val) {
        this.id = val;
    }

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "TestID")
    public IAT getTest() {
        return this.test;
    }

    public void setTest(IAT val) {
        this.test = val;
    }

    @Enumerated(EnumType.STRING)
    @Basic
    @Column(name = "keytype")
    public KeyType getKeyType() {
        return this.keyType;
    }

    public void setKeyType(KeyType val) {
        this.keyType = val;
    }

    @Basic
    @Column(name = "modulus")
    public byte[] getModulusBytes() {
        if (modulusBytes == null) {
            Base64.Decoder decoder = Base64.getDecoder();
            byte[] modBytes = decoder.decode(this.modulus);
            this.modulusBytes = new byte[modBytes.length + 1];
            this.modulusBytes[0] = 0;
            System.arraycopy(modBytes, 0, this.modulusBytes, 1, modBytes.length);
        }
        return modulusBytes;
    }

    public void setModulusBytes(byte[] val) {
        modulusBytes = val;
    }

    @Basic
    @Column(name = "exponent")
    public byte[] getExponentBytes() {
        if (this.exponentBytes == null) {
            Base64.Decoder decoder = Base64.getDecoder();
            byte[] expBytes = decoder.decode(this.exponent);
            this.exponentBytes = new byte[expBytes.length + 1];
            this.exponentBytes[0] = 0;
            System.arraycopy(expBytes, 0, this.exponentBytes, 1, expBytes.length);
        }
        return this.exponentBytes;
    }

    public void setExponentBytes(byte[] val) {
        this.exponentBytes = val;
    }

    @Basic
    @Column(name = "encrypted_key")
    public byte[] getEncryptedKeyBytes() {
        if (this.keyBytes == null) {
            Base64.Decoder decoder = Base64.getDecoder();
            this.keyBytes = decoder.decode(this.encryptedKey);
        }
        return this.keyBytes;
    }

    public void setEncryptedKeyBytes(byte[] val) {
        this.keyBytes = val;
    }
}
