import React from 'react'

export type OGPVideo = {
  actor: string
  actorRole: string
  director: string
  writer: string
  duration: string
  releaseDate: string
  tag: string
  series?: string
}

export type OGPSong = {
  duration: string
  album: string
  albumDisc: string
  albumTrack: string
  musician: string
}

export type OGPMedia = {
  width: number
  height: number
  alt: string
  url: string
  type?: string
}

export interface OGPProps {
  image?: string | OGPMedia
  title: string
  description: string
  siteName: string
  locale?: string
  url: string
  type?:
    | 'website'
    | 'article'
    | 'book'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
    | 'profile'
  audio?: string
  video?: string | OGPMedia
  movie?: OGPVideo
  song?: OGPSong
}

export const OGP = ({
  locale = 'en_US',
  title = 'React App',
  siteName,
  url,
  type = 'website',
  image,
  audio,
  video,
  movie,
  description,
  song
}: OGPProps) => {
  return (
    <>
      {song && (
        <>
          <meta name="music:duration" content={song.duration} />
          <meta name="music:album" content={song.album} />
          <meta name="music:album:disc" content={song.albumDisc} />
          <meta name="music:album:track" content={song.albumTrack} />
          <meta name="music:musician" content={song.musician} />
        </>
      )}
      {audio && <meta name="og:audio" content={audio} />}
      {movie && (
        <>
          <meta name="video:actor" content={movie.actor} />
          <meta name="video:actor:role" content={movie.actorRole} />
          <meta name="video:director" content={movie.director} />
          <meta name="video:release_date" content={movie.releaseDate} />
          <meta name="video:tag" content={movie.tag} />
          {movie.series && <meta name="video:series" content={movie.series} />}
        </>
      )}
      {typeof video === 'string' ? (
        <meta name="og:video" content={video} />
      ) : (
        <>
          <meta
            property="og:video:secure_url"
            content={video.url.includes('http://') ? video.url.replace('http://', 'https://') : video.url}
          />
          <meta property="og:video:width" content={video.width.toString()} />
          <meta property="og:video:height" content={video.height.toString()} />
          <meta name="og:video:url" content={video.url} />
          <meta property="og:video:type" content={video.type || 'video/mp4'} />
        </>
      )}
      <meta name="og:locale" content={locale} />
      <meta name="og:title" content={title} />
      {typeof image === 'string' ? (
        <>
          <meta name="og:image" content={image} />
          <meta
            property="og:image:secure_url"
            content={image.includes('http://') ? image.replace('http://', 'https://') : image}
          />
        </>
      ) : (
        <>
          <meta
            property="og:image:secure_url"
            content={image.url.includes('http://') ? image.url.replace('http://', 'https://') : image.url}
          />
          <meta property="og:image:width" content={image.width.toString()} />
          <meta property="og:image:height" content={image.height.toString()} />
          <meta name="og:image:url" content={image.url} />
          <meta property="og:image:type" content={image.type || 'image/jpeg'} />
        </>
      )}

      <meta name="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
    </>
  )
}
