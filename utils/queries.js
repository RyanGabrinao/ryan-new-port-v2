export const allProjectsQuery = () => {
  const query = `*[_type == "projects"] | order(_createdAt asc)`;

  return query;
};

export const siteSettingsQuery = () => {
  const query = `*[_type == 'siteSettings'][0]`;

  return query;
};
