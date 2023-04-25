import { createClient, groq } from "next-sanity";
import { Project } from "@/types/index";
import clientConfig from '../lib/sanity.client'

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "author"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAtt": image.attribution,
      "imageCap": image.caption,
      description
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "author" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAtt": image.attribution,
      "imageCap": image.caption,
      description
    }`,
    { slug }
  )
}
