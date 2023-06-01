function insertElements() {
    const insertCount = parseInt(document.getElementById("insertCount").value);
    const arr = [];
  
    for (let i = 0; i < insertCount; i++) {
      const element = prompt(`Enter element ${i + 1}`);
      arr.push(element);
    }
  
    document.getElementById("insertResult").textContent = "Array elements: " + arr.join(", ");
  }
  
  function deleteElements() {
    const deleteCount = parseInt(document.getElementById("deleteCount").value);
    const arr = document.getElementById("insertResult").textContent.split(": ")[1].split(", ");
    
    for (let i = 0; i < deleteCount; i++) {
      const element = prompt(`Enter element ${i + 1} to remove`);
  
      // Remove all occurrences of the element from the array
      for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] === element) {
          arr.splice(j, 1);
        }
      }
    }
  
    document.getElementById("deleteResult").textContent = "Array elements: " + arr.join(", ");
  }
  