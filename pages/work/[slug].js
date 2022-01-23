import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'



import { getFilePaths } from 'utils/mdxUtils'

import { Grid } from 'layout/Grid';
import { Projectpage } from 'templates/Projectpage'







export default function Work({ meta, source }) {
  //console.log(source, meta)




  return (
    <Projectpage meta={meta}>
      <Grid>
        <MDXRemote {...source} />
      </Grid>
    </Projectpage>
  )
}
// Two levels nested routing in nextjs
// https://stackoverflow.com/questions/57648690/2-levels-nested-routing-in-nextjs

const myPath = 'contents/work'

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
    fallback: false, // was true
  }
}