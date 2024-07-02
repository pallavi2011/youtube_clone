import { Button } from "./Button"
import { useState } from "react";

type CategoriesProps = {

}
export const Categories = () => {
    
    
    return(
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
            {categories.map((category, index) => (
            <>
            <Button variant="dark" key={index} className="py-1 px-4 rounded-lg whitespace-nowrap">{category}</Button>
            </>
        ) )}
            </div>
        
    </div>
    )
    
}