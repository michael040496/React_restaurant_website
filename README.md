# Game
A simple game DB

## Calls

* GET
  * /user
  * /user/{ID}
  * /character
  * /character/{ID}
  * /class
  * /class/{className}
  
* POST
  * /user
  ```JSON
  {
	"username": "username",
	"password": "amazingpasswordxxx"
  }
  ```
  * /character
  ```JSON
  {
	"name": "Faceroll",
	"level": "24",
	"userID": 2,
	"classID": "warrior"
  }
  ```
  
* Possible classID(name)
  * mage
  * hunter
  * paladin
  * warrior
  * warlock
  * druid
    
## Structure of the database    
![gamersql](/gamersql.png)
