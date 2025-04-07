#!/bin/bash
rsync -av --exclude='node_modules' website/public/ ./
echo "✅ Synced to root. Now git commit + push to deploy 💅"
