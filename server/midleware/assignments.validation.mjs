export const validationCreateAssignment = (req, res, next) => {
    const { title, content, category, email } = req.body;

    // Check if all required fields are present
    if (!title || !content || !category || !email) {
        return res.status(400).json({ error: "All fields (Title, Content, Category, Email) are required." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    // Validate category
    const validCategories = ["Math", "English", "Biology"];
    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: `Category must be one of the following: ${validCategories.join(", ")}.` });
    }

    // Validate content length
    if (content.length < 500 || content.length > 1000) {
        return res.status(400).json({ error: "Content must be between 500 and 1000 characters." });
    }

    // If all validations pass, proceed to the next middleware
    next();
};