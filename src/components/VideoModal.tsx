import React, { useState } from "react";
import "./styles.css";
// import { IoCloseOutline } from "react-icons/io5";
// import { BiLoaderAlt } from "react-icons/bi";

export default function App() {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    return (
        <h4>Modal</h4>
        // <div className="App">
        //     <button onClick={openModal} className="">
        //         Click Me!
        //         {modal ? (
        //             <section className="modal__bg">
        //                 <div className="modal__align">
        //                     <div className="modal__content" modal={modal}>
        //                         <IoCloseOutline
        //                             className="modal__close"
        //                             arial-label="Close modal"
        //                             // onClick={setModal}
        //                         />
        //                         <div className="modal__video-align">
        //                             {videoLoading ? (
        //                                 <div className="modal__spinner">
        //                                     <BiLoaderAlt
        //                                         className="modal__spinner-style"
        //                                         // fadeIn="none"
        //                                     />
        //                                 </div>
        //                             ) : null}
        //                             <iframe
        //                                 className="modal__video-style"
        //                                 onLoad={spinner}
        //                                 loading="lazy"
        //                                 width="800"
        //                                 height="500"
        //                                 src="https://www.youtube.com/embed/4UZrsTqkcW4"
        //                                 title="YouTube video player"
        //                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                             ></iframe>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //         ) : null}
        //     </button>
        // </div>
    );
}
