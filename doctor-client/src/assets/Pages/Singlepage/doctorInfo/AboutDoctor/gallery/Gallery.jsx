import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const Gallery = ({ gallery }) => {
    const onInit = () => {
    };
    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            elementClassNames='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-5 mt-3'
            plugins={[lgThumbnail, lgZoom]}>
            {
                gallery?.map((gallery, index) => <a href={gallery} key={index}><img className='w-full' src={gallery} alt="" /></a>)
            }
        </LightGallery>
    )
}

export default Gallery