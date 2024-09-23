import  { useRef, useState } from 'react';

function Form() {
    const titleImp = useRef();
    const yearImp = useRef();

    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleImp.current.value;
        const year = yearImp.current.value;

        // Update state with correct variable names
        setData({ title, year });

        // Clear the input fields
        titleImp.current.value = '';
        yearImp.current.value = '';
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" ref={titleImp} />
                </div>

                <div>
                    <label>Year</label>
                    <input type="text" ref={yearImp} />
                </div>
                
                <button type="submit">Click me</button>
            </form>

            {data && (
                <div>
                    <h3>Submitted Data</h3>
                    <p>Title: {data.title}</p>
                    <p>Year: {data.year}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
