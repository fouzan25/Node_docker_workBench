#!/bin/bash
docker-compose down
echo "Starting app..."
docker-compose up --build -d

sleep 

echo "Node App running http://localhost:6868/"
echo "loggs are coming soon be mentally prepared :) ..."
docker logs -f --tail 10 node-app
