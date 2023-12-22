

const Task = ({ idx, task }) => {
    return (
        <div className="card select-none bg-white shadow-xl m-2 cursor-pointer">
            <div className="p-5">
                <h2 className="card-title">{idx + 1}. {task?.title}</h2>
                <p>{task?.body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Task;