
interface ImageViewProp {
  imageSrc: string;
  showModal: boolean;
  setShowModal: any;
}

const Modal = ({ showModal, setShowModal, imageSrc }: ImageViewProp) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        
            <img
            src={imageSrc}
            alt="Large view"
            loading="lazy"            
            className="h-[500px] w-[500px] rounded-xl "
          />
        
        
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
