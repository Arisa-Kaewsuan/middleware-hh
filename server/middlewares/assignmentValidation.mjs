

const validateAssignment = (req, res, next) => {

    if (!req.body.title) {
        return res.status(400).json({
            message: "Title is required",
        })
    }
    if (!req.body.content) {
        return res.status(400).json({
            message: "Description is required",
        })
    }
    if (!req.body.category) {
        return res.status(400).json({
            message: "Due date is required",
        })
    }
    if (!req.body.email) {
        return res.status(400).json({
            message: "Subject is required",
        })
    }

    const categoryList = ["Math", "English", "Biology"]
    const hasCategoryList = categoryList.includes(req.body.category)
    if (!hasCategoryList) {
        return res.status(400).json({
            message: "Invalid category",
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(req.body.email)
    if (!isValidEmail) {
        return res.status(400).json({
            message: "Invalid email",
        })
    }

    const contentLength = req.body.content.length
    if (contentLength > 1000 && contentLength < 500) {
        return res.status(400).json({
            message: "Description must be between 500 and 1000 characters",
        })
    }
}

export default validateAssignment