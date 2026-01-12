type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbStructuredDataProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const baseUrl = 'https://greenvalleyranchinsider.com';
  
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${baseUrl}${item.href}` }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbList),
      }}
    />
  );
}
