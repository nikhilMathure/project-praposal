document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const isNikita = params.get("isNikita") === "true";
  
    document.getElementById("gfName").innerText = name;
    document.getElementById("sign1").innerText = name;
  
    if (isNikita) {
      document.getElementById("bfName").innerText = "Nikhil Mathure";
      document.getElementById("sign2").innerText = "Nikhil Mathure";
      document.getElementById("ageLine").innerText = "Nikhil Mathure is 26 years old";
    } else {
      document.getElementById("bfName").innerText = "ABC XYZ";
      document.getElementById("sign2").innerText = "ABC XYZ";
      document.getElementById("ageLine").innerText = "ABC XYZ is 50 years old";
    }
  
    const now = new Date();
    const formatted = now.toLocaleString();
    document.getElementById("dateTime").innerText = "Issued on: " + formatted;
  
    document.getElementById("downloadBtn").addEventListener("click", () => {
      const element = document.getElementById("certificate");
      html2pdf().from(element).save("Marriage_Certificate.pdf");
    });
  });
  