let divs = document.querySelectorAll(".div-bloques");

divs.forEach(div => {

    div.addEventListener("mouseenter", function() {
        let div2 = div.nextElementSibling;
        let texto = div.textContent.trim();

        if (div2.querySelector(".info-extra")) return;

        let nuevoTexto = document.createElement("p");
        nuevoTexto.classList.add("info-extra");

        switch(texto) {

            case "Ciro Gonzales":
                nuevoTexto.innerText = "Desde muy chico mis habilidades sociales fueron una de mis más grandes habilidades. Actualmente me encuentro ya ejerciendo labores profesionales como Vendedor y Encargado de Almacen para Jhonn Deere.";
                break;

            case "Experiencia":
                nuevoTexto.innerText = "2023-2024 | INMERCO - Área Marketing\n2024-2025 | MEDICAL RED - Vendedor\nACTUAL | NIBOL - Encargado de Almacén";
                break;

            case "Educacion":
                nuevoTexto.innerText = "2020 - 2025 | LICENCIATURA EN ING.COMERCIAL\nUniv. Gabriel Rene Moreno\n2025 | COMMUNITY MANAGER(POSGRADO)\nGENERA CENTER\n2025- | INGLES INTERMEDIO\nCBA";
                break;

            case "Habilidades":
                let ul = document.createElement("ul");
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                let li4 = document.createElement("li");
                let li5 = document.createElement("li");
                li1.innerText = "Resolucion";
                li2.innerText = "Comunicación";
                li3.innerText = "Liderazgo";
                li4.innerText = "Buena Actitud";
                li5.innerText = "Ingles";
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                ul.appendChild(li4);
                ul.appendChild(li5);
                nuevoTexto.appendChild(ul);
                break;
        }

        
        div2.appendChild(nuevoTexto);
    });

});