# IAT Software Website
<p>This is the material that can be used to build the website at https://iatsoftware.net, a site constructed to both publicize and provide documentation for IAT Design</p>

### Getting It Running
<ol>
	<li><a href="#before-building">Before You Build</a></li>
  <li><a href="#building">Building It</a></li>
  <li><a href="#database">Setting up the database</a></li>
  <li><a href="#nginx">Setting up nginx</a></li>
  <li><a href="#screenshots">What it Looks Like</a></li>
</ol>



<h2 id="before-building">Before You Build</h2>

<p>Before building take a look at the following file <a href="server/src/mail/resources/environment.properties">environment.properties</a> shown below.</p>
	
	
``` properties
# The port the site will run on.
server.port=8082

# The database connection string
mysql.datasource.url=jdbc:mysql://localhost:3306/iatserver_db

# Put your database name, user, and password here. These values will do if you 
# imported the database from github
mysql.datasource.user=iat
mysql.datasource.password=vze4bcmipjiQfOwm
mysql.datasource.database-name=iatserver_db

#best to leave unmodified
mysql.datasource.server-timezone=UTC
mysql.datasource.character-set=utf8
environment.downloadControllerPath=/DownloadSoftware

# The path, not URI, of the IAT Design application
environment.clientSoftwareFilePath=/var/www/iat/ClientSoftware/IATDesign.zip

# Settings for automated emails. Substitute your own values for mail.username 
# and mail.password. This is the user that sends mail. mail.user-personal and 
# mail.user-address are the name and sender that will appear as the From field.
# sysinfo is the system user that would receive error reports if you correctly
# modify the Resources.resx file. Nothing else should be touched
mail.smtp.auth=true
mail.smtp.starttls.enable=false
mail.smtp.quitwait=false
mail.host=127.0.0.1
mail.port=25
mail.protocol=smtp
#substitute your value here
mail.username=iatsoftware-website
#substitute your value here
mail.password=abc
mail.error-report-recipient.username=sysinfo
mail.user-personal.errorreport=Error Reporter
mail.user-personal=IAT Software
mail.user-address=iatsoftware@iatsoftware.net
mail.image.logo-url=https://iatsoftware/images/logo.png
mail.image.logo-classpath-location=classpath:email/images/logo.png
mail.image.header-url=https://iatsoftware.net/images/header.png
mail.image.header-classpath-location=classpath:email/images/header.png```
```

<p>You don't have to change any of it provided you import <b>iat.sql</b> as described below and your copy of MySQL or Maria runs on port 3306, which is the default.</p>

<h2 id="building">Building It</h2>
Building should be simple. This is the link to download Maven. the only build tool required: https://maven.apache.org/download.cgi  NodeJS will be installed on your machine during the build, at the user level. Of course, you need a copy of the Java SDK. Microsoft began shipping Java with Windows 10. Installation on Linux varies by distribution.</p>
<p>You'll need to put mavenn on your path. It will appear there automatically if you used a Linux tool such as <b>apt</b> to install it. Otherwise, Google is your friend. Navigate to the home directory of the IAT project in a command prompt and type "mvn install" and it should produce a .jar file in theh <b>site/target</b> folder. Double click on it to run it. You'll need to make it executabe on Linux or use <b>java -jar iat-website-1.0.2.jar</b></p>


<h2 id="database">Setting up the database</h2>

<p>The file <a href="https://github.com/mkjanda/IAT-Website/blob/master/iat.sql">iat.sql</a> must be imported into your database. I reccomend using MySQL or Maria because that's all I've tested with. The command <b>source iat.sql</b> should be sufficient if you started MySQL from within the root directory of the project. Otherwise, <b>mysql [ -u root -p ] < iat.sql</b> be executed in your database to enable interactive content. It must be run as root because it creates a user and grants privileges to that user. Any deviations from <b>iat.sql</b> should be reflected by modifications in <b>environment.properties</b>.</a>
  
  
<h2 id="nginx">Setting up Nginx (Optional)</h2>

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

<h2 id="screenshots">What It Looks Like</h2>

![website](https://user-images.githubusercontent.com/35156960/156902902-5e430709-eccb-4927-b9cf-48845d322633.gif)


