## Description

It is a small app to help my other LLM app to get data from database.

i have a minimal dataBase that have 3 tables <br>
#### -User[id,user_name,email]<br>
#### -Post[id,user_id,content,timeStamp]<br>
#### -Like [post_id, user_id, timestamp]<br>
<br>
I have another function that return all DTO schemas my app have using swagger
It is inegrated with my other app clone it and run<br>  
https://github.com/mohamedhisham404/data_LlmService

## Project clone
```bash
$ git clone https://github.com/mohamedhisham404/get_data_server
```
## Project setup

```bash
$ npm install
```
## add .env

```bash
DB_USERNAME = ....
DB_PASSWORD = ....
DB_DATABASE = ....
DB_HOST = localhost
DB_PORT = 5432
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

