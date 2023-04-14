let SendButton = document.getElementById("api-send");
let OutputField = document.getElementById("output");
let ApiType = document.getElementById("api-type");
let ApiUrl = document.getElementById("api-url");

SendButton.addEventListener("click", async () => {
  OutputField.innerHTML = `Fetching...`;
  let rsp = await fetch(`${ApiUrl.value}`, { method: ApiType.value });
  let data = await rsp.json();
  OutputField.innerHTML = JSON.stringify(data);
});
