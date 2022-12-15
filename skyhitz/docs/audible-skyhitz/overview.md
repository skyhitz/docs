---
sidebar_position: 1
---

Github: https://github.com/skyhitz/audible-magic

A repository that contains PoC for audible service. It's the express REST server with one endpoint
`/identify` which allows running the audible check for uploaded media files.

## Project structure

- `src` directory that contains all source code
  - `config` contains config with environment variables
  - `controllers` contains controllers for routes
  - `execptions`
  - `interfaces`
  - `middlewares` contains an error and auth middleware
  - `passwordless`
  - `routes`
  - `utils`

### How to run

Install git-lfs: https://git-lfs.github.com/

Make sure you have `.env` file with the public key.

```
git clone git@github.com:skyhitz/audible-magic.git
cd audible-magic
docker-compose up
```

Node.js server should be available.
IMPORTANT: As we are using amd Ubuntu image, the Audible Magic toolkit is not working while running on Mac with an Apple Silicon chip.

### How to test

You can use swagger-ui interface.

```
localhost/api-docs
```

### Flow

The `/identify` route requires an access token which can be obtained using skyhitz API. The token is valid only for 2 minutes, so the request
to audible service should be made right after obtaining the token. You have to send `POST` request with the form content type and the following fields:

- `id` - unique id of the beat
- `beat` - media file to check

In the response, you will receive information on whether the beat is original.

### Test deployed version

The service is currently deployed in the digital ocean. You can test it using the following instructions.

1. Request for an access token: (you should replace the token from the authorization header with your own token but for testing, it doesn't matter)

```sh
curl --request POST \
  --url https://api.skyhitz.io/api/graphql \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1OQ3Q1YlhFOW1YTWxFaVZvd3NFIiwiZW1haWwiOiJqYWt1Yi5teXNsaXdpZWNAc3dtYW5zaW9uLmNvbSIsInZlcnNpb24iOjEsImlhdCI6MTY2NzM4MjAxNH0.nMSIWOswdJwv26aFCtqk7HvUG355LU7iglAlhDBqt5I' \
  --header 'Content-Type: application/json' \
  --data '{
    "query": "query token {\n getAudibleToken {\n token\n}\n}"
}
'
```

In the response, you should receive a jwt access token to audible service.

2. Request audible service. Replace:

- <YOUR_TOKEN> with the token received from the previous request.
- <BEAT_UNIQUE_ID> with the beat unique id
- <BEAT_PATH> with the path to your beat file

```sh
  curl --request POST \
   --url http://142.93.241.220/identify \
   --header 'Authorization: Bearer <YOUR_TOKEN>' \
   --header 'Content-Type: multipart/form-data' \
   --form id=<BEAT_UNIQUE_ID> \
   --form beat=<BEAT_PATH>
```

It takes a few seconds for the service to respond.

### What needs to be done?

To move service to production, the following steps are required:

- set up a droplet with more resources
- introduce logs collection
- introduce auto recovery after faults
- add CI/CD that will automate deployment directly from GitHub.
