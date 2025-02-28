# First stage - build the application
FROM maven:3.9.9-eclipse-temurin-23-alpine AS build
WORKDIR /app
COPY . .

ENV SECRETS_JWT_KEY=secret

RUN mvn clean install -DskipTests

# Second stage - run the application
FROM eclipse-temurin:23-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

ENV SECRETS_JWT_KEY=secret

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]


