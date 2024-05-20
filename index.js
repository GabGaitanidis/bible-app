const p = document.querySelector("p");
const span = document.querySelector("span");
const btn = document.querySelector("button");

async function getData(version, book, chapter, verse) {
  try {
    const data =
      await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json
`);
    const jsonData = await data.json();
    console.log(jsonData);
    p.textContent = `'${jsonData.text}'`;
    span.innerHTML = `"${book}, ${chapter}, ${verse}"`;
  } catch (err) {
    alert(err);
  }
}

btn.addEventListener("click", () => {
  const inBook = document.getElementById("book").value;
  const inChapter = document.getElementById("chapter").value;
  const inVerse = document.getElementById("verse").value;
  const select = document.querySelector("select").value;
  getData(select, inBook, inChapter, inVerse);
});
window.onload(getData("en-asv", "genesis", 1, 1));
