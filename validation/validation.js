module.exports = (fields) => (req, res, next) => {

    for (const field of fields) {

        const value = req.body[field];
        if (!value) {
            return res.status(400).json({message : `${field} is required`});
        }

        if (typeof value === 'string' && value.trim() === '') {
            return res.status(400).json({message : `${field} cannot be empty`});
        }
        if (field === 'password' && value.length < 6) {
            return res.status(400).json({message : 'Password must be at least 6 characters'});
        }
        if (field === 'username' && (value.length < 3 || value.length > 20)) {
            return res.status(400).json({message : 'Username must be between 3 and 20 characters'});
        }
        if (field === "content" && (value.length < 10 || value.length > 100)) {
            return res.status(400).json({message : 'Content must be between 10 and 100 characters'});
        }
        if (field === 'mood' && !['happy', 'sad', 'neutral'].includes(value)) {
            return res.status(400).json({message : 'Mood must be happy, sad, or neutral'});
        }
        if (field === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
            return res.status(400).json({message : 'Invalid email format'});
        }
    }}
    next();
