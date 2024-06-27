import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { bentoGridItems } from '@/data'
import { TracingBeam } from './ui/TracingBeam'

const Grid = () => {
  return (
    // <TracingBeam className="px-100">
    <section id = "about">
        <BentoGrid>
            {bentoGridItems.map((item) =>(
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                />
            ))}
        </BentoGrid>
    </section>
    // </TracingBeam>
  )
}

export default Grid