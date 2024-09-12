Feature: Add to cart 

Scenario Outline: User add the product into cart
Given A user navigate to the application
When user enter the username and password as "<username>" and "<password>" 
When user click on the login button
Then user add a product into cart 




Examples:
|   username                |  password   |
|   chandansahu456@gmail.com|  Chandan@123|
|   coolchandan03@gmail.com |  Chandan@456|