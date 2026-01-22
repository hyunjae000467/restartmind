import { useState, useEffect } from 'react';

const STORAGE_KEY = 'user_liked_columns';

export const useLikes = () => {
    // likedColumns is a Set of IDs
    const [likedColumns, setLikedColumns] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (e) {
            console.error("Failed to load likes from localStorage", e);
            return new Set();
        }
    });

    // Save to localStorage whenever likedColumns changes
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(likedColumns)));
        } catch (e) {
            console.error("Failed to save likes to localStorage", e);
        }
    }, [likedColumns]);

    const toggleLike = (id) => {
        setLikedColumns(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const isLiked = (id) => {
        return likedColumns.has(id);
    };

    const getLikeCount = (id, baseCount) => {
        return baseCount + (likedColumns.has(id) ? 1 : 0);
    };

    return {
        likedColumns,
        toggleLike,
        isLiked,
        getLikeCount
    };
};
