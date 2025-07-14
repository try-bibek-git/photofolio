import React, { useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import gsap from 'gsap';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    coupleNames: string;
    location: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
    isOpen,
    onClose,
    videoUrl,
    coupleNames,
    location,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [showControls, setShowControls] = React.useState(true);
    const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(
                modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            gsap.fromTo(
                '.video-container',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
            );
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

        const togglePlayPause = React.useCallback(() => {
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
}, [isPlaying]);

   useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
        if (e.key === ' ' && videoRef.current) {
            e.preventDefault();
            togglePlayPause();
        }
    };

    if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
}, [isOpen, onClose, togglePlayPause]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const newTime = (parseFloat(e.target.value) / 100) * duration;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 3000);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Semi-transparent backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            {/* Video container */}
            <div
                className="video-container relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onMouseMove={handleMouseMove}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                    <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Video element */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlayPause}
                />

                {/* Video info overlay */}
                <div className="absolute top-4 left-4 text-white">
                    <div className="text-xs font-light tracking-[0.2em] uppercase opacity-80 mb-1">
                        The Timeless Tales
                    </div>
                    <h3 className="text-xl md:text-2xl font-light tracking-wide">
                        {coupleNames}
                    </h3>
                    <div className="text-sm font-light tracking-wide opacity-80">
                        {location}
                    </div>
                </div>

                {/* Video controls */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Progress bar */}
                    <div className="mb-4">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={duration ? (currentTime / duration) * 100 : 0}
                            onChange={handleSeek}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                        />
                    </div>

                    {/* Control buttons */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={togglePlayPause}
                                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 group"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                                ) : (
                                    <Play className="w-5 h-5 text-white ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" />
                                )}
                            </button>

                            <button
                                onClick={toggleMute}
                                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 group"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                ) : (
                                    <Volume2 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                )}
                            </button>

                            <div className="text-white text-sm font-light">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>

                        <button
                            onClick={handleFullscreen}
                            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 group"
                        >
                            <Maximize2 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;