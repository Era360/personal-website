import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
