const Button = (props) => {
    let { name, className } = props;
    return <button className={className}>{name}</button>;
};

const element = (
    <div className="content-section">
        <h1 className="main-heading">Social Buttons</h1>
        <div className="button-container">
        <Button name="Like" className="btn-elmt like-btn" />
        <Button name="Comment" className="btn-elmt comment-btn" />
        <Button name="Share" className="btn-elmt share-btn" />
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
