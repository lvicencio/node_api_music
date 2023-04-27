const customHeader = (req, res, next) => {
   try {
    const apiKey = req.headers.apiKey;
    if (apiKey === "admin123") {
        next();
    } else {
        res.status(403);
        res.send({
            error: "api_key no es autorizada"
        });
    }

   } catch (e) {
    res.status(403);
        res.send({
            error: "api_key error en el custom header"
        });
   }
}

module.exports = customHeader