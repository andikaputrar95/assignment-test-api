let res;

try {
    res = pm.response.json();
} catch (e) {
    res = {};
}

// Validasi status code
pm.test("Status code is 401 or 403", () => {
    pm.expect([401, 403]).to.include(pm.response.code);
});

// Validasi struktur error
pm.test("Response contains 'error' key", () => {
    pm.expect(res).to.have.property("error");
});

// Validasi pesan error
pm.test("Error message is 'Invalid or inactive API key'", () => {
    pm.expect(res.error).to.eql("Invalid or inactive API key");
});

// Pastikan tidak ada data lain
pm.test("Response only contains 'error' field", () => {
    pm.expect(Object.keys(res).length).to.eql(1);
});
