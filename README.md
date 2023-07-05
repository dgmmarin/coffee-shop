# REQUIREMENTS
- nodejs 18.x
- npm i -g @nestjs/cli
- nest new coffee-shop
- npm i --save @nestjs/typeorm typeorm
- npm install mysql2 —save
- npm install -i class-validator --save


# RUN PROJECT
- cd coffee-shop
- npm run start

# ADD Components
- inside /src add /components, /database, /services folders
- inside src run the following command
- nest generate resource components/product
-- ? What transport layer do you use? REST API
-- ? Would you like to generate CRUD entry points? Yes