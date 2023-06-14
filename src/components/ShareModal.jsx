import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { IoMdClose } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import Facebook from "../assets/facebook-icon.svg";
import Linkedin from "../assets/linkedin-icon.svg";
import Whatsapp from "../assets/whatsapp-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Mail from "../assets/mail-icon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

const ShareModal = ({ isOpen, closeModal }) => {
  const INPUT_LINK = `http://www.almabetter.com/asdfjasfdlj`;
  const [isCopied, setIsCopied] = useState(false);

  // this useEffect is to set the status to default, after copying the Link
  useEffect(() => {
    isCopied &&
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
  }, [isCopied]);

  return (
    <Modal open={isOpen} onClickBackdrop={closeModal} dataTheme={"light"}>
      <Button
        size="sm"
        shape="circle"
        className="absolute right-2 top-2 bg-white border-none text-slate-700 text-2xl font-bold"
        onClick={() => {
          setIsCopied(false);
          closeModal();
        }}
      >
        ✕
      </Button>
      <Modal.Header className="font-bold">Share</Modal.Header>

      <Modal.Body>
        <div className="m-5 flex flex-col">
          <IoMdClose
            onClick={closeModal}
            className="absolute text-slate-500 right-3 top-3 text-2xl cursor-pointer"
          />

          <div className="flex items-center space-x-3">
            <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
              Link:
              <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                http://www.almabetter.com/asdfjasfdlj
              </span>
            </p>
            <CopyToClipboard text={INPUT_LINK} onCopy={() => setIsCopied(true)}>
              <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
            </CopyToClipboard>

            <BsShare className="text-xl text-slate-500 cursor-pointer" />
          </div>
          <h2 className="p-2 h-5 ml-3 text-sm text-red-500 font-semibold">
            {isCopied && "Link copied to clipboard"}
          </h2>
          <div className="mt-6 flex items-center space-x-10 justify-center">
            <FacebookShareButton url="https://www.facebook.com/">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
              />
            </FacebookShareButton>
            <LinkedinShareButton url="https://www.linkedin.com/">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
              />
            </LinkedinShareButton>
            <WhatsappShareButton url="https://web.whatsapp.com/">
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
              />
            </WhatsappShareButton>
            <TwitterShareButton url="https://twitter.com/">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
              />
            </TwitterShareButton>
            <EmailShareButton url="https://gmail.com/">
              <img
                src={Mail}
                alt="Mail"
                className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
              />
            </EmailShareButton>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ShareModal;
