export const notFoundHandler = (reg, res, next) => {
    res.status(404).json({
        message: 'Route not found',
    })
}