export function searchData({ data, search, fields = ["name", "description"] }) {
  if (!search) return data;

  const query = search.toLowerCase();

  return data.filter((item) =>
    fields.some((field) => item[field]?.toLowerCase().includes(query))
  );
}
