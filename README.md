# dear-sns
![npm](https://img.shields.io/badge/npm-v5.6.0-blue.svg)

100% inspired by Twitter, fundamental SNS features developed by Next.js

[Demo](http://dear-sns.club)  

*****
## At a glance
![structure](./images/structure.png)

### Why divided into front-end / back-end 'server' ? 🤷🏻‍♀️🤷🏼‍♂️

Because the rolls are different.🍴  
Front is to transmit mainly HTML/CSS and JS files.  
On the other hand, Back is to store and handle data from Front accordingly.  

## Getting started

### DB configuration

Before we start, please check [Sequelize's documentation](http://docs.sequelizejs.com/manual/migrations.html)   

As mentioned in the document, edit `config/config.json` file as yours       
it should look like down below:

```sh
{
  "development": {
    "username": "Your DB username",
    "password": "Your DB password",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
                .
                .
                .
}

```

### ERD
![ERD](./images/erd.png)

### Association
A user can make many posts and comments => `hasMany`   
Little tricky thing here is generally a hashtag can have many posts. Let's imagine #love on Instagram
likewise, a post so in this case, we set both like below so      
`db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' };`   
`db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });`   
You can also look up this [Sequelize's documentation](http://docs.sequelizejs.com/class/lib/associations/base.js~Association.html)










