# ReqRes API Automation Test

Automation test untuk endpoint https://reqres.in menggunakan Postman & Newman.

## Test Cases
| No | Test Case | Endpoint | Expected |
|----|------------|-----------|-----------|
| 01 | Get Users | GET /users?page=2 | 200 OK, valid structure |
| 02 | Get Single User | GET /users/2 | 200 OK, correct ID |
| 03 | User Not Found | GET /users/23 | 404, empty body |
| 04 | Create User | POST /users | 201 Created |
| 05 | Update User | PUT /users/2 | 200 OK |
| 06 | Delete User | DELETE /users/2 | 204 No Content |
| 07 | Invalid API Key | GET /users?page=2 | 401 or 403, error message |

## How to Run
1. Import collection ke Postman, atau jalankan via Newman:
   ```bash
   newman run ReqRes_Automation.postman_collection.json
