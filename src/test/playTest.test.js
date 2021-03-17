const add = (a, b) => a + b

const generateGreeting = (name = "Anonymous") => `Hello ${name}`

test("adds 1 + 2 to equals 3", () => {
 const result = add(1,2)
 expect(result).toBe(3)
})

test("should generate greeting", () => {
 const result = generateGreeting("Mike").toLowerCase()
 expect(result).toBe("Hello Mike".toLowerCase())
})

test("should generate greeting for no name", () => {
 const result = generateGreeting().toLowerCase()
 expect(result).toBe("Hello Anonymous".toLowerCase())
})