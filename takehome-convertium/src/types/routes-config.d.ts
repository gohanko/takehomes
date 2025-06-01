type TRoutes = {
    route: string,
    authenticatedOnly: boolean,
    publicOnly: boolean,
}

type TRoutesConfig = {
    [key: string]: TRoutes
}
