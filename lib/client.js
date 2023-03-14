import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
export const client=sanityClient({
    projectId:'cw3u5qk9',
    dataset:'production',
    apiVersion:'2023-03-14',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder=imageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source)

/* projectId: tells sanity which project to connect  with.
dataset: specifies if its a production or development mode

*/