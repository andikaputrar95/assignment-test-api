pm.test("Status 204 No Content", () => pm.response.to.have.status(204));
pm.test("Response body is empty", () => pm.expect(pm.response.text()).to.eql(""));
