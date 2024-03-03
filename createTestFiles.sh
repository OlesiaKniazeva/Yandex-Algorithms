#!/bin/bash

src_dir="./src"
test_dir="./tests"

for file in $src_dir/*.js
do
  base_name=$(basename "$file" .js)
  test_file="$test_dir/$base_name.test.js"

  if [ -f "$test_file" ]
  then
    echo "Test file already exists for: $base_name.js"
  else
    echo "" > "$test_file"
    echo "Test file created for: $base_name.js"
  fi
done