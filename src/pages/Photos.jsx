import React, { useEffect, useState } from 'react'

function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="container mx-auto min-h-screen bg-gray-100 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {
                    photos.length > 0 &&
                    photos.map(photo => (
                        <div key={photo.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto" />
                            <div className="p-2">
                                <p className="text-sm text-gray-700 truncate" title={photo.title}>{photo.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Photos;