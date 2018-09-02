export interface LinkFlairRichtext {
  a: string;
  e: string;
  u: string;
  t: string;
}

export interface MediaEmbed {}

export interface RedditVideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface SecureMedia {
  reddit_video: RedditVideo;
}

export interface SecureMediaEmbed {}

export interface AuthorFlairRichtext {
  e: string;
  t: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Source2 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution2 {
  url: string;
  width: number;
  height: number;
}

export interface Obfuscated {
  source: Source2;
  resolutions: Resolution2[];
}

export interface Source3 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution3 {
  url: string;
  width: number;
  height: number;
}

export interface Nsfw {
  source: Source3;
  resolutions: Resolution3[];
}

export interface Source4 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution4 {
  url: string;
  width: number;
  height: number;
}

export interface Gif {
  source: Source4;
  resolutions: Resolution4[];
}

export interface Source5 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution5 {
  url: string;
  width: number;
  height: number;
}

export interface Mp4 {
  source: Source5;
  resolutions: Resolution5[];
}

export interface Variants {
  obfuscated: Obfuscated;
  nsfw: Nsfw;
  gif: Gif;
  mp4: Mp4;
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  variants: Variants;
  id: string;
}

export interface RedditVideoPreview {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
  reddit_video_preview: RedditVideoPreview;
}

export interface RedditVideo2 {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface Media {
  reddit_video: RedditVideo2;
}

export interface Data2 {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color: string;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width?: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: SecureMedia;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: string;
  author_flair_richtext: AuthorFlairRichtext[];
  post_hint: string;
  content_categories: string[];
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls: number;
  banned_by?: any;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html: string;
  likes?: any;
  suggested_sort: string;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string;
  visited: boolean;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  report_reasons?: any;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports: any[];
  author_flair_text_color: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media: Media;
  is_video: boolean;
}

export interface Child {
  kind: string;
  data: Data2;
}

export interface Data {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
  before?: any;
}

export interface RootObject {
  kind: string;
  data: Data;
}
