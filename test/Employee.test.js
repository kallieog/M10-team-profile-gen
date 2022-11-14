const Employee = require("../lib/Employee")
test("Employee test group", () => {
    const emp = new Employee("Kallie","1234", "kallieogara@gmail.com")
    expect(emp.name).toBe("Kallie")
    expect(emp.getName()).toBe("Kallie")
    expect(emp.id).toBe("1234")
    expect(emp.getId()).toBe("1234")
    expect(emp.email).toBe("kallieogara@gmail.com")
    expect(emp.getEmail()).toBe("kallieogara@gmail.com")
    expect(typeof emp).toBe("object")
    expect(emp.getRole()).toBe("Employee")

})