// traemos la ruta para manejar los template de las pages
const resolveRoutes = (route) => {
    if (route.length <= 3) {
        // (?) pasa la ruta y sino (:) el id
        let valideRoute = route === '/' ? route : '/:id';
        return valideRoute
    }

    // retorna la ruta principal
    return `/${route}`; 
}

export default resolveRoutes;