const Manager = require("../lib/Manager")
test("Manager test group", () => {
    const emp = new Manager("Kallie","1234", "kallieogara@gmail.com", "200")
    expect(emp.officenumber).toBe("200")
    expect(emp.getOfficeNumber()).toBe("200")
    expect(emp.getRole()).toBe("Manager")

})