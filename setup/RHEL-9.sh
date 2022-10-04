#!/bin/bash

# This script is used to install the required packages and setup ___ on RHEL 9

# Default variables

NAME="tbd"
REPO="https://github.com/camdenmoors/tbd"


# Step 1: Install CINC (InSpec) if not Installed
if ! command -v cinc &> /dev/null
then
    echo "CINC (InSpec) could not be found"
    echo "Installing CINC (InSpec)..."
    curl -L https://omnitruck.cinc.sh/install.sh | sudo bash -s -- -P cinc-auditor -v 4
    echo "CINC (InSpec) Installed"
else
    echo "CINC (InSpec) already installed"
fi

# Step 2: Install git if not Installed
if ! command -v git &> /dev/null
then
    echo "git could not be found"
    echo "Installing git..."
    sudo yum install git -y
    echo "git Installed"
else
    echo "git already installed"
fi

# Step 3: Install NodeJS and yarn if not Installed
if ! command -v node &> /dev/null
then
    echo "NodeJS could not be found"
    echo "Installing NodeJS..."
    sudo yum install nodejs -y
    echo "NodeJS Installed"
else
    echo "NodeJS already installed"
fi

if ! command -v yarn &> /dev/null
then
    echo "yarn could not be found"
    echo "Installing yarn..."
    sudo npm install -g yarn
    echo "yarn Installed"
else
    echo "yarn already installed"
fi


# Step 4: Install the program
git clone $REPO
cd $NAME
# Install npm packages
npm install
# Build the program
npm run build
# Install the program
npm install -g

