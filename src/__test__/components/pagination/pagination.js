import React, { useState, useEffect } from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const ReactPagination = ({ showPerPage, onPaginationChange, totalColleges }) => {
    const [counter, SetCounter] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil((totalColleges) / showPerPage))
    useEffect(() => {
        const value = showPerPage * counter;

        if (onPaginationChange) {
            onPaginationChange(value - showPerPage, value);
        }

    }, []);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                SetCounter(1);
            } else {
                SetCounter(counter - 1);
            }
        } else if (type === "next") {
            if (Math.ceil((totalColleges) / showPerPage) === counter) {
                SetCounter(counter);
            }
            else {
                SetCounter(counter +1 );
            }
        }
    };

    return (

        <div className="d-flex justify-content-between">
            <div style={{ marginTop: '15px' }}>

                <button className="btn btn-primary" disabled={counter === 1} onClick={() => onButtonClick("prev")} style={{ margin: "10px" }}>
                    Previous
      </button>

                <button className="btn btn-primary" disabled={Math.ceil((totalColleges) / showPerPage) === counter} onClick={() => onButtonClick("next")}>
                    Next
</button>


            </div>

        </div>
    )
}

export default ReactPagination


{/* <Pagination aria-label="Page navigation example" style={{ float: 'right' }}>
            
<PaginationItem>
   <PaginationLink previous href="#" onClick={() => onButtonClick('prev')}>Previous</PaginationLink>
</PaginationItem>
<PaginationItem>
   <PaginationLink href="#">1</PaginationLink>
</PaginationItem>

{
   new Array(numberOfButtons).fill("").map((el, index) => (
       <PaginationItem {...index + 1 === counter ? "active" : null}>
           <PaginationLink href="!#" onClick={() =>SetCounter(index + 1)}>
               {index + 1}
</PaginationLink>
       </PaginationItem>
   ))
} 
<PaginationItem>
   <PaginationLink next href="#" onClick={() => onButtonClick('next')} >Next</PaginationLink>
</PaginationItem> 
</Pagination> */}