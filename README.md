# The final project database

This branch is the part of backend that includes

root<br>
 |<br>
 |--api<br>
 |&nbsp;&nbsp;&nbsp;|---undefined.js<br>
 |--backup ***(database backup folder)***<br>
 |--config<br>
 |&nbsp;&nbsp;&nbsp;|---[variable.js](https://github.com/Akaru1xR1N/clinic-project-db#variablejs "Jump to file detail")<br>
 |--db<br>
 |&nbsp;&nbsp;&nbsp;|---er.dio<br>
 |--log<br>
 |&nbsp;&nbsp;&nbsp;|---"YYYY-MM-DD".log ***(This file generate per day for 1 week otherwise delete)***<br>
 |--documentation.md<br>
 |--server.js<br>



## File detail
##### `variable.js`
```js
 module.exports={
    hostDB: "localhost",
    portDB: 3306,
    userDB: "user",
    passwordDB: "password your db",
    database: "your database name",
    saltDB: "keep all of this info secret"
 }
 ```