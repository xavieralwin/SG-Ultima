import React from 'react';
import QRCodePoints from './assets/Pay_with_Points_QR.png';
import QRCodeCatalogue from './assets/Redemption_Catalogue_QR.png';


function Modal ({
  showModal,
  setShowModal
}) {

  let QRCode = QRCodePoints;
  if(showModal === 'catalogue'){
    QRCode = QRCodeCatalogue;
  }
    
    return (
      <>  
      {showModal !== 'none' ? (
        <>
          <div
            onClick={() => setShowModal('none')}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="container mx-auto">
                      <div className="grid grid-cols-2">
                          <div className="flex justify-center items-center">
                              <img alt="QR code" src={QRCode} />
                          </div>
                          <div className="flex justify-center items-center ml-4">
                              <p className="text-white ">Scan the QR Code to <br/>open <strong>Citi Mobile® App</strong></p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
  );
}

export default Modal;