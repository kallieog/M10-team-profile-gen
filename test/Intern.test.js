const Intern = require("../lib/Intern")
test("Intern test group", () => {
    const emp = new Intern("Kallie","1234", "kallieogara@gmail.com", "school")
    expect(emp.school).toBe("school")
    expect(emp.getSchool()).toBe("school")
    expect(emp.getRole()).toBe("Intern")

})