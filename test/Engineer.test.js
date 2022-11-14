const Engineer = require("../lib/Engineer")
test("Engineer test group", () => {
    const emp = new Engineer("Kallie","1234", "kallieogara@gmail.com", "kallieog")
    expect(emp.github).toBe("kallieog")
    expect(emp.getGithub()).toBe("kallieog")
    expect(emp.getRole()).toBe("Engineer")

})