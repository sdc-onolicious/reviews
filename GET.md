**Get Methods**
----
  Get summary - Returns one object inside an array with the aggregated scores/ratings
  Get reviews - Returns an array of objects with all the relevant reviews
  Get id - Returns the client page
  
* **URL**
  
  /restaurants/:id/summary	Returns one object inside an array with all the aggregated ratings
  /restaurants/:id/reviews	Returns an array of objects with all the relevant reviews
  /:id	Returns the client page
  
* **Method:**

  `GET` 
  
*  **URL Params**

  /restaurants/:id/summary 
  /restaurants/:id/reviews
  /:id
  

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**
  
  Summary
  * **Code:** 200 <br />
    **Content:** `[
    {
    "location": "West Mafalda",
    "noise": "Quiet",
    "recommendPercent": 39,
    "valueRating": "1.4",
    "averageOverall": "3.9",
    "averageFood": "2.6",
    "averageAmbience": "3.2",
    "averageService": "1.5"
    }
    ]`
  
  Reviews
  * **Code:** 200 <br />
    **Content:** `[{"id":1,"restaurant":5,"text":"Atque enim voluptatem. Sit ut natus et aut atque est cupiditate beatae eveniet.","date":"2018-06-07T07:00:00.000Z","overall":2,"food":2,"service":1,"ambience":3,"wouldrecommend":false,"tags":"","firstname":"Eulah","lastname":"Corwin","city":"Marielleville","avatarcolor":"#df4e96","isvip":false,"totalreviews":1},{"id":8,"restaurant":5,"text":"Voluptas voluptatibus hic. Doloremque sint quia sequi consequuntur animi. Consequatur ipsa sequi. Alias voluptatem eaque neque incidunt pariatur.","date":"2018-11-05T08:00:00.000Z","overall":2,"food":3,"service":3,"ambience":5,"wouldrecommend":false,"tags":"","firstname":"Christ","lastname":"Wilderman","city":"McKenzieland","avatarcolor":"#bb6acd","isvip":false,"totalreviews":8}]`

  ID
  * **Code:** 200 <br />
    **Content:** Client page (index.html)
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Resource doesn't exist" }`

* **Sample Call:**

  curl http://127.0.0.1:3010/1/reviews
