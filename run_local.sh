#!/bin/bash

# Check if Node.js is installed
if ! command -v node &>/dev/null; then
  echo "Node.js is not installed. Please install Node.js first."
  exit 1
fi

# Install http-server if not installed
if ! command -v http-server &>/dev/null; then
  npm install -g http-server
fi

echo "Starting server..."
http-server

# On Linux, the "pause" command is not needed, as the server runs until interrupted.

