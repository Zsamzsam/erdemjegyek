import './style.css'





document.addEventListener('DOMContentLoaded', () => {
  const grades = document.getElementById("jegy");
  const button = document.getElementById("elkuld");
  const kereso = document.getElementById("kereso");

  const arr: Array<number> = [];


  document.getElementById("kereso")!.addEventListener("input", () => {
    const keresett = Number((kereso as HTMLInputElement)?.value);
    const talalat = arr.filter((value) => value === keresett);

    document.getElementById("tanulok")!.textContent = "";
    document.getElementById("tanulok")!.textContent = talalat.toString();

  })

  button?.addEventListener("click", () => {
    arr.push(Number((grades as HTMLInputElement)?.value));
    document.getElementById("tanulok")!.textContent = arr.toString();


  })
})