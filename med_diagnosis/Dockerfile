# Build stage
FROM node:14-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Copy the rest of the app's source code to the container
COPY . .

# Build the app for production
RUN npm run build

# Run stage
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/.next ./.next

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port that the application will listen on
EXPOSE 3000

# Run the command to start the Next.js server
CMD ["npm", "start"]
