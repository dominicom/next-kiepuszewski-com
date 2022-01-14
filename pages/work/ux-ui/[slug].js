import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'


import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import { MDXProvider } from '@mdx-js/react'

import { getFilePaths } from 'utils/mdxUtils'



import Wrapper from 'layout/Wrapper'





const components = {}

export default function Work({ meta, source }) {
  return <Wrapper meta={meta}><MDXRemote {...source} components={components} /></Wrapper>
}


const myPath = 'pages/work/ux-ui'

export const getStaticProps = async ({ params }) => {
  // const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const filePath = path.join(path.join(process.cwd(), myPath), `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = getFilePaths(myPath)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: true,
  }
}