# Issue Tracker

**This project is a learning project.**

Currently, this api is simply a basic CRUD application with 2 tables.  
I intend to develop this project as a learning experience.

## Dependencies

* You need [docker](https://www.docker.com/) and [docker-compose](https://github.com/docker/compose) installed to run this project.  

## Installing & Executing

* First, download it and enter the project folder:  

```
git clone https://github.com/igordreher/issue-tracker.git
cd issue-tracker
```

* Now, inside the root folder of the app:  

```
docker-compose up -d
```

Now the server should be up and running inside a docker container

* To end the application, run:
  
```
docker-compose down
```  

### API

The endpoint are located in:  
* http://localhost:3000/api/users
* http://localhost:3000/api/issues

The API provides CRUD operations (POST, GET, PATH and DELETE) in each table.
