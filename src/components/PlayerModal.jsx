import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PlayerModal = ({ isOpen, setIsOpen, closeModal, player }) => {
  const {
    name,
    fullName,
    role,
    thumbnail,
    birthPlace,
    dob,
    height,
    battingStyle,
    bowlingStyle,
  } = player;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-96 md:w-[600px]  md:max-w-lg transform overflow-hidden rounded-2xl bg-slate-700 p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6"
                  >
                    {/* Player Details */}
                  </Dialog.Title>
                  <div className="mt-2 flex items-center gap-5">
                    <img
                      src={thumbnail}
                      alt=""
                      className="w-20 h-20 md:w-36 md:h-36 rounded-full"
                    />
                    <div className="">
                      <h2 className="md:text-3xl text-xl">{fullName}</h2>
                      <h2 className="md:text-3xl text-xl">{birthPlace}</h2>
                    </div>
                  </div>

                  {/* personal info. */}
                  <div className="">
                    <div className="">
                      <table>
                        <caption className="caption-top text-xl md:text-3xl mb-5 text-left mt-3">
                          Personal Info
                        </caption>
                        <tbody 
                        // className="flex items-center justify-center flex-col"
                        >
                          <tr className="">
                            <td className="text-left">Born:</td>
                            <td className="text-left">{dob}</td>
                          </tr>
                          <tr className="">
                            <td className="text-left">Birth Place:</td>
                            <td className="text-left">{birthPlace}</td>
                          </tr>
                          <tr className="">
                            <td className="text-left">Height:</td>
                            <td className="text-left">{height}</td>
                          </tr>
                          <tr className="">
                            <td className="text-left">Role:</td>
                            <td className="text-left">{role}</td>
                          </tr>
                          <tr className="">
                            <td className="text-left">Batting Style:</td>
                            <td className="text-left">{battingStyle}</td>
                          </tr>
                          <tr className="">
                            <td className="text-left">Bowling Style:</td>
                            <td className="text-left">{bowlingStyle}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PlayerModal;
