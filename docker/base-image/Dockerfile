FROM node:carbon

# Update our box and install linux dependencies
RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

# Setup our new user and home folder
RUN groupadd -r festicket && \
    useradd -r -g festicket festicket && \
    mkdir -p /home/festicket/

# flow-typed needs a root directory FML
RUN mkdir /flow-typed && \
    chown -R festicket:festicket /flow-typed

# Switch to the new home folder
WORKDIR /home/festicket

# Get our node dependencies
COPY ./package.json package-lock.json ./
RUN npm install

# Copy across all configs
COPY .babelrc \
     .eslintignore \
     .eslintrc \
     .flowconfig \
     cypress.json \
     jest.config.js \
     setupTests.js \
     ./

# Copy our application code across
COPY ./.storybook .storybook
COPY ./scripts scripts
COPY ./svgs svgs
COPY ./cypress cypress
COPY ./src src

# Generate our type files
RUN npm run flow:typed

# Build our assets
RUN npm run build

# Build our storybook so we can publish it later
RUN npm run build-storybook

# Make sure festicket user owns: ALL OF THE THINGS
RUN chown -R festicket:festicket /home/festicket

# Make sure any process run on this box
# are run by the festicket user
USER festicket
