export function aleatorio(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return "";
    }

    const indice = Math.floor(Math.random() * lista.length);

    return lista[indice];
}

export const nome = aleatorio([
    "Ana",
    "Fernanda",
    "Marcelo",
    "Amanda",
    "Gabriel"
]);