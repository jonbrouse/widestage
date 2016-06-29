# widestage

Lightweight Business Intelligence tool for reporting mongodb, postgresql, Mysql, &amp; MS sql data

To see how it works go to www.widestage.com

# Installation

1. Install [nodejs](https://nodejs.org), [npm](https://www.npmjs.com), [bower](http://bower.io).  
2. Clone the repo: `git clone https://github.com/widestage/widestage.git`   
3. In the root of the project issue `npm install && bower install`
4. Install [Mongodb](https://www.mongodb.org) for widestage to store metadata. If you're running Mongodb on a different server, configure the connection in `.server/config/config.js` or set the environment variable `MONGOHOST`
5. Launch the application `node server.js`

## Optional Software
Optionally install [forever](https://www.npmjs.com/package/forever) to ensure widestage runs continuously and/or [nginx](http://nginx.org) to act as a web proxy.

### Using Forvever 

Launch the application with forver: `forever start "your_path_to_widestage/server.js`  
Check if it is running: `forever list`

## Access the Application

Point your browser to `localhost` or the IP/FQDN you are hosting the application on.

### Credentials  

    user name: administrator
    password: widestage

# Using Docker

1. Install [Docker](https://docs.docker.com/engine/installation/) and [Docker-Compose](https://docs.docker.com/compose/install/).
2. From the root of the directory issue `docker-compose build`
3. To run the application issue `docker-compose up -d` or to view the output `docker-compose up`

License GPL 3.0
https://opensource.org/licenses/GPL-3.0
