let fileHandle;

const textarea = document.getElementById("textarea");

document
  .getElementById("open-file-picker")
  .addEventListener("click", async () => {
    [fileHandle] = await window.showOpenFilePicker();

    // read a file from the file system
    const file = await fileHandle.getFile();
    const contents = await file.text();

    // display the contents of the file in the textarea
    textarea.value = contents;
  });

const getNewFileHandle = async () =>{
    // additional options for the file picker to use
    const options = {
        types: [
            {
                description: "Text Files",
                accept: {
                    "text/plain": [".txt"],
                },
            },
        ],
    };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}


document.getElementById("save-as").addEventListener("click", async () => {

    const newFileHandle = await getNewFileHandle();
    
    const contents = document.getElementById('textarea').value
    
    const writable = await newFileHandle.createWritable();
    
    await writable.write(contents);
    
    await writable.close();
});

document.getElementById("save").addEventListener("click", async () => {
    const contents = document.getElementById('textarea').value
    
    const writable = await fileHandle.createWritable();
    
    await writable.write(contents);
    
    await writable.close();

})