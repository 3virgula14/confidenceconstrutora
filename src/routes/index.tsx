import { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({  _ , response }) => {
    throw response.redirect('/portfolio/0');
};