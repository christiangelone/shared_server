#!/bin/bash
set -e

if [ "$ENV" = 'DEV' ]; then
  echo "Running Dev Server"
  cd /nodeapp
  exec npm run build^start
else
  echo "Running Production Server"
  cd /nodeapp
  exec npm run build^start
fi