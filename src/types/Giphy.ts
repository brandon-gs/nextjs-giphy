export interface GiphyMeta {
  msg: string;
  response_id: string;
  status: 200;
}

export interface GiphyPagination {
  count: number;
  offset: number;
  total_count: number;
  next_page: number | null;
}

export interface GiphyData {
  id: string;
  images: {
    original: {
      webp: string;
    };
    preview_webp: {
      url: string;
    };
  };
}

export interface GiphyTrendingResponse {
  meta: GiphyMeta;
  pagination: GiphyPagination;
  data: GiphyData[];
}
