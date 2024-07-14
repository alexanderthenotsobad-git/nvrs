#!/bin/bash
export $(grep -v '^#' /var/www/nvrs/crud/.env | xargs)
nodemon index.js
