const handleHttpError = (res, message = 'algun error', code = 403) =>{
    res.status(code);
    res.send({error:message});
};

module.exports = {handleHttpError}