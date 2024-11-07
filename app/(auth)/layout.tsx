import React from "react"

export default function layout ({children} : {children : React.ReactNode}) {
    return (
        <div>
        <div className="border-b p-2 text-center">
              Hurry Up Sale is till tomorrow
        </div> 
        {children}
        </div>
    )
}