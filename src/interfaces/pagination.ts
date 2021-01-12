export interface Pagination {
  count: number;
  items: number;
  page: number;
  last: number;
  pages: number;
  offset: number;
  from: number;
  to: number;
  prev: number | null;
  next: number;
}
