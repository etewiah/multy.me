import axios from "axios";
import { useState } from "react";
import Clipboard from "react-clipboard.js";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

export default function URLs() {
  const [shortURL, setShortURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleURLs = () => {
    const URLS = document.getElementById("urls").value;
    const name = document.getElementById("name").value;
    const ArrayofURLs = URLS.split("\n");
    if (document.getElementById("urls").value) {
      setLoading(true);
      axios
        .post("/api/List", { urls: ArrayofURLs, name: name })
        .then((result) => {
          setShortURL(`https://multy.me/${result.data.uid}`);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.info("Please enter at least one URL", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className=''>
      <div className='flex w-screen flex-wrap max-w-3xl m-auto font-light justify-center'>
        <Image
          src='/bookmark.png'
          width={125}
          height={110}
          className='object-scale-down m-auto sm:m-0'
          alt='Image of a bookmark'
        />
        <p className='max-w-lg text-2xl xl:text-3xl grow my-auto ml-8'>
          Create a list of URLs, and share it with your friends with
          <span className='font-bold'> just one link!</span>
        </p>
      </div>
      <div className=' max-w-md m-auto text-center'>
        <Link href='https://multy.me/h7t0yT'>
          <a className='hover:text-blue-600 text-blue-800'>
            Click here to see an example!
          </a>
        </Link>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='bg-panel shadow-md lg:rounded-md w-screen md:w-5/12 3xl:w-4/12 m-auto mt-5 p-8 md:p-8 md:pb-4 pb-4'>
          <div>
            <div className='flex flex-col xl:ml-auto'>
              <label className='font-light flex flex-col'>
                Create your list by adding one URL per line
                <textarea
                  className='text-black text-l leading-8 p-2 mt-2 mb-8 flex-1 resize-none rounded-sm shadow-sm'
                  placeholder={`For example\nhttps://www.google.com/\nhttps://www.google.fr/\nhttps://www.google.es/`}
                  id='urls'
                  type='textarea'
                  name='urls'
                  rows='6'></textarea>
              </label>

              <label className='font-light flex flex-col'>
                Name your list (Optional)
                <input
                  className='text-black text-xl mt-2 p-2 mb-5 box-border max-w-screen-xl rounded-sm shadow-sm'
                  size='45'
                  id='name'
                  name='name'
                  type='text'></input>
              </label>
            </div>
          </div>
        </div>
        <div className='w-screen md:w-5/12 3xl:w-4/12  m-auto'>
          <button
            className='bg-btn-200 hover:bg-btn-100 rounded-sm p-2 text-xl mb-5 w-full text-white shadow-sm font-bold mt-4'
            onClick={handleURLs}>
            {loading ? (
              <Loader
                className='flex justify-center'
                type='ThreeDots'
                color='#4ADE80'
                height={50}
                width={50}
              />
            ) : (
              "Create my list!"
            )}
          </button>
          {shortURL ? (
            <div className='flex align-middle'>
              <input
                className='text-black p-2 mr-5 my-auto shadow-md text-lg h-12'
                id='yourURL'
                size='15'
                readOnly
                value={shortURL}
              />

              <Clipboard
                onClick={() => {
                  toast.success("📋 Copied to clipboard!", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
                className='bg-btn-200 hover:bg-btn-100 rounded-sm p-2 text-base mb-5 text-white shadow-sm font-bold mt-4'
                data-clipboard-text={shortURL}>
                📋 Copy to clipboard
              </Clipboard>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
