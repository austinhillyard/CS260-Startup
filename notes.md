# **NOTES**

### *[README.md](/README.md)*

## Git
When working with git, your bread and butter is:
```
git pull
git add .
git commit
git push
```
## Web Servers
* Learned to assign an elastic ip address to server. Permanent ip is 18.205.101.148
* To remote in the server:
  ```
  ssh -i [key pair file] ubuntu@[ip address]
  ```
* To change permission on the file
  ```
  chmod 600 [file]
  ```
  * 600 is rw, 400 is r.

## DNS Servers
* Broken up into a root domain.
  ```
              -----root----
  [subdomain.]secondary.top
  ```
* DNS servers associate the text name with an IP address
* Two types of DNS
  * addres (A), maps IP onto domain name
  * canonical name (CNAME), maps one domain name onto another one.

### My Domain: gametracker.click

## Caddy
* Handles rotation of web certificates. Supports HTTPS
* Acts as a gateway and will redirect subdomain requests properly
* Serves up all static HTML, CSS< and JavaScript files
* HTML files:
    * Directory of files that Caddy servers up when request are made to the root or your web server.
 
## HTTPS
* Secure version of HTTP, data is encrypted and protected by TLS.
* Let's Encrypt is a non profit IETF ACME protocol to encrypt requests
* Update the caddy file to replace port :80 with your domain name, and where ever it says "yourdomain"
* This will make it defaul to port 443 which will use caddy as a gateway and use HTTPS
