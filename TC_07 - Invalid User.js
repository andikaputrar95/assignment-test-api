let res;

try {
    res = pm.response.json();
} catch (e) {
    res = {};
}

pm.test("Status code is 401 or 403", () => {
    pm.expect([401, 403]).to.include(pm.response.code);
});

pm.test("Response contains 'error' key", () => {
    pm.expect(res).to.have.property("error");
});

pm.test("Error message is 'Invalid or inactive API key'", () => {
    pm.expect(res.error).to.eql("Invalid or inactive API key");
});

pm.test("Response only contains 'error' field", () => {
    pm.expect(Object.keys(res).length).to.eql(1);
});
