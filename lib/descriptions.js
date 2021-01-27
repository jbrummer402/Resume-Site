import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const descriptionsDirectory = path.join(process.cwd(), 'projectDescriptions')
const fs = require('fs')

export function getDescriptionsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
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
