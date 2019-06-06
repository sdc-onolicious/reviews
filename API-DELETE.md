**Delete Review**
----
  
* **URL**
  
  /reviews/:id
  
* **Method:**

  `DELETE` 
  
* **URL Params**
  
   **Required:**
 
   `id=[integer]`

* **Data Params**

    None.

* **Success Response:**
  
  * **Code:** 204 <br />
    
* **Error Response:**

  * **Code:** 304 <br />
    **Content:** `{ error : "Item not found" }`

* **Sample Call:**
  
  `$.ajax({
    url: "localhost:3010/reviews/1,
    type: "DELETE",
    dataType: "json",
    data: jsonData,
    contentType: "application/json"
  });` 
