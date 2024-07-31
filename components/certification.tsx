import React from 'react'
import { EvervaultCard } from './ui/Evervault'
import { Button } from './ui/MovingBorderButton';


const AzureCert = ({
    img,
    title,
    link,
  }: {
    title?: string | React.ReactNode;
    img?: string;
    link?: string;
  }) => {
  return (
    <div id="Certificate" className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] rounded-3xl top-8" style={{backgroundColor: 'rgb(18,16,14)', background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(17, 25, 40, 0.75) 100%)'}}>
        {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}
    
        <EvervaultCard img={img} />
    
        <h2 className="dark:text-white text-black mt-4 text-m font-light">
            {title}
        </h2>
        {/* <a href={link}>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Verify Certificate
        </p>
        </a> */}
        &nbsp;
        <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            <a href={link}>
                Verify Certificate
            </a>
        </Button>
    </div>
  )
}

export default AzureCert