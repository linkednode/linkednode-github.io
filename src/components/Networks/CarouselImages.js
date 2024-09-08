const CarouselImages = ({ src, alt, text }) => (
    <div style={{ textAlign: 'center' }}>
        <img
        src={src}
        alt={alt}
        style={{ width: '100px', height: '100px'}}
        />
        {text && <p style={{ marginTop: '10px', marginBottom: '50px' }}>{text}</p>}
    </div>
  );
  
export default CarouselImages;
  