import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Harkan Media';
const SITE_URL = 'https://harkanmedia.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/harkan-logo.png`;

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  keywords,
  noindex = false,
  breadcrumbs,
  serviceName,
}) {
  const url = `${SITE_URL}${path}`;

  // breadcrumbs: [{ name, path? }] in trail order, last entry = current page
  // (path optional on the last entry — falls back to the page's own `path`).
  const breadcrumbSchema = breadcrumbs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path || path}`,
    })),
  } : null;

  // serviceName: human-readable service label — presence alone opts a page
  // into Service schema (reuses the page's own title/description/url).
  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Turkey' },
    url,
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
    </Helmet>
  );
}
