


export function separarAvaliacoes(totalReacoes: number) {
    const amei = Math.floor(totalReacoes / 5);
    const gostei = Math.floor((totalReacoes % 5) / 4);
    const ok = Math.floor(((totalReacoes % 5) % 4) / 3);
    const podeMelhorar = Math.floor((((totalReacoes % 5) % 4) % 3) / 2);
    const naoGostei = Math.floor(((((totalReacoes % 5) % 4) % 3) % 2) / 1);
    
    return {
        "Amei": amei,
        "Gostei": gostei,
        "OK": ok,
        "PodeMelhorar": podeMelhorar,
        "NãoGostei": naoGostei
    };
}