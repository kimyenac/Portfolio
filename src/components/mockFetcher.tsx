/* mock 데이터 가져오는 Fetcher */
const mockFetcher = (key: string) => {
  const data = fetch(`/mock${key}`)
    .then((v) => v.json())
    .catch((e) => console.error(e));
  return data;
};

export default mockFetcher;
