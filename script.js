document.getElementById("updateButton").addEventListener("click", function() {
    var inputText = document.getElementById("textInput").value;
    document.getElementById("updatedSection").textContent = inputText || "Please name this Oshawott";
    document.getElementById("textInput").value = ""
});