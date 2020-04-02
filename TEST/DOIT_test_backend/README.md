# TEST-TASK 'DO IT':

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

Run next requests by using Postman
* or by using any convinient tool you like the most

```bash
[{ POST }] http://localhost:8080/api/patients?fileName=testfile
```

```bash
[{ POST }] http://localhost:8080/api/emails
BODY {
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

```bash
npm test
```
