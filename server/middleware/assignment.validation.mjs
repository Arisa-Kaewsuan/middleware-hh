const assignmentValidation = (req, res, next) => {      
    const { Title, Content, Category, Email } = req.body;
    
    if (!Title) {
        return res.status(400).json({ message: "Title is required" });
    }
    if (!Content || !(Content.length >= 500 && Content.length <= 1000)) {
        return res.status(400).json({ message: "Content must be between 500-1000 characters in length" });
    }
    if (!Category || (Category !== "Math" || Category !== "English" || Category !== "Biology")) {  
        return res.status(400).json({ message: "Category must be one of the following: Math, English, or Biology" });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!Email || !emailRegex.test(Email)) {
        return res.status(400).json({ message: "Please provide a valid email address" });
    }
    next();
}

export default assignmentValidation;