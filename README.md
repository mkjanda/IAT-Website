# iatsoftware-website
<p>This is the material that can be used to build the https://iatsoftware.net, which was built to both publicize and contain documentation for IAT Design,  into a single .jar file.</p>

<description>Getting it running</description>
<ol>
  <li><a href="#building">Building It</a></li>
  <li><a href="#database">Setting up the database</a></li>
  <li><a href="#nginx">Setting up nginx</a></li>
  <li><a href="#setup">Application Setup</a></li>
</ol>


![2022-02-23 (4)](https://user-images.githubusercontent.com/35156960/155311931-5eecb9f4-f14b-4a9d-9d8a-2b4fd844300b.png)

<p>Documentation remains shy of completion but even some of the more obscure features are covered.</p>

![2022-02-23 (2)](https://user-images.githubusercontent.com/35156960/155311998-68d76e21-8f63-4ee5-90fe-9d1601e371ce.png)

<h2 id="#building">Building It</h2>

<p>Just use Apache Maven. Make sure it's on your path and type <b>mvn install</b> in the root directory of the project. You'll find your executable in <b>server/target</b> after the build is complete</p>


<h2 id="#database">Setting up the database</h2>

<p>The file <a href="https://github.com/mkjanda/IAT-Website/blob/master/iat.sql">iat.sql</a> must be executed in your database to enable interactive content. It must be run as root because it creates a user and grants privileges to that user. The following file should also be examined: <a href="https://github.com/mkjanda/IAT-Website/blob/master/server/src/main/resources/environment.properties">environment.properties</a>
  
``` properties
environment.downloadControllerPath=/DownloadSoftware
environment.clientSoftwareFilePath=/var/www/iat/ClientSoftware/IATDesign.zip
environment.clientSoftwareV10FilePath=/var/www/iat/ClientSoftware/IATDesignV10.zip
server.port=8082
```
  
<h2 id="#nginx">Setting up Nginx</h2>

Very simple. The following configuration will suffice.

``` nginx
server {
  	listen 80;
	server_name iatsoftware.net www.iatsoftware.net localhost 127.0.0.1;
	root /var/www/iat;
	client_max_body_size 50M;

	access_log /var/log/nginx/iatsoftware.net-access.log;
	error_log /var/log/nginx/iatsoftware.net-error.log;

  	location / {
		proxy_redirect http://127.0.0.1:8082 $scheme://$host;
		proxy_set_header Host $host;
		proxy_pass http://127.0.0.1:8082;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}
```

This presumes you chose port 8082 in the above environment.properties file.
