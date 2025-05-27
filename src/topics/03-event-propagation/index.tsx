/*
     ?? event propagation has two types
	  1. Event Bubbling
	  2. Event Capturing

	  1. Event Bubbling
	  in react when we click on the child button it's by default work on event bubbling and show this output
	  "Child Clicked"
	  "Middle Clicked"
	  "Parent Clicked"

	  2. Event Capturing
	  to convert event bubbling to event capturing we need to use capture keyword end of the event name
	  "Parent Clicked"
	  "Middle Clicked"
	  "Child Clicked"
*/

import style from "./style.module.css";

function EventPropagation() {
    function handleParentClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("Parent Clicked");
    }

    function handleMiddleClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("Middle Clicked");
	  event.stopPropagation(); // stop event propagation
	  // your output is "Middle Clicked"
    }

    function handleChildClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("Child Clicked");
    }

    return (
        <div className={style.wrapper}>
            {/* event bubbling example */}
            <button type="button" className={style.parent} onClick={(event) => handleParentClick(event)}>
                <span>Parent</span>
                <button type="button" className={style.middle} onClick={(event) => handleMiddleClick(event)}>
                    <span>Middle</span>
                    <button type="button" className={style.child} onClick={(event) => handleChildClick(event)}>
                        <span>Child</span>
                    </button>
                </button>
            </button>

            {/* event capturing example */}
            {/* <button type="button" className={style.parent} onClickCapture={(event) => handleParentClick(event)}>
                <span>Parent</span>
                <button type="button" className={style.middle} onClickCapture={(event) => handleMiddleClick(event)}>
                    <span>Middle</span>
                    <button type="button" className={style.child} onClickCapture={(event) => handleChildClick(event)}>
                        <span>Child</span>
                    </button>
                </button>
            </button> */}
        </div>
    );
}

export default EventPropagation;
