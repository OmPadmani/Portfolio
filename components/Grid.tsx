import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { bentoGridItems } from '@/data'

const Grid = () => {
  return (
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
  )
}

export default Grid