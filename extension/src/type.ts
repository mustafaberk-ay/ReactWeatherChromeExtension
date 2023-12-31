export type WeatherType = {
    data: [{
        app_temp: number;
        city_name: string;
        weather: {
            description: string;
        };
    }]
}

export type LocationType = {
    lat: number;
    lon: number;
}