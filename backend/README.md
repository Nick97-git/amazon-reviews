# Amazon reviews(Back-end)
# Table of Contents
* [Project purpose](#purpose)
* [Technologies stack](#stack)
* [Launch project](#launch)
* [Launch project(using Docker)](#docker-launch)
* [Test project](#test)
* [Author](#author)

# <a name="purpose"></a>Project purpose
Analyze and transform reviews from Amazon.
<hr>
Without being authenticated you can register and login. There are specific urls for admins and users.
Only users can add new review or update it.
As admin you can delete review, and get some statistic by reviews: most active users, most commented food items, most used words in the reviews.
<hr>

# <a name="stack"></a>Technologies stack
* Spring Boot
* Spring Security(JWT Authentication)
* Spring Data JPA
* Spring Cloud
* H2 as test database
* PostgreSQL as main database
* Swagger
* Docker
* JUnit5
* Mockito 
* Lombok
<hr>

# <a name="launch"></a>Launch project

1. Open the project in your IDE.

2. Add Java SDK 11 or above in Project Structure.

3. Install PostgreSQL if you don't have it.

4. At src\main\resources\application.properties use your username (spring.datasource.username) 
and password (spring.datasource.password) for PostgreSQL Server to create a connection.

5. Change a path to log file at src\main\resources\application.properties - logging.file.name.

6. Run the project.

# <a name = "docker-launch"></a>Launch project(using Docker)

1. Install Docker Desktop and register on DockerHub

2. Run next command in terminal from backend directory: 
* docker-compose up --build

# <a name = "test"></a>Test project
For testing this API you can download Postman or another such an analogue. There are test data that you can use.
There’s one user already registered with ADMIN role (login = "admin", password = "1234") and one user with USER role (login = "user", password = "1234"). All new users automatically get USER role. You can change these test data in InjectDataController if you want.
All available endpoints you can see on http://localhost:8080/swagger-ui.html. For authorization, you must add a new header, where Authorization is key and Bearer token is value, where token - value that you will get after login query to the system in the response.

# <a name="author"></a>Author

Mykyta Arkhanhelskyi: https://github.com/Nick97-git
