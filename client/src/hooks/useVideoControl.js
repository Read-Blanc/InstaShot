import {useEffect, useRef, useState} from 'react'

export default function useVideoControl() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying((prev) => !prev);
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true)
    }
  }, [])

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }


  return {videoRef, isPlaying, isMuted, togglePlayPause, toggleMuteUnmute}
}
