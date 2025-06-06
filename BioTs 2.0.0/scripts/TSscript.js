const elementosQuimicos = {
    "H": { "nome": "Hidrogênio", "numero": 1, "categoria": "Não metal" },
    "He": { "nome": "Hélio", "numero": 2, "categoria": "Gás nobre" },
    "Li": { "nome": "Lítio", "numero": 3, "categoria": "Metal alcalino" },
    "Be": { "nome": "Berílio", "numero": 4, "categoria": "Metal alcalino-terroso" },
    "B": { "nome": "Boro", "numero": 5, "categoria": "Semimetal" },
    "C": { "nome": "Carbono", "numero": 6, "categoria": "Não metal" },
    "N": { "nome": "Nitrogênio", "numero": 7, "categoria": "Não metal" },
    "O": { "nome": "Oxigênio", "numero": 8, "categoria": "Não metal" },
    "F": { "nome": "Flúor", "numero": 9, "categoria": "Halogênio" },
    "Ne": { "nome": "Neônio", "numero": 10, "categoria": "Gás nobre" },
    "Na": { "nome": "Sódio", "numero": 11, "categoria": "Metal alcalino" },
    "Mg": { "nome": "Magnésio", "numero": 12, "categoria": "Metal alcalino-terroso" },
    "Al": { "nome": "Alumínio", "numero": 13, "categoria": "Metal representativo" },
    "Si": { "nome": "Silício", "numero": 14, "categoria": "Semimetal" },
    "P": { "nome": "Fósforo", "numero": 15, "categoria": "Não metal" },
    "S": { "nome": "Enxofre", "numero": 16, "categoria": "Não metal" },
    "Cl": { "nome": "Cloro", "numero": 17, "categoria": "Halogênio" },
    "Ar": { "nome": "Argônio", "numero": 18, "categoria": "Gás nobre" },
    "K": { "nome": "Potássio", "numero": 19, "categoria": "Metal alcalino" },
    "Ca": { "nome": "Cálcio", "numero": 20, "categoria": "Metal alcalino-terroso" },
    "Sc": { "nome": "Escândio", "numero": 21, "categoria": "Metal de transição" },
    "Ti": { "nome": "Titânio", "numero": 22, "categoria": "Metal de transição" },
    "V": { "nome": "Vanádio", "numero": 23, "categoria": "Metal de transição" },
    "Cr": { "nome": "Cromo", "numero": 24, "categoria": "Metal de transição" },
    "Mn": { "nome": "Manganês", "numero": 25, "categoria": "Metal de transição" },
    "Fe": { "nome": "Ferro", "numero": 26, "categoria": "Metal de transição" },
    "Co": { "nome": "Cobalto", "numero": 27, "categoria": "Metal de transição" },
    "Ni": { "nome": "Níquel", "numero": 28, "categoria": "Metal de transição" },
    "Cu": { "nome": "Cobre", "numero": 29, "categoria": "Metal de transição" },
    "Zn": { "nome": "Zinco", "numero": 30, "categoria": "Metal de transição" },
    "Ga": { "nome": "Gálio", "numero": 31, "categoria": "Metal representativo" },
    "Ge": { "nome": "Germânio", "numero": 32, "categoria": "Semimetal" },
    "As": { "nome": "Arsênio", "numero": 33, "categoria": "Semimetal" },
    "Se": { "nome": "Selênio", "numero": 34, "categoria": "Não metal" },
    "Br": { "nome": "Bromo", "numero": 35, "categoria": "Halogênio" },
    "Kr": { "nome": "Criptônio", "numero": 36, "categoria": "Gás nobre" },
    "Rb": { "nome": "Rubídio", "numero": 37, "categoria": "Metal alcalino" },
    "Sr": { "nome": "Estrôncio", "numero": 38, "categoria": "Metal alcalino-terroso" },
    "Y": { "nome": "Ítrio", "numero": 39, "categoria": "Metal de transição" },
    "Zr": { "nome": "Zircônio", "numero": 40, "categoria": "Metal de transição" },
    "Nb": { "nome": "Nióbio", "numero": 41, "categoria": "Metal de transição" },
    "Mo": { "nome": "Molibdênio", "numero": 42, "categoria": "Metal de transição" },
    "Tc": { "nome": "Tecnécio", "numero": 43, "categoria": "Metal de transição" },
    "Ru": { "nome": "Rutênio", "numero": 44, "categoria": "Metal de transição" },
    "Rh": { "nome": "Ródio", "numero": 45, "categoria": "Metal de transição" },
    "Pd": { "nome": "Paládio", "numero": 46, "categoria": "Metal de transição" },
    "Ag": { "nome": "Prata", "numero": 47, "categoria": "Metal de transição" },
    "Cd": { "nome": "Cádmio", "numero": 48, "categoria": "Metal de transição" },
    "In": { "nome": "Índio", "numero": 49, "categoria": "Metal representativo" },
    "Sn": { "nome": "Estanho", "numero": 50, "categoria": "Metal representativo" },
    "Sb": { "nome": "Antimônio", "numero": 51, "categoria": "Semimetal" },
    "Te": { "nome": "Telúrio", "numero": 52, "categoria": "Semimetal" },
    "I": { "nome": "Iodo", "numero": 53, "categoria": "Halogênio" },
    "Xe": { "nome": "Xenônio", "numero": 54, "categoria": "Gás nobre" },
    "Cs": { "nome": "Césio", "numero": 55, "categoria": "Metal alcalino" },
    "Ba": { "nome": "Bário", "numero": 56, "categoria": "Metal alcalino-terroso" },
    "La": { "nome": "Lantânio", "numero": 57, "categoria": "Lantanídeo" },
    "Ce": { "nome": "Cério", "numero": 58, "categoria": "Lantanídeo" },
    "Pr": { "nome": "Praseodímio", "numero": 59, "categoria": "Lantanídeo" },
    "Nd": { "nome": "Neodímio", "numero": 60, "categoria": "Lantanídeo" },
    "Pm": { "nome": "Promécio", "numero": 61, "categoria": "Lantanídeo" },
    "Sm": { "nome": "Samário", "numero": 62, "categoria": "Lantanídeo" },
    "Eu": { "nome": "Európio", "numero": 63, "categoria": "Lantanídeo" },
    "Gd": { "nome": "Gadolínio", "numero": 64, "categoria": "Lantanídeo" },
    "Tb": { "nome": "Térbio", "numero": 65, "categoria": "Lantanídeo" },
    "Dy": { "nome": "Disprósio", "numero": 66, "categoria": "Lantanídeo" },
    "Ho": { "nome": "Hólmio", "numero": 67, "categoria": "Lantanídeo" },
    "Er": { "nome": "Érbio", "numero": 68, "categoria": "Lantanídeo" },
    "Tm": { "nome": "Túlio", "numero": 69, "categoria": "Lantanídeo" },
    "Yb": { "nome": "Itérbio", "numero": 70, "categoria": "Lantanídeo" },
    "Lu": { "nome": "Lutécio", "numero": 71, "categoria": "Lantanídeo" },
    "Hf": { "nome": "Háfnio", "numero": 72, "categoria": "Metal de transição" },
    "Ta": { "nome": "Tântalo", "numero": 73, "categoria": "Metal de transição" },
    "W": { "nome": "Tungstênio", "numero": 74, "categoria": "Metal de transição" },
    "Re": { "nome": "Rênio", "numero": 75, "categoria": "Metal de transição" },
    "Os": { "nome": "Ósmio", "numero": 76, "categoria": "Metal de transição" },
    "Ir": { "nome": "Irídio", "numero": 77, "categoria": "Metal de transição" },
    "Pt": { "nome": "Platina", "numero": 78, "categoria": "Metal de transição" },
    "Au": { "nome": "Ouro", "numero": 79, "categoria": "Metal de transição" },
    "Hg": { "nome": "Mercúrio", "numero": 80, "categoria": "Metal de transição" },
    "Tl": { "nome": "Tálio", "numero": 81, "categoria": "Metal representativo" },
    "Pb": { "nome": "Chumbo", "numero": 82, "categoria": "Metal representativo" },
    "Bi": { "nome": "Bismuto", "numero": 83, "categoria": "Metal representativo" },
    "Po": { "nome": "Polônio", "numero": 84, "categoria": "Semimetal" },
    "At": { "nome": "Astato", "numero": 85, "categoria": "Halogênio" },
    "Rn": { "nome": "Radônio", "numero": 86, "categoria": "Gás nobre" },
    "Fr": { "nome": "Frâncio", "numero": 87, "categoria": "Metal alcalino" },
    "Ra": { "nome": "Rádio", "numero": 88, "categoria": "Metal alcalino-terroso" },
    "Ac": { "nome": "Actínio", "numero": 89, "categoria": "Actinídeo" },
    "Th": { "nome": "Tório", "numero": 90, "categoria": "Actinídeo" },
    "Pa": { "nome": "Protactínio", "numero": 91, "categoria": "Actinídeo" },
    "U": { "nome": "Urânio", "numero": 92, "categoria": "Actinídeo" },
    "Np": { "nome": "Netúnio", "numero": 93, "categoria": "Actinídeo" },
    "Pu": { "nome": "Plutônio", "numero": 94, "categoria": "Actinídeo" },
    "Am": { "nome": "Amerício", "numero": 95, "categoria": "Actinídeo" },
    "Cm": { "nome": "Cúrio", "numero": 96, "categoria": "Actinídeo" },
    "Bk": { "nome": "Berquélio", "numero": 97, "categoria": "Actinídeo" },
    "Cf": { "nome": "Califórnio", "numero": 98, "categoria": "Actinídeo" },
    "Es": { "nome": "Einstênio", "numero": 99, "categoria": "Actinídeo" },
    "Fm": { "nome": "Férmio", "numero": 100, "categoria": "Actinídeo" },
    "Md": { "nome": "Mendelévio", "numero": 101, "categoria": "Actinídeo" },
    "No": { "nome": "Nobélio", "numero": 102, "categoria": "Actinídeo" },
    "Lr": { "nome": "Laurêncio", "numero": 103, "categoria": "Actinídeo" },
    "Rf": { "nome": "Rutherfórdio", "numero": 104, "categoria": "Metal de transição" },
    "Db": { "nome": "Dúbnio", "numero": 105, "categoria": "Metal de transição" },
    "Sg": { "nome": "Seabórgio", "numero": 106, "categoria": "Metal de transição" },
    "Bh": { "nome": "Bóhrio", "numero": 107, "categoria": "Metal de transição" },
    "Hs": { "nome": "Hássio", "numero": 108, "categoria": "Metal de transição" },
    "Mt": { "nome": "Meitnério", "numero": 109, "categoria": "Metal de transição" },
    "Ds": { "nome": "Darmstádio", "numero": 110, "categoria": "Metal de transição" },
    "Rg": { "nome": "Roentgênio", "numero": 111, "categoria": "Metal de transição" },
    "Cn": { "nome": "Copernício", "numero": 112, "categoria": "Metal de transição" },
    "Nh": { "nome": "Nihônio", "numero": 113, "categoria": "Metal representativo" },
    "Fl": { "nome": "Fleróvio", "numero": 114, "categoria": "Metal representativo" },
    "Mc": { "nome": "Moscóvio", "numero": 115, "categoria": "Metal representativo" },
    "Lv": { "nome": "Livermório", "numero": 116, "categoria": "Metal representativo" },
    "Ts": { "nome": "Tennesso", "numero": 117, "categoria": "Halogênio" },
    "Og": { "nome": "Oganessônio", "numero": 118, "categoria": "Gás nobre" }
}
let elementosDetectados = [];

    function analisarSubstancia() {
        const formula = document.getElementById("nomeInput").value;
        const resultadoDiv = document.getElementById("resultado");
        const infoButton = document.getElementById("infoButton");

        const elementosEncontrados = formula.match(/[A-Z][a-z]?/g);

        if (!elementosEncontrados) {
            resultadoDiv.innerHTML = "Fórmula inválida.";
            infoButton.style.display = "none";
            return;
        }

        const elementosUnicos = new Set(elementosEncontrados);
        elementosDetectados = Array.from(elementosUnicos);

        if (elementosUnicos.size === 1) {
            resultadoDiv.innerHTML = `A substância ${formula} é <strong>Simples</strong>.`;
        } else {
            resultadoDiv.innerHTML = `A substância ${formula} é <strong>Composta</strong>.`;
        }

        // Exibir o botão de informações
        infoButton.style.display = "block";
    }

    function toggleModo() {
        document.body.classList.toggle("dark-mode");
    }

    function mostrarPopup() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
        mostrarInformacoes();
    }

    function fecharPopup() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupContent").innerHTML = "";
    }

    function mostrarInformacoes() {
        const popupContent = document.getElementById("popupContent");
        

        elementosDetectados.forEach(elemento => {
            const info = elementosQuimicos[elemento];
            if (info) {
                popupContent.innerHTML += `<p><strong>${elemento}</strong>: ${info.nome} (Número Atômico: ${info.numero}, Categoria: ${info.categoria})</p>`;
            } else {
                popupContent.innerHTML += `<p><strong>${elemento}</strong>: Elemento não reconhecido.</p>`;
            }
        });
    }