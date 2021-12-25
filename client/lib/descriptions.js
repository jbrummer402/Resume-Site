import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const descriptionsDirectory = path.join(process.cwd(), 'projectDescriptions')
const fs = require('fs')

export function getDescriptionsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(descriptionsDirectory)
  const allDescriptionsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(descriptionsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  return allDescriptionsData
}

export function getAllDescriptionIds() {
  const fileNames = fs.readdirSync(descriptionsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getDescriptionData(id) {
  const fullPath = path.join(descriptionsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}