import { MDXProvider as Provider } from '@mdx-js/react'
// import components from './defaultComponents';
import defaultComponents from './defaultComponents';

export default function MDXProvider({ components = defaultComponents, children }) {

  return(
    <Provider components={components}>
      {children}
    </Provider>
  )
}