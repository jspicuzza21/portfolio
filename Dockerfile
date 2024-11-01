# Use an official Node.js image with the desired version
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Specify the command to start your application
CMD ["npm", "start"]
