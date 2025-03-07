# Use an official Node.js image with the desired version
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Verify the build output
RUN ls -la dist || echo "Dist directory not found"

# Specify the command to start your application
CMD ["npm", "start"]
