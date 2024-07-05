#!/bin/bash

# Define variables
SESSION_NAME="deployTMUX"
REPO_DIR="robin-portfolio"
FLASK_DIR="flask-server"
NEXTJS_DIR="my-app"

# Close existing tmux session if it exists
if tmux has-session -t $SESSION_NAME 2>/dev/null; then
  echo "Closing existing tmux session: $SESSION_NAME"
  tmux kill-session -t $SESSION_NAME
else
  echo "No tmux session named $SESSION_NAME found. Continuing..."
fi


# Pull the latest changes from GitHub
echo "Updating repository from GitHub..."
git pull origin master || { echo "Failed to update the repository"; exit 1; }

# Start a new tmux session
echo "Starting a new tmux session: $SESSION_NAME"
tmux new-session -d -s $SESSION_NAME

# Run the Flask backend in the first tmux window
echo "Starting Flask backend..."
tmux send-keys -t $SESSION_NAME "cd $FLASK_DIR && source venv/bin/activate && python3 server.py" C-m

# Create a new tmux window for the Next.js frontend
tmux new-window -t $SESSION_NAME

# Run the Next.js frontend in the second tmux window
echo "Starting Next.js frontend..."
tmux send-keys -t $SESSION_NAME:1 "cd $NEXTJS_DIR && npm run dev" C-m

# Attach to the tmux session
tmux attach -t $SESSION_NAME

