export default function BlogInput() {
  const handlePostChange = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    var a = document.createElement("a");
    a.download = "myFile.md";
    a.href = URL.createObjectURL(
      new Blob([e.target[0].value], { type: "text/plain" })
    );
    a.click();
  };
  return (
    <div className="container">
      <textarea></textarea>
      <input type="button" onButtonClick={handlePostChange}></input>
    </div>
  );
}
