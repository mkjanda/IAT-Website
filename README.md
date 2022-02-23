# iatsoftware-website
<p>This is the material that can be used to build the https://iatsoftware.net, which was built to both publicize and contain documentation for IAT Design,  into a single .jar file.</p>

<description>Getting it running</description>
<ol>
  <li><a href="#database">Setting up the database</a></li>
  <li><a href="#nginx">Setting up nginx</a></li>
  <li><a href="#setup">Application Setup</a></li>
</ol>


![2022-02-23 (4)](https://user-images.githubusercontent.com/35156960/155311931-5eecb9f4-f14b-4a9d-9d8a-2b4fd844300b.png)

<p>Documentation remains shy of completion but even some of the more obscure features are covered.</p>

![2022-02-23 (2)](https://user-images.githubusercontent.com/35156960/155311998-68d76e21-8f63-4ee5-90fe-9d1601e371ce.png)

<h2 id="#database">Setting up the database</h2>

<p>The file <a href="iat.sql must be executed in your database to enable interactive content. It must be run as root because it creates a user and grants privileges to that user. The following file should also be examined: <a href="https://github.com/mkjanda/IAT-Website/blob/master/server/src/main/resources/environment.properties">environment.properties</a>
  
``` properties
environment.downloadControllerPath=/DownloadSoftware
environment.clientSoftwareFilePath=/var/www/iat/ClientSoftware/IATDesign.zip
environment.clientSoftwareV10FilePath=/var/www/iat/ClientSoftware/IATDesignV10.zip
server.port=8082
```



iatsoftware.net build material 
If you want to set up the iatsoftware.net website on your own machine, import /server/src/main/resources/make-server-database.sql into a MySQL installation. Or modify what you will. It compiles with Maven and is set to run on port 8082, which is modifiable in /server/src/main/resources/application.properties. This is my first time with Git and my current work in progress doesn't compile at the moment.

Oh, the build will install Node on your machine, on a user level. Just a head's up.
