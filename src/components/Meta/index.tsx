import Head from 'next/head'
import meta from '../../../_content/meta.json'

const Meta = ({
  title,
  description,
  image,
  slug
}: {
  title: string
  description: string
  image?: string
  slug?: string
}) => {
  const url = slug ? `${meta.url}/${slug}` : meta.url

  return (
    <Head>
      <link rel="canonical" href={url} />
      <title>{title}</title>
      <meta name="description" content={`${description.slice(0, 200)}...`} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${meta.url}/${image}`} />
      <meta property="og:url" content={url} />
      <meta name="logo:card" content="summary_large_image" />
      <meta name="google-site-verification" content="ASzLihHWeQfpUNSiiiyxc7OUbI-CnKSZGqMecNMCuhI" />
    </ Head>
  )
}

export default Meta
