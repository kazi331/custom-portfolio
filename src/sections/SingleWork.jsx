import { useEffect } from 'react';
import './singlework.css';
import { GithubLink, linkIcon } from './SocialIcons';
import { Tooltip } from './Tooltip';
const SingleWork = ({ work }) => {
    const { name, live, client, server, thumb, tech, features, img } = work;


    useEffect(() => {
        const images = document.querySelectorAll(".thumb");
        images.forEach((img) => {
            const newUrl = img.getAttribute('img-data')
            // console.log(newUrl);
            img.src = newUrl;
        });
    }, [])


    return (
        <>
            <div className="text-gray-400  body-font overflow-hidden">
                <div className="container px-5 py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="thumb lg:w-1/2 w-full lg:h-auto h-64 aspect-video	 object-cover object-center rounded" src={thumb} img-data={img} />
                        <div className="bg-[#1E212B] shadow-xl rounded-lg px-5 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-gray-200">{
                                tech.slice(-4).map((t, i) => <span key={i} className='inline-flex pr-1 m-1 rounded-lg gap-1 bg-opacity-10 bg-indigo-400 text-gray-300'>
                                    <span className="text-2xl bg-gray-600 text-[#00ffc6] rounded-full w-5 h-5 inline-flex items-center justify-center">
                                        &#x2B;
                                    </span>
                                    {t}
                                </span>)
                            }</h2>

                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-1">{name}</h1>

                            <ul className="leading-relaxed lg:-ml-28 bg-[#1E212B]  p-4 my-4 rounded">{
                                features.map((f, i) => <li key={i}>{f}</li>)
                            }</ul>

                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a href={live} target="_blank" rel='noreferrer' className="text-indigo-400 hover:text-[#00ffc6] inline-flex items-center">Live
                                   {linkIcon}
                                </a>
                                <a href={client} target="_blank" rel='noreferrer' className="text-gray-500 hover:text-gray-300 mr-3 inline-flex items-center ml-auto leading-none text-sm py-1 ">
                                    <Tooltip message="client source code">
                                        <GithubLink>Client</GithubLink>
                                    </Tooltip>

                                </a>

                                {server &&
                                    <a href={server} target="_blank" rel='noreferrer' className="text-gray-500 hover:text-gray-300 inline-flex items-center leading-none text-sm pl-3 border-l-2 border-gray-800">
                                        <Tooltip message="server source code">
                                            <GithubLink>Server</GithubLink>
                                        </Tooltip>

                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleWork;