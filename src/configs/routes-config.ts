type TRoutesConfig = {
    [key: string]: {
        route: string,
        authenticatedOnly: boolean,
        publicOnly: boolean,
    }
}

export const routesConfig: TRoutesConfig = {
    authentication_login: {
        route: "/authentication/login",
        authenticatedOnly: false,
        publicOnly: true,
    },
    authentication_register: {
        route: "/authentication/register",
        authenticatedOnly: false,
        publicOnly: true,
    },
    authentication_logout: {
        route: "/authentication/logout",
        authenticatedOnly: false,
        publicOnly: true,
    },
    user_profile_basic_details: {
        route: "/user/profile/basic_details",
        authenticatedOnly: true,
        publicOnly: false,
    },
    user_profile_additional_details: {
        route: "/user/profile/additional_details",
        authenticatedOnly: true,
        publicOnly: false,
    },
    user_profile_spouse_details: {
        route: "/user/profile/spouse_details",
        authenticatedOnly: true,
        publicOnly: false,
    },
    user_profile_personal_peferences: {
        route: "/user/profile/personal_preferences",
        authenticatedOnly: true,
        publicOnly: false,
    },
    api_profile_picture: {
        route: "/api/upload_profile_picture",
        authenticatedOnly: true,
        publicOnly: false,
    }
}