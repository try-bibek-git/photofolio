'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoModal from './VideoModal';

gsap.registerPlugin(ScrollTrigger);

interface VideoCardProps {
    coupleNames: string;
    location: string;
    imageUrl: string;
    videoUrl?: string;
    hasPlayButton?: boolean;
    onPlayClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
    coupleNames,
    location,
    imageUrl,
    hasPlayButton = false,
    onPlayClick,
}) => {
    const handleClick = () => {
        if (hasPlayButton && onPlayClick) {
            onPlayClick();
        }
    };

    return (
        <div 
            className={`video-card group relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-300 opacity-0 translate-y-12 ${hasPlayButton ? 'cursor-pointer' : ''}`}
            onClick={handleClick}
        >
            <img
                src={imageUrl}
                alt={`${coupleNames} wedding`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
            {hasPlayButton && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100">
                        <Play className="w-7 h-7 text-gray-800 ml-1" fill="currentColor" />
                    </div>
                </div>
            )}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white text-xs font-light tracking-[0.2em] uppercase">
                    The Timeless Tales
                </span>
            </div>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-white text-3xl md:text-4xl font-light tracking-wide">
                    {coupleNames}
                </h3>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <span className="text-white text-sm font-light tracking-wide">
                    {location}
                </span>
            </div>
        </div>
    );
};

const FeaturedWeddings: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<{
        url: string;
        coupleNames: string;
        location: string;
    } | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.section-heading', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.section-heading',
                    start: 'top 80%',
                },
            });

            gsap.from('.section-description p', {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.section-description',
                    start: 'top 80%',
                },
            });

            gsap.to('.video-card', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.video-card',
                    start: 'top 90%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const openVideoModal = (videoUrl: string, coupleNames: string, location: string) => {
        setCurrentVideo({ url: videoUrl, coupleNames, location });
        setIsModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    const weddings = [
        {
            coupleNames: 'TAMANA & DAN',
            location: 'Tuscany, Italy',
            imageUrl: 'https://picsum.photos/id/1011/800/450',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            hasPlayButton: true,
        },
        {
            coupleNames: 'ALESIA & RAHUL',
            location: 'Amalfi Coast, Italy',
            imageUrl: 'https://picsum.photos/id/1015/800/450',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            hasPlayButton: true,
        },
        {
            coupleNames: 'MAYA & ALEX',
            location: 'Santorini, Greece',
            imageUrl: 'https://picsum.photos/id/1016/800/450',
            hasPlayButton: false,
        },
        {
            coupleNames: 'ZINA & ZAIN',
            location: 'Provence, France',
            imageUrl: 'https://picsum.photos/id/1018/800/450',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            hasPlayButton: true,
        },
    ];

    return (
        <>
            <section ref={sectionRef} className="bg-[#F0E9E0] section-padding px-4">
                <div className="container mx-auto">
                    {/* Heading */}
                    <h2 className="section-heading text-4xl md:text-5xl font-light text-center text-gray-900 mb-4 tracking-wide">
                        A Glimpse into Their Stories
                    </h2>

                    {/* Description */}
                    <div className="section-description flex justify-center">
                        <div className="max-w-3xl text-center mb-16 space-y-5">
                            <p className="text-gray-800 text-sm sm:text-base md:text-lg italic font-light leading-relaxed tracking-wide">
                                A peek into the cinematic stories we've crafted for couples around the world — emotional, real, and timeless. These films are more than documentation; they're heirlooms.
                            </p>
                            <p className="text-gray-800 text-sm sm:text-base md:text-lg italic font-light leading-relaxed tracking-wide">
                                From cliffside vows in Santorini to intimate gardens in Tuscany, each film captures the heart of the moment in our signature visual poetry.
                            </p>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {weddings.map((wedding, index) => (
                            <VideoCard
                                key={index}
                                coupleNames={wedding.coupleNames}
                                location={wedding.location}
                                imageUrl={wedding.imageUrl}
                                hasPlayButton={wedding.hasPlayButton}
                                onPlayClick={
                                    wedding.hasPlayButton && wedding.videoUrl
                                        ? () => openVideoModal(wedding.videoUrl!, wedding.coupleNames, wedding.location)
                                        : undefined
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {currentVideo && (
                <VideoModal
                    isOpen={isModalOpen}
                    onClose={closeVideoModal}
                    videoUrl={currentVideo.url}
                    coupleNames={currentVideo.coupleNames}
                    location={currentVideo.location}
                />
            )}
        </>
    );
};

export default FeaturedWeddings;