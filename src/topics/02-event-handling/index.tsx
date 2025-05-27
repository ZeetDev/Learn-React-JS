/*
    ?? rules you need to follow while handling events
    1. use on keyword for events
    2. use handle keyword for function name
    3. use camelCase for events
    4. pass event when you use function in callback
*/

function EventHandling() {
    function handleShowMessage(event?: React.MouseEvent<HTMLButtonElement>) {
        alert("Hello Word");
        console.log(event);
    }

    return (
        <>
            {/* when we reference function we don't need to add brackets because we define function reference not function  */}
            <button type="button" onClick={handleShowMessage}>
                Button 1
            </button>

            {/* when we use function like this we need to pass event because react doesn't pass  */}
            <button type="button" onClick={(event) => handleShowMessage(event)}>
                Button 2
            </button>
        </>
    );
}

export default EventHandling;
