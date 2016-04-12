# csp-reporter-insecure
```
 ***********
 * WARNING *
 ***********

 Do not run this in a production environment.  This version contains
 purposeful security vulnerabilities for demonstration purposes.

 Note: Server is locked down to localhost by default
```

Server to save content security policies reports

[![Licence](https://img.shields.io/badge/Licence-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Usage
### install dependancies
```
npm install
```

### define configuration
 * `DATABASE_HOST` - The database url
 * `DATABASE_USER` - The user name to connect to the database
 * `DATABASE_PASSWORD` - The password to connect to the database
 * `DATABASE_DATABASE_NAME` - The name of the database to connect too


### run server
```
node server
```
