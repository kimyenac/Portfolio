/* mock 데이터 가져오는 Fetcher */
const mockFetcher = (key: string) => {
  const result = fetch(`/mock${key}`).then((v) => v.json());
  return result.then((v) => v.data);
};

export default mockFetcher;
