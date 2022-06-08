Saya memilih :

- ExpressJS karena Fast, unopinionated, minimalist web framework for Node.js.
- MySql karena saya terbiasa menggunakannya.

Schema Database :

- User berguna untuk menyimpan data user yang dimana akan digunakan untuk melakukan login.
- gift berguna untuk menyimpan data berupa informasi gift seperti : nama, deskripsi, harga, stok, gambar, createAt, updateAt
- gift_rating berguna untuk menyimpan rating yang diberikan oleh user
- gift_redeem berguna untuk menyimpan gift yang sudah diredeem oleh user

DB Optimasi :

Melakukan indexing pada field yang sering digunakan untuk mencari data,
Hindari penggunakan subquery dan distinct.
Hindari melakukan join ke view table.

Deployment Heroku :

Saya menggunakan heroku saat deployment disini karena gratis, dan proses untuk deploynya mudah.
