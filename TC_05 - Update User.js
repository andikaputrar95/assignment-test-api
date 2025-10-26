// Body
{ "name": "Andika Putra", "job": "QA Engineer" }

let res = pm.response.json();

pm.test("Status 200 OK", () => pm.response.to.have.status(200));
pm.test("Fields updated correctly", () => {
    pm.expect(res.name).to.eql("Andika Putra");
    pm.expect(res.job).to.eql("Senior QA");
});
pm.test("Response contains updatedAt", () => pm.expect(res).to.have.property("updatedAt"));
