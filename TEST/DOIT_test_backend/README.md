# TEST-TASK 'DO IT':

## 1. Step #1

    ### Install node_modules:
        npm install

    ### Start server:
        npm start

## 2. Run next requests by using Postman (or any convinient tool):

    ### Creating Patients in the local Mongo DataBase:
    { POST } http://localhost:8080/api/patients?fileName=testfile

    ### Creating Emails in the local Mongo DataBase:
    { POST } http://localhost:8080/api/emails
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

## 3. Testing:

    ### Start tests:
        npm test