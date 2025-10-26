// Body
{ "name": "Andika Putra", "job": "QA Engineer" }

// Test Script 
let res = pm.response.json();

pm.test("Status 201 Created", () => pm.response.to.have.status(201));
pm.test("Response contains id and createdAt", () => {
    pm.expect(res).to.have.property("id");
    pm.expect(res).to.have.property("createdAt");
});
pm.test("Name and job match request", () => {
    pm.expect(res.name).to.eql("Andika Putra");
    pm.expect(res.job).to.eql("QA Engineer");
});
