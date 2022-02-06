import { MDXProvider as Provider } from '@mdx-js/react'
import remarkUnwrapImages from 'remark-unwrap-images'
import defaultComponents from './defaultComponents';


const options = {
  remarkPlugins: [remarkUnwrapImages],
}

export default function MDXProvider({ components = defaultComponents, children }) {

  return(
    <Provider components={components} options={options} >
      {children}
    </Provider>
  )
}