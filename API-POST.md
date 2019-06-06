**Create Review**
----
  
* **URL**
  
  /restaurants/:id/reviews
  
* **Method:**

  `POST` 
  
*  **URL Params**
  
   **Required:**
 
   `id=[integer]`


* **Data Params**

    `{
      "id": integer,
      "restaurant": integer,
      "diner": integer,
      "text": string,
      "date": date,
      "overall": integer,
      "food": integer,
      "service": integer,
      "ambience": integer,
      "wouldrecommend": boolean
      "tags": string,
      "firstname": string,
      "lastname": string,
      "city": string,
      "totalreviews": integer
      }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id: 12 }`
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Request syntax is incorrect" }`

* **Sample Call:**
  
  `var jsonData = {
      "id": integer,
      "restaurant": integer,
      "diner": integer,
      "text": string,
      "date": date,
      "overall": integer,
      "food": integer,
      "service": integer,
      "ambience": integer,
      "wouldrecommend": boolean
      "tags": string,
      "firstname": string,
      "lastname": string,
      "city": string,
      "totalreviews": integer
      }`

  
  `$.ajax({
    url: "localhost:3010/reviews/1,
    type: "POST",
    dataType: "json",
    data: jsonData,
    contentType: "application/json"
  });` 
