## Epimetheus Introduction

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2540205769b54d6ab25426c2158a2f70)](https://app.codacy.com/gh/salabs/Epimetheus?utm_source=github.com&utm_medium=referral&utm_content=salabs/Epimetheus&utm_campaign=Badge_Grade_Dashboard)

Epimetheus offers a dashboard/UI to visualize data from [TestArchiver](https://github.com/salabs/TestArchiver).

## Installation

### Requirements

        1. PostgreSQL database with archived result data
        2. `Python v3+`
        3. `Node.js v10+`

### Database

Currently the only supported database engine is PostgreSQL. It can be local or cloud version.

### Backend

If you have multiple python installations on your machine, remember to use the 'python3' postfix,
also with pip you might need to use 'pip3' to make sure the requirements get installed with the right python.

```
cd backend-server
pip install -r requirements.txt
python .\server.py --database dbname --host dbhost --user dbuser --pw dbpasswd --port 5000
```

Detailed information in [backend readme](backend_server/README.md).

### Frontend

```
cd frontend
npm install
npm run start
```

Detailed information in [frontend readme](frontend/README.md).

## Usage

Once you have both frontend and backend running, you can open your browser to [http://localhost:3000](http://localhost:3000) and check the front user interface.

Note that there should be some data saved in the database before user interface will show something. For pushing data into database, consult [TestArchiver documentation](https://github.com/salabs/TestArchiver).

Running project with [Docker](/README-docker.md)

## Browser Support

Supported browsers are "all modern browsers". This means IE and some mobile browsers are not supported.

## Contributing

[Contributing guide](CONTRIBUTING.md)

## Code of Conduct

[Code of Conduct](CODE_OF_CONDUCT.md)

## License

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)

## Release Notes

-   1.0.1 (21.10.2020)

    -   Fixes a bug which prevented the frontend container from starting when using docker-compose
    -   Changes the default port of Nginx in Dockerfile-prod container from 80 to 8080. Services in Docker containers are now running as non root user.
    -   Layout fixes
    -   New default font
    -   Queryparams are now properly shown when switching between Overview and History layouts
    -   Queryparams are properly removed from state if not needed

-   1.0.0 (22.9.2020)
    -   Completely updated layout and colour palette
    -   Updated Breadcrumb nav
    -   Overview -page for Series and Builds with graphical visualisation
    -   Offset buttons to toggle between different builds in Series -view
    -   Added metadata to Build- and Suite -view
    -   Backend support for latest TestArchiver version
    -   Slight data loading optimisation when toggling between different Series -views
    -   Translation support
