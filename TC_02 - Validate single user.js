let res = pm.response.json();

pm.test("Status 200 OK", () => pm.response.to.have.status(200));
pm.test("Correct user ID", () => pm.expect(res.data.id).to.eql(2));
pm.test("Email format valid", () => pm.expect(res.data.email).to.match(/@reqres\.in$/));
