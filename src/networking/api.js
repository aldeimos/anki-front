import bridge from '@vkontakte/vk-bridge';

const IS_DEV = window.location.href.indexOf("vk_app_id") === -1;

export const getProfile = () => new Promise (async (resolve) => {
    if (IS_DEV) {
        return resolve({
            "id": 2314852,
            "first_name": "Ирина",
            "last_name": "Денежкина",
            "sex": 1,
            "city": {
                "id": 2,
                "title": "Санкт-Петербург"
            },
            "country": {
                "id": 1,
                "title": "Россия"
            },
            "bdate": "10.4.1990",
            "photo_100": "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
            "photo_200": "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
            "timezone": 3
        });
    }

    const profile = await bridge.send('VKWebAppGetUserInfo', {});
    return resolve(profile);
});

