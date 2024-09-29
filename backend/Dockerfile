# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy backend files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Start the app
CMD ["npm", "start"]