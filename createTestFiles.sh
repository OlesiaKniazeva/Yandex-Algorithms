#!/bin/bash

src_dir="./src"
test_dir="./tests"

shopt -s globstar
for file in $src_dir/**/*.js
do
  base_name=$(basename "$file" .js)
  relative_dir=$(dirname "${file#$src_dir/}")
  mkdir -p "$test_dir/$relative_dir"
  test_file="$test_dir/$relative_dir/$base_name.test.js"

  if [ ! -f "$test_file" ]
  then
    echo "" > "$test_file"
    echo "Test file created for: $base_name.js"
  fi
done