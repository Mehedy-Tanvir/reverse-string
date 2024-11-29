# String Reverser

String Reverser is a simple Express.js API that reverses input strings. It provides an endpoint to reverse any given string.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development](#development)

## Installation

To install the String Reverser API, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Mehedy-Tanvir/string-reverser.git
   cd string-reverser
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:

```
npm start
```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Endpoints

### GET /api/reverse

Returns documentation for the string reversal endpoint.

**Response:**

```json
{
  "description": "Reverses a given string.",
  "input": {
    "type": "string",
    "description": "The string to reverse.",
    "example": "Hello, world!"
  },
  "output": {
    "type": "string",
    "description": "The reversed string.",
    "example": "!dlrow ,olleH"
  }
}
```

### POST /api/reverse

Reverses the provided input string.

**Request Body:**

```json
{
  "input": "Hello, world!"
}
```

**Response:**

```json
{
  "output": "!dlrow ,olleH"
}
```

**Error Response:**

If the input is not a string, you'll receive a 400 Bad Request error:

```json
{
  "error": "Input must be a string."
}
```

## Development

To run the server in development mode with auto-reloading:

```
npm run dev
```
