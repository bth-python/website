#!/usr/bin/env bash

#
# Download the lab files to the current directory, execute like this.
#
# Create an empty local directory for the lab
#  mkdir lab_01
#  cd lab_01
#
# Locally:
#  LAB="lab_01" bash download_lab.bash
#
# Using remote:
#  LAB="lab_01" bash <(curl -Ls https://raw.githubusercontent.com/webtec-2024/website/refs/heads/main/src/content/docs/laromaterial/lab/target/download_lab.bash)
#

# Check if the LAB variable is set
if [[ -z "${LAB}" ]]; then
  printf "❌ Error: Environmentvariable LAB is not set. Exiting.\n"
  exit 1
fi

# Verify that LAB has a valid value otherwise exit
case "$LAB" in
    lab_01|lab_02|lab_03)
        ;;
    *)
        printf "❌ Error: Environmentvariable LAB contains invalid value. Exiting.\n"
        exit 1
    ;;
esac

# Files to download
BASE="https://raw.githubusercontent.com/webtec-2024/website/refs/heads/main/src/content/docs/laromaterial/lab/target"
FILES=(
    "README.md"
    "lab.html"
    "lab.js"
    "answer.js"
    "solution.js"
)

# Loop through the files to download
for file in "${FILES[@]}"; do
    # Do not download if the file already exists
    if [ -e "$file" ]; then
        printf "❌ %s already exists, will now overwrite it.\n" "$file"
        continue
    fi

    # Download the file
    curl -sL -o "$file" "$BASE/$LAB/$file"

    # Check if the download was successful
    printf "%s %s\n" "$([ $? -eq 0 ] && echo '✅' || echo '❌')" "$file"
done
