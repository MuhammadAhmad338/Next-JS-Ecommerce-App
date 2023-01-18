import sanityClinet from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClinet({
    projectId: 'c23k19b4',
    dataset: 'production',
    apiVersion: '2023-06-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);