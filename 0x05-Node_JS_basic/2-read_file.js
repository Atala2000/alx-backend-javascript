const fs = require("fs")

function countStudents(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            throw new Error("CS file could not be read", err)
            return
        }
        const lines = data.split("\n")
        const output = []
        lines.forEach((line) => {
            const fields = line.split(",")
            output.push(fields)
        })
    console.log(output)

    })
}

module.exports = countStudents