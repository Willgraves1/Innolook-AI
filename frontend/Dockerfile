# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy frontend files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]