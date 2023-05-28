# Car Rental System

## For Running the Project

### Requirements

`Python, Node, git`

### Clone the repository:

- Create a empty folder and `cd` into that folder.
- Type the following command to clone project in same directory.

```bash
git clone https://github.com/YaroslavLys/car-rental-system.git .
```

## Backend

### 1. Go to the root folder and perform the following commands:

`cd backend/`

### 2. Create and activate the virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install required packages

```bash
pip install -r requirements.txt
```

> If you are using PyCharm, it can automatically create virtual environment and install all requirements for you

### 4. Run the server

```bash
python manage.py migrate
python manage.py runserver
```

## Frontend

- Go back to the root folder
- Enter in `cd frontend/`

### 1. Installing packages

```bash
yarn
```

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm install --global yarn
```

> If you're using WebStorm, configure **yarn** as main package manager

</p>
</details>

### 2. Run the application

```bash
yarn start 
```

Or

```bash
npm run start 
```

> Make sure both frontend and backend are running.


