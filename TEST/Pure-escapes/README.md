# TEST-TASK:

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

Run next requests by using Postman (or any tool for HTTP requests):

```
1. { POST } http://localhost:9091/api/patients?fileName=testfile
```

```
2. { POST } http://localhost:9091/api/emails
BODY: {
    "template": "Hello patient!",
    "dates": [
        "2020-04-01",
        "2020-04-02",
        "2020-04-03",
        "2020-04-04",
        "2020-04-05"
    ]
}
```

## Testing

```
npm test
```