import routes from "../router/routes"

export const router = (name) => {
    const find = routes.find(i => i.name === name);
    if (find) {
        return find.path;
    }
    return '/'
}