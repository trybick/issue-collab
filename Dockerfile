FROM node:10-alpine
ENV APP_DIR /app
WORKDIR ${APP_DIR}

# Cache package.json
COPY package.json package-lock.json ${APP_DIR}/

# Install dependencies
RUN npm install

# Add complete project structure
COPY . ${APP_DIR}

# Run the application
ENTRYPOINT npm start
