# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code to the working directory
COPY . .

# Expose port 3000
EXPOSE 8081

# Set environment variable for MongoDB URI
ENV MONGO_URI=mongodb+srv://admin:uzzal.cse@node-api.0jxhkri.mongodb.net/?retryWrites=true&w=majority

# Start the app
CMD [ "npm", "start" ]