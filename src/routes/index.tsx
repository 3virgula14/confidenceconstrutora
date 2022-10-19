import { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ response }) => {
    throw response.redirect('/portfolio/0');
};