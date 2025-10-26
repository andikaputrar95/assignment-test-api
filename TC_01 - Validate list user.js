let res = pm.response.json();

pm.test("Status code is 200", () => pm.response.to.have.status(200));
pm.test("Response time < 1000ms", () => pm.expect(pm.response.responseTime).to.be.below(1000));
pm.test("Response has required keys", () => {
    pm.expect(res).to.have.keys(["page", "per_page", "total", "total_pages", "data", "support"]);
});
pm.test("Data array not empty", () => pm.expect(res.data.length).to.be.above(0));
pm.test("Each user has valid email", () => {
    res.data.forEach(u => pm.expect(u.email).to.match(/@reqres\.in$/));
});
