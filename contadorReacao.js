const total = document.getElementById("total")
const form = document.querySelector("form")
const limpa = document.getElementById("limpa")

const footer = document.querySelector("main footer")

total.addEventListener("input" , () => {
    const hasCharactersRegex = /\D+/g
    total.value = total.value.replace(hasCharactersRegex, "")
})

limpa.onclick = (event) => {
    event.preventDefault()
    total.value = ""
    footer.classList.remove("show-result")
}

form.onsubmit = (event) =>{
    event.preventDefault()

    separarAvaliacoes(total.value)

    footer.classList.add("show-result")

}


function separarAvaliacoes(totalReacoes) {
    const amei = Math.floor(totalReacoes / 5);
    const gostei = Math.floor((totalReacoes % 5) / 4);
    const ok = Math.floor(((totalReacoes % 5) % 4) / 3);
    const podeMelhorar = Math.floor((((totalReacoes % 5) % 4) % 3) / 2);
    const naoGostei = Math.floor(((((totalReacoes % 5) % 4) % 3) % 2) / 1);

    const totalAmei = document.getElementById("1")
    const totalGostei = document.getElementById("2")
    const totalOk = document.getElementById("3")
    const totalNg = document.getElementById("5")
    const totalPm = document.getElementById("4")
    totalAmei.textContent = `Amei: ${amei}`
    totalGostei.textContent = `Gostei: ${gostei}`
    totalOk.textContent = `Ok: ${ok}`
    totalPm.textContent = `Pode Melhorar: ${podeMelhorar}`
    totalNg.textContent = `Não Gostei: ${naoGostei}`    
}

