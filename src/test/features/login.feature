Feature: User Authuntication 

Scenario Outline: User Login into the Application
Given A user navigate to the application
And user enter the username as "<username>"
And  user enter the password as "<password>"
When user click on the login button
Then Login should be success 





Examples:
|   username                |  password   |
|   chandansahu456@gmail.com|  Chandan@123|
|   coolchandan03@gmail.com |  Chandan@456|