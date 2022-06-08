# Tech Stack

> ExpressJS,
> MySql

# Library

> bcryptjs v2.4.3,
> cors v2.8.5,
> dotenv v16.0.1,
> express v4.18.1,
> http-errors v2.0.0,
> joi v17.6.0,
> jsonwebtoken v8.5.1,
> module-alias v2.2.2,
> moment v2.29.3,
> multer v1.4.5,
> mysql2 v2.3.3,
> sequelize v6.20.1

# Setup Local

Clone repository

`git clone https://github.com/rnazarf/express-rest-api.git`

Install node package

`npm install`

rename `.env.example` menjadi `.env`. dan atur sesuai lokal environment milik anda

kemudian jalankan perintah berikut ini untuk create database

`npx sequelize-cli db:create`

jalankan perintah berikut ini untuk create table

`npm run db:migrate`

jalankan perintah berikut ini untuk menjalankan seeder

`npm run db:seed`

jalankan perintah berikut ini untuk melakukan migrasi ulang

`npm run db:reset`

jalankan perintah berikut ini untuk menjalankan server

`npm run dev` / `npm run prod`

# Setup Deployment to Heroku

Download dan install Heroku CLI.

Login Heroku.

create new app pada heroku.

setting config variabel pada app yang telah dibuah.

buka cmd jalankan perintah, untuk login pada heroku

`heroku login`

kemudian jalankan perintah untuk deploy ke heroku

`heroku git:remote -a nama_app`

jalankan peintah

`heroku run npm run db:migrate` && `heroku run npm run db:seed`

Hasil Deployment https://rolling-rest-api.herokuapp.com/
