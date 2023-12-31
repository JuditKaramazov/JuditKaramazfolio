import fs from 'fs'
import yaml from 'js-yaml'
import { join } from 'path'
import sharp from 'sharp'
import type ImageType from '../interfaces/image'
import type ProjectType from '../interfaces/project'
import { markdownToHtml } from './markdown'

const imagesDirectory = join(process.cwd(), 'public', 'images')
const contentDirectory = join(process.cwd(), '_content')
const projects = yaml.load(
  fs.readFileSync(`${contentDirectory}/projects.yml`, 'utf8')
) as Partial<ProjectType>[]

export function getProjectSlugs() {
  return projects.map(({ slug }: { slug: string }) => slug)
}

export async function getProjectImages(slug: string) {
  const allImages = fs.readdirSync(imagesDirectory, 'utf8')
  const projectImages = allImages.filter((image) => image.includes(slug))

  let images: ImageType[] = []

  await Promise.all(
    projectImages.map(async (image) => {
      const file = `${imagesDirectory}/${image}`
      const transformer = sharp(file)
      const { width, height, format } = await transformer.metadata()

      const imageType: ImageType = {
        width,
        height,
        format,
        src: `/images/${image}`
      }
      images.push(imageType)
    })
  )
  images = images.sort((a, b) => a.src.localeCompare(b.src))
  return images
}

export async function getProjectBySlug(slug: string, fields: string[] = []) {
  const project = projects.find((item) => item.slug === slug)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  await Promise.all(
    fields.map(async (field) => {
      if (field === 'description') {
        const descriptionHtml = await markdownToHtml(project.description)
        items[field] = project.description
        items['descriptionHtml'] = descriptionHtml
      }
      if (field === 'images') {
        const images = await getProjectImages(slug)
        ;(items[field] as unknown as ImageType[]) = images
      }
      if (typeof project[field] !== 'undefined') {
        items[field] = project[field]
      }
    })
  )

  return items as Partial<ProjectType>
}

export async function getAllProjects(
  fields: string[] = []
): Promise<Partial<ProjectType>[]> {
  const slugs = getProjectSlugs()
  const projects = await Promise.all(
    slugs.map(async (slug: string) => await getProjectBySlug(slug, fields))
  )
  return projects
}
