export default function getDataFromMeta(meta: any, field: string): string {
  const data = meta.filter((info: any) => {
    return info['$'].name === field;
  });

  if (data.length === 0) {
    return '';
  }
  return data[0]['_'];
}
