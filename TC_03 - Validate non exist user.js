pm.test("Status 404", () => pm.response.to.have.status(404));
pm.test("Response body empty", () => pm.expect(pm.response.text()).to.eql("{}"));
