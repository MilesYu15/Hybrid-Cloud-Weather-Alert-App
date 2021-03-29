# webapp
## Team Members  
Weisimin Peng 001057546  
Jiachen Yu 001050114    

<!-- Usage -->
## Usage
Pull image from the Docker hub
```sh
docker pull jiachenyuu/webapp:c3efc0e728fdb90eaa8d5de5bf6a4438289db8e0
```
Run docker with database information
```sh
docker run --network="host" \
-e DBhostname='127.0.0.1:3000' \
-e  DBusername='webapp_connection' \
-e  DBpassword='password' \
-e  DBname='csye7125' \
-p 3000:3000 \
webapp:env
```