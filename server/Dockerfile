FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Switch to non-root user for security
USER node

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
